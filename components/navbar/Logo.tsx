"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      src="/images/logo.png"
      height={100}
      width={100}
      alt="Logo"
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
