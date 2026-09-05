import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import FeaturedFood from "./components/FeaturedFood";
import Menu from "./components/Menu";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <FeaturedFood />
        <Menu />
        <Story />
        <Gallery />
        <Visit />
      </main>

      <Footer />
    </>
  );
}

export default App;