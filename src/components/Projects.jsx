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
        <div className="text-4xl">Projects</div>
      </div>
      <div>
        {proj.map((proj, index) => (
          <div key={index}>
            <div className="text-xl font-bold mt-4">{proj.title} </div>
            <p className="text-stone-400">{proj.description}</p>
            {proj.technology.map((tech, index) => (
                <span key = {index} className = "bg-stone-900 text-stone-300 text-sm mr-2 mt-8 p-1 font-medium rounded">{tech}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
