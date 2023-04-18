import Greetings from "@/components/Greetings";
import GreetingsSkeleton from "@/components/GreetingsSkeleton";
import NewProject from "@/components/NewProject";
import ProjectCard from "@/components/ProjectCard";
import TasksCard from "@/components/TaskCard";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

const getData = async () => {
  const user = await getUserFromCookie(cookies());
  const projects = await db.project.findMany({
    where: {
      ownerId: user?.id,
    },
    include: {
      tasks: true,
    },
  });

  return { projects };
};

export default async function Page() {
  const { projects } = await getData();

  return (
    <div className="w-1/1 h-full overflow-y-auto pr-6">
      <div className=" h-full  min-h-[content] items-stretch justify-center">
        <div className="flex flex-1 grow">
          <Suspense fallback={<GreetingsSkeleton />}>
            <Greetings />
          </Suspense>
        </div>
        <div className="flex-2 mt-3 flex grow flex-wrap items-center ">
          <div className="flex-2 mt-3 flex grow flex-wrap items-center">
            {projects.map((project) => (
              <div className="w-1/3 p-3" key={project.id}>
                <Link href={`/project/${project.id}`}>
                  <ProjectCard project={project} projectId={project.id} />
                </Link>
              </div>
            ))}
            <NewProject />
          </div>
        </div>
        <div className="flex-2 mt-6 flex w-full grow">
          <div className="w-full">
            <TasksCard />
          </div>
        </div>
      </div>
    </div>
  );
}
