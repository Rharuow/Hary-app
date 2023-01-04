import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLanguageContext } from "../context/LanguageContext";
import { useWindowSize } from "../Hooks/windowsize";

import { translate, Language } from "../translate";

const Navigation: React.FC<{ className?: string; justifyContent?: string }> = ({
  className = " ",
  justifyContent = "around",
}) => {
  const router = useRouter();

  const { language } = useLanguageContext();

  return (
    <Navbar
      variant="dark"
      expand="lg"
      className={className + " justify-content-" + justifyContent}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {translate[language as keyof Language].navigation.map(
              (item, index) => (
                <Link
                  key={item.name}
                  href={translate.US.navigation[index].route}
                  className={` text-yellow-hover ${
                    router.asPath === translate.US.navigation[index].route
                      ? "text-active fw-bolder"
                      : "text-gray-500"
                  }`}
                >
                  <Nav.Link href={translate.US.navigation[index].route}>
                    {item.name}
                  </Nav.Link>
                </Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
