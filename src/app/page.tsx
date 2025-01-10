import Contact from "@/components/contact";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Price from "@/components/price";
import Product from "@/components/product";
import Review from "@/components/review";
import Solution from "@/components/solution";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Solution />
        <Product />
        <Cta />
        <Review />
        <Price />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
