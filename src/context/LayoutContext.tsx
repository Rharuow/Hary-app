import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import options from "../app/options-particles";
import { Button } from "react-bootstrap";
import { useLanguageContext } from "./LanguageContext";
import Navigation from "../components/Navigation";

const Layout: React.FC<{
  children: any;
}> = ({ children }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const { language, setLanguage } = useLanguageContext();

  return (
    <div className="bg-dark min-h-100vh position-relative">
      <Button
        style={{ position: "fixed", bottom: 5, right: 5, zIndex: 2000 }}
        className="bg-yellow bg-yellow-light-hover text-dark border-0"
        onClick={() =>
          setLanguage((prevState) => (prevState === "US" ? "BR" : "US"))
        }
      >
        {language}
      </Button>
      <div className="d-flex justify-content-end w-100">
        <Navigation className="me-3" />
      </div>
      {children}
      <Particles
        id="tsparticles"
        options={options as any}
        init={particlesInit}
      />
    </div>
  );
};

export default Layout;
