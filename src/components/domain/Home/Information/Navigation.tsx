import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useLanguageContext } from "../../../../app/Language";

import { translate, Language } from "../../../../translate";

const Navigation: React.FC<{ className?: string }> = ({ className = " " }) => {
  const router = useRouter();

  const { language } = useLanguageContext();

  return (
    <div className={`d-flex justify-content-around ${className}`}>
      {translate[language as keyof Language].navigation.map((item, index) => (
        <Link
          key={item.name}
          href={translate.US.navigation[index].route}
          className={` text-yellow-hover ${
            router.asPath === translate.US.navigation[index].route
              ? "text-active fw-bolder"
              : "text-gray-500"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
