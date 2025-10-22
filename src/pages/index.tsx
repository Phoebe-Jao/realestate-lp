import { Source_Sans_3, Cinzel } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Staff from "@/components/Staff";
import GetItSold from "@/components/GetItSold";
import Listings from "@/components/Listings";
import Sponsor from "@/components/Sponsor";
import PhotoGallery from "@/components/PhotoGallery";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import GoogleMap from "@/components/GoogleMap";
import Footer from "@/components/Footer";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${sourceSans.variable} ${cinzel.variable} relative overflow-hidden`}>
      <main>
        <Header />
        <Hero />
        <Staff />
        <GetItSold />
        <Listings />
        <Sponsor />
        <PhotoGallery />
        <Services />
        <Contact />
        <GoogleMap />
        <Footer />
        <div
          className="fixed top-[-6rem] inset-0 -z-10 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/hero_img.png')" }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-foreground/0 to-foreground/55" />
        </div>
      </main>
    </div>
  );
}
