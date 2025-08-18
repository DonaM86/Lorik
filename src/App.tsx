import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Gallery from "./components/Gallery";
import Merit from "./components/Merit";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import SEO from "./SEO";

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>   <SEO />
      <Navigation scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Merit />
        <Highlights />
        <Gallery />
      </main>
      <LanguageSwitcher />
      <Footer />
    </>
  );
}
