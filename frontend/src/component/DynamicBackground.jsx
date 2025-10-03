import React from "react";
import { motion } from "framer-motion";

// 3D crossing background component
// Requirements: Tailwind CSS + Framer Motion
// Usage: import DynamicBackground from './DynamicBackground-3D';
//        Wrap your app or page content: <DynamicBackground>...children...</DynamicBackground>

export default function DynamicBackground({ children }) {
  const planeBase = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transformOrigin: "center",
    width: "140vw",
    height: "120vh",
    borderRadius: "1rem",
    mixBlendMode: "screen",
    pointerEvents: "none",
  };

  const animateLoop = {
    rotate: [0, 6, -6, 0],
    translateZ: [0, 20, -20, 0],
    transition: {
      duration: 18,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  return (
    <div
      className="relative flex-grow min-h-screen overflow-hidden"
      style={{ perspective: 1100 }}
    >
      {/* subtle environment glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-100 via-red-100 to-blue-100 dark:from-zinc-900 dark:via-yellow-800 dark:to-red-800" />

      {/* crossing 3D planes */}
      <motion.div
        style={{ ...planeBase, transform: "translate(-50%, -50%) rotateX(12deg) rotateY(-22deg)" }}
        animate={animateLoop}
        className="bg-gradient-to-r from-pink-300 via-indigo-400 to-cyan-300 opacity-40 shadow-2xl"
      />

      <motion.div
        style={{ ...planeBase, transform: "translate(-50%, -50%) rotateX(-8deg) rotateY(18deg) rotateZ(8deg)" }}
        animate={{
          ...animateLoop,
          rotate: [0, -8, 8, 0],
          translateZ: [0, -30, 30, 0],
          transition: { ...animateLoop.transition, duration: 22 },
        }}
        className="bg-gradient-to-r from-yellow-200 via-red-300 to-purple-400 opacity-35 shadow-2xl"
      />

      <motion.div
        style={{ ...planeBase, transform: "translate(-50%, -50%) rotateX(2deg) rotateY(8deg) rotateZ(-16deg)" }}
        animate={{
          ...animateLoop,
          rotate: [0, 4, -4, 0],
          translateZ: [0, 10, -10, 0],
          transition: { ...animateLoop.transition, duration: 20 },
        }}
        className="bg-gradient-to-r from-green-200 via-emerald-300 to-blue-200 opacity-30 shadow-2xl"
      />

      {/* subtle floating orbs to enhance depth */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0.12 }}
        animate={{ scale: [0.9, 1.05, 0.95, 0.9], opacity: [0.12, 0.18, 0.12, 0.12] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-8 top-24 w-56 h-56 rounded-full blur-3xl -z-20"
        style={{ background: "linear-gradient(90deg,#ffd6a5,#fca5a5)", mixBlendMode: "screen" }}
      />

      <motion.div
        initial={{ scale: 1.05, opacity: 0.09 }}
        animate={{ scale: [1.05, 0.98, 1.02, 1.05], opacity: [0.09, 0.14, 0.09, 0.09] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-12 bottom-12 w-72 h-72 rounded-full blur-3xl -z-20"
        style={{ background: "linear-gradient(90deg,#c7f9cc,#90e0ef)", mixBlendMode: "screen" }}
      />

      {/* content slot sits above 3D planes */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
}
