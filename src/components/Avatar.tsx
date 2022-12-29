import Image from "next/image";
import React from "react";

const Avatar: React.FC<{
  width?: number;
  height?: number;
  src?: string;
  className?: string;
  style?: {};
}> = ({
  width = 320,
  height = 320,
  src = "/profile.png",
  className = " ",
  style = {},
}) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      className={className}
      alt="avatar image"
      style={style}
    />
  );
};

export default Avatar;
