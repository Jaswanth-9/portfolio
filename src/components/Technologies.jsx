import { FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Technologies() {
  const icons = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="flex flex-col items-center mt-10">
      <motion.div
        className="text-4xl mb-5"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
      >
        Technologies
      </motion.div>
      <motion.div
        className=" flex flex-wrap gap-3 lg:gap-6"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div initial="initial" animate="animate" variants={icons(4)}>
          <FaReact className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={icons(3)}>
          <SiJavascript className="text-5xl text-red-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={icons(4.5)}>
          <RiTailwindCssFill className="text-6xl text-green-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={icons(3.5)}>
          <FaHtml5 className="text-5xl text-pink-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={icons(4)}>
          <FaCss3 className="text-5xl text-orange-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={icons(5)}>
          <PiFileSql className="text-5xl text-grey-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={icons(3.5)}>
          <FaJava className="text-5xl text-violet-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}
