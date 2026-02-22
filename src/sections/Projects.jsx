import React, { useState, useEffect } from "react";
import { myProjects } from "../constants";
import Project from "../components/Project.jsx";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const [preview, setPreview] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileCheck = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);
  }, []);

  const handleMouseMove = (e) => {
    if (!isMobile) {  // only move preview on desktop
      x.set(e.clientX + 20);
      y.set(e.clientY + 20);
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project
          key={project.id}
          {...project}
          setPreview={setPreview}
          isMobile={isMobile}  // pass flag
        />
      ))}

      {preview && !isMobile && (  // show preview only on desktop
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-40 w-56 rounded-lg shadow-lg pointer-events-none"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
