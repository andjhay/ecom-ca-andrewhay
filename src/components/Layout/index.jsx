import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mb-5 pb-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
