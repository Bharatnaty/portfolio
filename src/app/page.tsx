import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Workflow from "@/components/Workflow";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <Skills />
      <Workflow />
      <Contact />
    </main>
  );
}