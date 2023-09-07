"use client";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="/images/logo.png"
      height={100}
      width={100}
      alt="Logo"
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
