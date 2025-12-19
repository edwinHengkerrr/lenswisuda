import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Loader({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader tampil sekitar 2 detik
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="text-white text-2xl font-bold"
      >
        Loading...
      </motion.div>
    </motion.div>
  );
}
