import { validateJWT } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";

export default async function newTask(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

  await db.task.create({
    data: {
      name: req.body.name,
      description: req.body.description,
      owner: {
        connect: {
          id: user.id,
        },
      },
      project: {
        connect: {
          id: req.body.projectId,
        },
      },
    },
  });

  res.json({ data: { message: "ok" } });
}
