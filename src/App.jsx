import Navbar from "./Navbar";
import Hero from "./Hero";
import Properties from "./Properties";
import WhyChooseUs from "./WhyChooseUs";
import Developers from "./Developers"; // ✅ ADD THIS
import Blog from "./Blog";
import Stats from "./Stats";
import MegaFooter from "./MegaFooter";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Properties Section */}
      <Properties />

      {/* Why Choose Section */}
      <WhyChooseUs />

      {/* 🔥 NEW Developers Section */}
      <Developers />

      {/* Blog Section */}
      <Blog />

      {/* Stats Section */}
      <Stats />

      {/* Mega Footer */}
      <MegaFooter />

      {/* Final Footer */}
      <Footer />
    </>
  );
}

export default App;