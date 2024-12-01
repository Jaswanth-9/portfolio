import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <h1 className="text-white font-bold text-4xl">JK</h1>
      </div>
      <div className="m-8 flex gap-3 justify-center items-center text-2xl">
        <a href="https://www.linkedin.com/in/jaswanth-kumar-7223a6170/" > <FaLinkedin /></a>
        <a href="https://github.com/Jaswanth-9" > <FaGithub /></a>
        <a href="mailto:jaswanthkumars1999@gmail.com"> <MdEmail /></a>
      </div>
    </div>
  );
}
