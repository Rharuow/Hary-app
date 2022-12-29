import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import options from "./options-particles";

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
  return (
    <div className="bg-dark min-h-100vh">
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
