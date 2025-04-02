
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Mentorship from "@/components/Mentorship";
import Products from "@/components/Products";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Newsletter />
        <Mentorship />
        <Products />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
