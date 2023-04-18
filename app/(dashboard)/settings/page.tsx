"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function Settings() {
  const router = useRouter();
  const HandleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      router.push("/signin");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Button onClick={HandleClick} typeof="submit" intent="secondary">
      Logout
    </Button>
  );
}
