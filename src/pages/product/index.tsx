import React from "react";
import Product from "./Product";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/Footer";

const index = () => {
  return (
    <div>
      <Navbar />
      <Product />
      <Footer />
    </div>
  );
};

export default index;
