import React from "react";
import { motion } from "framer-motion";

// Helper function to generate random particle positions
const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const Hero = () => {
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    size: randomBetween(6, 20),
    top: randomBetween(0, 100),
    left: randomBetween(0, 100),
    delay: randomBetween(0, 5),
    duration: randomBetween(4, 8),
    color: ["#22c55e", "#14b8a6", "#34d399"][Math.floor(Math.random() * 3)],
  }));

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-6 px-6 text-center relative overflow-hidden bg-linear-to-br from-green-50 via-green-100 to-green-50">
      {/* Floating Particles (low z-index) */}
      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full opacity-50 z-0"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            backgroundColor: p.color,
          }}
          animate={{
            y: [0, -randomBetween(20, 50), 0],
            x: [0, randomBetween(-20, 20), 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content (higher z-index) */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:mt-20">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Technology incorporated in agriculture for a more sustainable
          development
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg text-neutral-700 max-w-3xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          A digital platform delivering research-backed insights, AI tools, and
          smart management systems to help your farm thrive.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="py-2 px-6 rounded-full bg-black text-white hover:bg-black/80 transition"
          >
            PlantSense coming soon
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="py-2 px-6 rounded-full border border-neutral-400 hover:bg-black hover:text-white transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
