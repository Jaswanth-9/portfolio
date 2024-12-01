export default function Main() {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center lg:flex-row lg:gap-10">
          <img
            className="border border-stone-800 rounded-3xl h-[30rem] w-[20rem] object-cover lg:h-[30rem]"
            src="src\assets\jony_pic.jpg"
          />
          <div className="flex flex-col items-center justify-center gap-1 mt-2 lg:gap-4">
            <h2 className="text-5xl lg:text-6xl"> Jaswanth Kumar </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent text-3xl lg:text-4xl">
              {" "}
              Front End Developer{" "}
            </span>
            <p>
              {" "}
              Dynamic SQL developer with over 3 and half years of hands-on
              experience in crafting robust SQL queries, proficiently managing
              databases, and adeptly navigating Oracle Applications. Certified
              as a Java programmer by Oracle and recognized as a Coding Ninjas
              graduate, alongside being a Cyber Security expert accredited by
              CompTIA.{" "}
            </p>
            <a href="src\assets\jony_cv.pdf" className="bg-white rounded-full p-3 text-sm text-stone-900 text-center w-[10rem]"> Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}
