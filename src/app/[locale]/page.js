import AboutUs from "@/components/AboutUs/AboutUs";
import Employment from "@/components/Employment/Employment";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import Solutions from "@/components/Solutions/Solutions";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Employment />
      <AboutUs />
      <Solutions />
      {/* <HorizontalScroll /> */}
      <Footer />
    </main>
  );
}
