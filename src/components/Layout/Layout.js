import React from "react";
import Navbar from "../Navbar/Navbar";
import LendingServices from "../LendingServices/LendingServices";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <LendingServices />
      <Footer />
    </>
  );
}

export default Layout;
