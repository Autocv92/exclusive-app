import { Ads } from "../components/Ads";
import { BestSellingProducts } from "../components/BestSellingProducts";
import { Category } from "../components/Category";
import { Feature } from "../components/Feature";
import { FlashSale } from "../components/FlashSale";
import { Hero } from "../components/Hero";
import { NewArrival } from "../components/NewArrival";
import { OurProducts } from "../components/OurProducts.jsx";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FlashSale />
      <Category />
      <BestSellingProducts />
      <Ads />
      <OurProducts />
      <NewArrival />
      <Feature />
    </div>
  );
}
