import React from "react";
import styled from "styled-components";

// Trying styled components
const MyFooter = styled.footer`
  padding: 10px;
  opacity: 80%;
`;

function Footer() {
  return <MyFooter className="fixed-bottom bg-footer mt-auto text-center">&copy; Copyright 2023</MyFooter>;
}

export default Footer;
