import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import companionAnim from "../assets/companion.json";

const Companion = ({ targetRef }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = () => {
      if (!targetRef?.current) return;

      const rect = targetRef.current.getBoundingClientRect();

      setPos({
        x: rect.left + rect.width + 20,
        y: rect.top + rect.height / 2 - 60,
      });
    };

    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetRef]);

  return (
    <motion.div
      animate={{
        x: pos.x,
        y: pos.y,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 120,
        height: 120,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <Lottie animationData={companionAnim} loop autoplay />
    </motion.div>
  );
};

export default Companion;