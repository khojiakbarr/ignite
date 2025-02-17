import AboutUs from "@/components/AboutUs/AboutUs";
import Employment from "@/components/Employment/Employment";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Popup from "@/components/Popup/Popup";
import Solutions from "@/components/Solutions/Solutions";
import Trust from "@/components/Trust/Trust";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Employment />
      <AboutUs />
      <Solutions />
      <Trust />
      <Footer />
    </>
  );
}
