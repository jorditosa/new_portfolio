import About from "@/components/about/About";
import SecDivider from "@/components/UI/SecDivider";
import Intro from "@/components/intro/intro";
import Background from "@/components/background/Background";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main
    className="flex flex-col justify-center items-center px-4"
    >
      <Intro />
      <SecDivider />
      <About />
      <Projects />
      <Skills />
      <Background />
      <Contact />
    </main>
  );
}
