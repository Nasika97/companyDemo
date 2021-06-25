import React from "react";
import AboutSrc from "../images/about.png";
import { NavLink } from "react-router-dom";
import Common from "./common";
const About = (props) => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={AboutSrc}
        visit={"/contact"}
        btnname="Contact Now"
      />
    </>
  );
};
export default About;
