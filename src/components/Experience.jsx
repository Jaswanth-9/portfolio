import { motion } from "framer-motion";

export default function Experience() {
  const exp = [
    {
      year: "2021-2022",
      role: "Application Developer Associate",
      company: "Accenture",
      technology: ["SQL", "PlSQL", "Oracle Application"],
    },
    {
      year: "2022-present",
      role: "Application Developer Analyst",
      company: "Accenture",
      technology: ["SQL", "PlSQL", "Oracle Application", "OIC", "VBCS"],
    },
  ];

  const animateMain = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.5 },
    },
  };

  const animateChild = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="text-4xl mb-5">Experience</div>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-center  lg:gap-4">
        {exp.map((exp, index) => (
          <div key={index} className="border rounded p-3 my-3 lg:mx-10">
            <div className="text-sm">{exp.year}</div>
            <div className="flex items-center gap-0.5">
              <div className="font-bold text-xl">{exp.role}</div>
              <div> - </div>
              <div className="text-sm">{exp.company}</div>
            </div>
            <div className="flex">
              {exp.technology.map((technology, index) => (
                <div key={index} className="mr-2 text-sm bg-stone-900 p-1 rounded">
                  {technology}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
