import { validateJWT } from "@/lib/auth";
import { serialize } from "cookie";
import { useRouter } from "next/router";

export default async function LogoutHandler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    res.setHeader(
      "Set-Cookie",
      serialize(process.env.COOKIE_NAME, null, {
        httpOnly: true,
        path: "/",
        maxAge: 0,
      })
    );
    res.json({ message: "logout" });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
