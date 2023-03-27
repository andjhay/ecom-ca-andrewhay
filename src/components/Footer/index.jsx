import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed-bottom bg-light mt-auto text-center p-2">
      <Link to="/contact">Contact</Link>
    </footer>
  );
}

export default Footer;
