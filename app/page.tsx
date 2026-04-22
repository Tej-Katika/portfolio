import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { NowSection } from "@/components/now-section";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { AiHorizon } from "@/components/ai-horizon";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { PageWrapper } from "@/components/page-wrapper";
import { BottomStatusBar } from "@/components/bottom-status-bar";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <Hero />
        <NowSection />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AiHorizon />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BottomStatusBar />
    </PageWrapper>
  );
}
