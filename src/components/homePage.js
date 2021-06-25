import React from "react";
import HomeSrc from "../images/Home.png";
import { NavLink } from "react-router-dom";
import Common from "./common";

const Home = (props) => {
  return (
    <>
      <Common
        name="Grow your bussiness with"
        imgsrc={HomeSrc}
        visit={"/service"}
        btnname="Get Started"
      />
    </>
  );
};
export default Home;
