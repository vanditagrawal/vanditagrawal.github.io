import React from 'react'
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import sky from "../assets/sky.jpg";
import mountain3 from "../assets/mountain-3.png";
import planets from "../assets/planets.png";
import mountains2 from "../assets/mountain-2.png";
import mountains1 from "../assets/mountain-1.png";
 
const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, {damping:50 });
    const mountain3Y = useTransform(x, [0,0.5], 
    ["0%", "70%"])
    const planetsX = useTransform(x, [0,0.5], 
    ["0%", "-20%"])
    const mountain2Y = useTransform(x, [0,0.5], 
    ["0%", "30%"])
    const mountain1Y = useTransform(x, [0,0.5], 
    ["0%", "0%"])
  return (
    <section className="absolute inset-0 bg-black/40">
    <div className="relative h-screen overflow-y-hidden">
        {/*background sky */}
        <div className="absolute inset-0 w-full h-screen -z-50"
        style={{
            backgroundImage: `url(${sky})`,
            backgroundPosition: "bottom",
            backgrondSize: "cover",
        }} 
        />
        {/*mountain layer 3*/}
        <motion.div className="absolute inset-0 -z-40" 
        style={{
            backgroundImage: `url(${mountain3})`,
            backgroundPosition: "bottom",
            backgrondSize: "cover",
            y: mountain3Y,
        }} 
        />
        {/*planets*/}
        <motion.div 
        className="absolute inset-0 -z-30" 
        style={{
            backgroundImage: `url(${planets})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
        }}
        />
        {/*mountain layer 2*/}
        <motion.div 
        className="absolute inset-0 -z-20" 
        style={{
            backgroundImage: `url(${mountains2})`,
            backgroundPosition: "bottom",
            backgrondSize: "cover",
            y: mountain2Y,
        }}
        />
        {/*mountain layer 1*/}
        <motion.div
        className="absolute inset-0 -z-10" 
        style={{
            backgroundImage: `url(${mountains1})`,
            backgroundPosition: "bottom",
            backgrondSize: "cover",
            y: mountain1Y,
        }} 
        />
    </div>
    </section>
  );
};

export default ParallaxBackground
