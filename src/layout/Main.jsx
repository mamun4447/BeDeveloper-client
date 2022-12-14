import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/NavComponent/Nav";

const Main = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
