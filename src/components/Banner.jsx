import React from "react";
import { motion } from "framer-motion";

const shapes = [...Array(15)].map(() => ({
  size: Math.random() * 40 + 20, // Random size (20px to 60px)
  x: Math.random() * 100, // Anywhere on the screen
  y: Math.random() * 100, // Anywhere on the screen
  duration: Math.random() * 4 + 2, // Random animation duration (2s to 6s)
  shapeType: Math.random() > 0.5 ? "circle" : "square", // Random shape
}));

const Banner = () => {
  return (
    <motion.div
      className="relative w-full h-[250px] flex items-center justify-center overflow-hidden z-40"
      animate={{
        background: [
          "linear-gradient(45deg, #1e1b4b, #3b0764, #0f172a)",
          "linear-gradient(45deg, #3b0764, #312e81, #1e1b4b)",
          "linear-gradient(45deg, #312e81, #1e1b4b, #0f172a)",
        ],
        transition: { duration: 5, repeat: Infinity, repeatType: "mirror" },
      }}
    >
      {/* Animated Profile Image */}
      <motion.img
        src="/wall2.png"
        alt="Profile"
        className="w-80 h-80 mt-12  z-[49]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Floating Animated Shapes */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${
            shape.shapeType === "circle" ? "rounded-full" : "rounded-md"
          } bg-purple-400 shadow-xl`}
          style={{
            width: shape.size,
            height: shape.size,
            top: `${shape.y}%`,
            left: `${shape.x}%`,
          }}
          animate={{
            x: [0, Math.random() * 20 - 10], // Slight horizontal movement
            y: [0, Math.random() * 20 - 10], // Slight vertical movement
            rotate: [0, 360], // Continuous rotation
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </motion.div>
  );
};

export default Banner;
