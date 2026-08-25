import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import MascotCursor from './components/MascotCursor';
import { Hero } from './features/hero';
import { About } from './features/about';
import { Projects } from './features/projects';
import { Skills } from './features/skills';
import { Contact } from './features/contact';

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <MascotCursor />
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
