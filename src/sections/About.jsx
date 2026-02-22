import { useRef, useState } from "react";
import setup from "../assets/setup1.png";

// ✅ IMPORT LOGOS (IMPORTANT FIX)
import blenderLogo from "../assets/blender.png";
import unrealLogo from "../assets/unreal.png";
import cppLogo from "../assets/cplusplus.svg";

import Card from "../components/Card.jsx";
import { Globe } from "../components/Globe.jsx";
import { Framework } from "../components/Framework.jsx";
import "./glow.css";
import CopyEmailButton from "../components/CopyEmailButton.jsx";

const About = () => {
  const grid2Container = useRef();
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 1 */}
        <div
          className="grid-default-color grid-1 relative overflow-hidden group"
          onClick={() => setShowOverlay(!showOverlay)}
        >
          <img
            src={setup}
            alt="Setup"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className={`absolute bottom-0 left-0 w-full z-10 p-4 
              bg-black/40 transform transition-all duration-300 ease-in-out
              ${showOverlay ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
              group-hover:translate-y-0 group-hover:opacity-100`}
          >
            <p className="headtext text-white text-lg font-semibold">
              Hi I'm Vandit Agrawal
            </p>
            <p className="subtext text-white">
              a 3D artist and game developer creating immersive environments and
              interactive experiences that bring ideas to life.
            </p>
          </div>

          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2 relative">
          <div ref={grid2Container} className="relative w-full h-full">

            <p
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              text-4xl md:text-5xl text-gray-500 font-bold whitespace-nowrap text-glow"
            >
              CODE IS CRAFT
            </p>

            {/* Floating text cards */}
            <Card
              style={{ rotate: "75deg", top: "25%", left: "15%", width: "8rem" }}
              text="Immersive Worlds"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "70%", left: "30%", width: "8rem" }}
              text="Interactive Gameplay"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", top: "20%", left: "65%", width: "8rem" }}
              text="3D Assets"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-40deg", top: "55%", left: "5%", width: "8rem" }}
              text="Environment Design"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "40%", width: "8rem" }}
              text="Game Mechanics"
              containerRef={grid2Container}
            />

            {/* ✅ FIXED LOGOS */}
            <Card
              style={{
                position: "absolute",
                width: "4rem",
                height: "4rem",
                top: "35%",
                left: "25%",
                transform: "translate(-50%, -50%) rotate(-15deg)",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              image={blenderLogo}
              containerRef={grid2Container}
            />

            <Card
              style={{
                position: "absolute",
                width: "4rem",
                height: "4rem",
                top: "60%",
                left: "70%",
                transform: "translate(-50%, -50%) rotate(20deg)",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              image={unrealLogo}
              containerRef={grid2Container}
            />

            <Card
              style={{
                position: "absolute",
                width: "4rem",
                height: "4rem",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(-10deg)",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              image={cppLogo}
              containerRef={grid2Container}
            />

          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in India,<br /> and open to remote work<br /> worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5 relative overflow-hidden">
          <div className="z-10 w-[50%] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in 3D art and asset creation using Blender and Substance Painter.
              I also work with Unity, Unreal Engine, and C# to bring interactive experiences to life.
            </p>
          </div>

          <div
            className="absolute inset-y-0 md:inset-y-9 
            w-full h-full start-[50%] md:scale-125 
            pointer-events-none -translate-y-[40%]"
          >
            <Framework />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;