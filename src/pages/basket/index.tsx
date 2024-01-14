import React from "react";
import Baskets from "./container/Baskets";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/Footer";

const index = () => {
  return (
    <div>
      <Navbar />
      <Baskets />
      <Footer />
    </div>
  );
};

export default index;
