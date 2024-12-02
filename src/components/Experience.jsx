import { motion } from "framer-motion";

export default function Experience() {
  const exp = [
    {
      year: "2022 - present",
      role: "Application Developer Analyst",
      company: "Accenture",
      technology: ["SQL", "PlSQL", "Oracle Application", "OIC", "VBCS"],
    },
    {
      year: "2021 - 2022",
      role: "Application Developer Associate",
      company: "Accenture",
      technology: ["SQL", "PlSQL", "Oracle Application"],
    },
  ];

  return (
    <div>
      <div className="flex justify-center mt-10 ">
        <motion.div
          className="text-4xl mb-5"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          Experience
        </motion.div>
      </div>
      <div>
        {exp.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-10"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 1.5 }}
          >
            <div className="">{exp.year}</div>
            <div className="">
              <div className="flex items-center gap-2">
                <div className="font-bold text-xl">{exp.role}</div>
                <div className=" text-gray-500"> - </div>
                <div className="text-sm text-gray-500">{exp.company}</div>
              </div>
              <div className="flex">
                {exp.technology.map((technology, index) => (
                  <div
                    key={index}
                    className="mr-2 text-sm bg-stone-900 p-1 rounded flex items-center"
                  >
                    {technology}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
