import { FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Technologies() {
  return (
    <div className="flex flex-col items-center mt-5">
      <div className="text-4xl mb-2">Technologies</div>
      <div className=" flex flex-wrap gap-2">
        <FaReact className="text-5xl text-cyan-400" />
        <SiJavascript className="text-5xl text-red-400" />
        <RiTailwindCssFill className="text-6xl text-green-400" />
        <FaHtml5 className="text-5xl text-pink-400" />
        <FaCss3 className="text-5xl text-orange-400" />
        <PiFileSql className="text-5xl text-grey-400" />
        <FaJava className="text-5xl text-violet-400" />
      </div>
    </div>
  );
}
