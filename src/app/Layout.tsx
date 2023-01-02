import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import options from "./options-particles";
import { Button } from "react-bootstrap";
import { useLanguageContext } from "./Language";

const Layout: React.FC<{
  children: any;
}> = ({ children }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

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
      {children}
      <Particles
        id="tsparticles"
        options={options as any}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </div>
  );
};

export default Layout;
