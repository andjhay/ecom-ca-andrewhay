import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed-bottom bg-footer mt-auto text-center p-2">
      <Link className="text-white" to="/contact">Contact</Link>
    </footer>
  );
}

export default Footer;
