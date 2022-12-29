import Link from "next/link";
import React from "react";

const Navigation: React.FC<{ className?: string }> = ({ className = " " }) => {
  return (
    <div className={`d-flex justify-content-around ${className}`}>
      <Link href="/" className="text-gray-500 text-yellow-hover">
        Home
      </Link>

      <Link href="/about-me" className="text-gray-500 text-yellow-hover">
        Sobre mim
      </Link>

      <Link href="/my-goals" className="text-gray-500 text-yellow-hover">
        Meus objetivos
      </Link>
    </div>
  );
};

export default Navigation;
