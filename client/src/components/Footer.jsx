import React from "react";
import "./Footer.css";

function Footer() {

  const date =new Date();

  return (
    <footer>
      © {date.getFullYear()} Job Application Tracker | All rights reserved.
    </footer>
  );
}

export default Footer;
