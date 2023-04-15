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
      ownerId: user.id,
      projectId: req.body.projectId,
      description: req.body.description,
    },
  });

  res.json({ data: { message: "ok" } });
}
