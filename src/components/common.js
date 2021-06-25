import React from "react";
import HomeSrc from "../images/Home.png";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 oder-lg-1 d-flex justify-content-center flex-column">
                  {props.visit === "/contact" ? (
                    <>
                      <h5 className="text-center my-4 text_color">
                        We are cutting-edge technology vendor providing Digital
                        solutions to new age businesses, mapping technology
                        solutions to business needs with customer experience as
                        our top priority.
                        <br />
                        <br />
                        Our agile software development practices, excellent UI
                        design, focus on quality and vast experience across
                        various domains and technologies give us the advantage
                        of being a reliable team to deliver technology
                        solutions.
                        <br />
                        <br />
                        Our highly motivated young entrepreneur team help
                        businesses achieve their goals
                      </h5>
                    </>
                  ) : (
                    <>
                      <h1>
                        {props.name}
                        <strong className="brand_name">
                          {" "}
                          Zoi Fintech Services
                        </strong>
                      </h1>
                      <h2 className="my-1">Coding is our Passion</h2>
                      <h2 className="my-1">Always add Value to Customers</h2>
                      <h2 className="my-1">Our World Our Products</h2>
                    </>
                  )}
                  <div
                    className={`mt-3 ${
                      props.visit === "/contact" ? "text-center" : ""
                    }`}
                  >
                    <NavLink className="btn-started" to={props.visit}>
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
