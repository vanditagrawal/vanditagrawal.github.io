import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion"; // You had "motion/react" — should be "framer-motion"

const HeroText = () => {
  const words = ["Creative", "Interactive", "Immersive"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-3xl font-medium" // ↓ Reduced from 4xl
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Vandit Agrawal
        </motion.h1>

        <div className="flex flex-col items-start">
          <motion.p
            className="text-4xl font-medium text-neutral-300" // ↓ Reduced from 5xl
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Crafting Immersive 3D Worlds
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-6xl" // ↓ Reduced from 8xl
            />
          </motion.div>

          <motion.p
            className="text-3xl font-medium text-neutral-300" // ↓ Reduced from 4xl
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            & Engaging Game Experiences
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden items-center">
        <motion.p
          className="text-2xl font-medium" // ↓ Reduced from 4xl
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Vandit
        </motion.p>

        <motion.p
          className="text-3xl font-black text-neutral-300" // ↓ Reduced from 5xl
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Building
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <FlipWords
            words={words}
            className="font-bold text-white text-5xl" // ↓ Reduced from 7xl
          />
        </motion.div>

        <motion.p
          className="text-3xl font-black text-neutral-300" // ↓ Reduced from 4xl
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          3D Worlds & Games
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
