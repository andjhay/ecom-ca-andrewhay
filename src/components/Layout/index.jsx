import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ searchInput, onSearchInputChange }) => {
  return (
    <>
      <Header />
      <main className="mb-5">
        <Outlet searchInput={searchInput} onSearchInputChange={onSearchInputChange} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
