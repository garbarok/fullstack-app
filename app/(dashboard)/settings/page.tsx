"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useEffect, useState } from "react";

export default function Settings() {
  const router = useRouter();
  const HandleClick = async () => {
    const response = await fetch("/api/signout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    router.push("/");
  };
  return (
    <Button onClick={HandleClick} typeof="submit" intent="secondary">
      Logout
    </Button>
  );
}
