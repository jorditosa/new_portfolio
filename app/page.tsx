'use client'

import About from "@/components/about/About";
import Intro from "@/components/intro/intro";
import Background from "@/components/background/Background";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Studies from "@/components/studies/Studies";
import { ClickToComponent } from "click-to-react-component";

export default function Home() {
  return (
    <main
    className="flex flex-col justify-center items-center px-4"
    >
      <ClickToComponent editor="vscode"  />
      <Intro />
      <About />
      <Projects />
      <Background />
      <Studies />
      <Skills />
      <Contact />
    </main>
  );
}
