import React from "react";
import Purchase from "./container/Purchase";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/Footer";

const index = () => {
  return (
    <div>
      <Navbar />
      <Purchase />
      <Footer />
    </div>
  );
};

export default index;
