import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Gallery from "./components/Gallery";
import Merit from "./components/Merit";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navigation scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />

        <Merit />
        <Highlights />
        <Gallery />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
