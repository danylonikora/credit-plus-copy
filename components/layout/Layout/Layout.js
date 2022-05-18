import React from "react";
import Navbar from "../Navbar/Navbar";
import LendingServices from "../LendingServices/LendingServices";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <LendingServices />
      <Footer />
    </>
  );
}

export default Layout;
