import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navigation: React.FC<{ className?: string }> = ({ className = " " }) => {
  const router = useRouter();

  console.log("router = ", router.asPath);

  return (
    <div className={`d-flex justify-content-around ${className}`}>
      <Link
        href="/"
        className={` text-yellow-hover ${
          router.asPath === "/" ? "text-active fw-bolder" : "text-gray-500"
        }`}
      >
        Home
      </Link>

      <Link
        href="/about-me"
        className={` text-yellow-hover ${
          router.asPath === "/about-me"
            ? "text-active fw-bolder"
            : "text-gray-500"
        }`}
      >
        Sobre mim
      </Link>

      <Link
        href="/my-goals"
        className={` text-yellow-hover ${
          router.asPath === "/my-goals"
            ? "text-active fw-bolder"
            : "text-gray-500"
        }`}
      >
        Meus objetivos
      </Link>
    </div>
  );
};

export default Navigation;
