import { motion } from "framer-motion";

export default function Main() {
  const animateMain = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, staggerChildren: 0.5 },
    },
  };

  const animateChild = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <div>
        <div className="flex flex-col items-center lg:flex-row lg:gap-10">
          <motion.img
            className="border border-stone-800 rounded-3xl h-[30rem] w-[20rem] object-cover lg:h-[30rem]"
            src="src\assets\jony_pic.jpg"
            initial = "hidden" animate = "visible" variants={animateMain}
          />
          <motion.div className="flex flex-col items-center justify-center gap-1 mt-2 lg:gap-4" initial = "hidden" animate = "visible" variants={animateMain}>
            <motion.h2 className="text-5xl lg:text-6xl" variants={animateChild}> Jaswanth Kumar </motion.h2>
            <motion.span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent text-3xl lg:text-4xl" variants={animateChild}>
              {" "}
              Front End Developer{" "}
            </motion.span>
            <motion.p variants={animateChild}>
              {" "}
              Dynamic SQL developer with over 3 and half years of hands-on
              experience in crafting robust SQL queries, proficiently managing
              databases, and adeptly navigating Oracle Applications. Certified
              as a Java programmer by Oracle and recognized as a Coding Ninjas
              graduate, alongside being a Cyber Security expert accredited by
              CompTIA.{" "}
            </motion.p>
            <motion.a
              href="src\assets\jony_cv.pdf"
              className="bg-white rounded-full p-3 text-sm text-stone-900 text-center w-[10rem]" variants={animateChild}
            >
              {" "}
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
