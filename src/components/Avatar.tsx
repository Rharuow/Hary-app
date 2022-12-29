import Image from "next/image";
import React from "react";

const Avatar: React.FC<{
  width?: number;
  height?: number;
  src?: string;
  className?: string;
}> = ({ width = 320, height = 320, src = "/profile.png", className = " " }) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      className={className}
      alt="avatar image"
    />
  );
};

export default Avatar;
