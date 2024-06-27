import React from "react";
import Hero from "./Hero";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Universe from "./Universe";

const ProductsPage = () => {
  return (
    <div>
      <Hero />
      <LeftSection
        imageUrl="/images/products/products-kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo"
        learnMore="Learn more "
      />
      <RightSection
        imgUrl="/images/products/products-console.png"
        heading="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link="Learn more "
      />

      <LeftSection
        imageUrl="/images/products/products-coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore=""
      />
      <RightSection
        imgUrl="/images/products/products-kiteconnect.png"
        heading="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link="Kite Connect  "
      />

      <LeftSection
        imageUrl="/images/products/varsity-products.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
      />

      <Universe />
    </div>
  );
};

export default ProductsPage;
