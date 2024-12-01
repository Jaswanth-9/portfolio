import Experience from "./components/Experience";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

export default function App() {
  return (
    <div className="text-stone-300 overflow-hidden antialiased">
      <div className="fixed -z-10">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="px-8">
        <NavBar />
        <Main />
        <Technologies />
        <Projects />
        <Experience />
      </div>
    </div>
  );
}
