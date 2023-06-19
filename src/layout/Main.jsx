import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <>
      <Header />

      <div className="border-[10px] w-full h-[92.5vh] overflow-y-scroll frame">
        <Outlet />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Main;
