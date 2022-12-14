import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useLanguageContext } from "../context/LanguageContext";
import { useWindowSize } from "../Hooks/windowsize";

import { translate, Language } from "../translate";

const Navigation: React.FC<{ className?: string; justifyContent?: string }> = ({
  className = " ",
  justifyContent = "end",
}) => {
  const router = useRouter();

  const { isMobile } = useWindowSize();

  const { language } = useLanguageContext();

  return (
    <Navbar
      expand="lg"
      className={` justify-content-${justifyContent} ${className}`}
    >
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="border-color-secondary bg-secondary"
      />
      <Navbar.Collapse id="basic-navbar-nav" className={`mt-2`}>
        <Nav>
          {translate[language as keyof Language].navigation.map(
            (item, index) => (
              <Link
                key={item.name}
                href={translate.US.navigation[index].route}
                className={`text-hover text-yellow-hover text-end ${
                  isMobile ? " " : "me-3"
                } ${
                  router.asPath === translate.US.navigation[index].route
                    ? "text-active fw-bolder"
                    : "text-gray-500"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
