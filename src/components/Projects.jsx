import { motion } from "framer-motion";

export default function Projects() {
  const proj = [
    {
      title: "OAS Data Archival Program",
      description:
        "Created a solution to transfer critical period data to a commission reporting system using systematic extraction and reintroduction methods.Implemented data partitioning to efficiently manage large datasets, optimizing the archival process and improving performance by 100%",
      technology: ["PlSql", "SQL", "Database Management"],
    },
    {
      title: "FO Vault Audit Approval",
      description:
        " Developed an application to streamline invoice review processes by assigning invoices to stakeholders based on amounts, enforcing a 2-day approval window, and reducing human interaction by 80%. Automated approval for invoices under $50 and facilitated reviewer feedback loops for revisions, leading to efficient invoice management and monthly savings of $3000.",
      technology: ["PlSql", "SQL"],
    },
    {
      title: "OTC Count",
      description:
        "Played a key role in the OAS project, enhancing reporting capabilities by computing One-Time-Charge counts for salespersons within specified Period IDs. Enabled user input for Period IDs and populated data into custom tables, eliminating reliance on specific legacy tables for data retrieval",
      technology: ["PlSql", "SQL", "Database Management"],
    },
  ];
  return (
    <div>
      <div className="flex justify-center mt-10">
        <motion.div
          className="text-4xl"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 1.5 }}
        >
          Projects
        </motion.div>
      </div>
      <div>
        {proj.map((proj, index) => (
          <div key={index}>
            <motion.div
              className="text-xl font-bold mt-4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 2 }}
            >
              {proj.title}{" "}
            </motion.div>
            <motion.p className="text-stone-400"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 2 }}>{proj.description}</motion.p>
            {proj.technology.map((tech, index) => (
              <motion.span
                key={index}
                className="bg-stone-900 text-stone-300 text-sm mr-2 mt-8 p-1 font-medium rounded"
                whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
