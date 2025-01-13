import About from "@/components/about/About";
import Intro from "@/components/intro/intro";
import Background from "@/components/background/Background";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Studies from "@/components/studies/Studies";
import { getDictionary } from './dictionaries'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'ca' }>
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <main
    className="flex flex-col justify-center items-center px-4"
    >
      <Intro dict={dict} />
      <About dict={dict} />
      <Projects dict={dict} />
      <Background dict={dict} />
      <Studies dict={dict} />
      <Skills dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
