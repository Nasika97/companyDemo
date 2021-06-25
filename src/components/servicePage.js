import React from "react";
import HomeSrc from "../images/Home.png";
import Card from "./card";
import { SData, CData } from "../json/sData";
import { AiOutlineCloud } from "react-icons";
const Service = (props) => {
  return (
    <>
      <div className="my-5">
        <h3 className="text-center">We deliver Digital Solutions</h3>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <h6 className="my-4 text_color">
              Our expert team design, develop and deliver best Digital Solutions
              using cutting edge Technologies.
              <br />
              <br />
              Are you planning to upgrade your IT Infrastructure?
              <br />
              <br />
              We use our expertise in handling mission critical infrastructure
              and huge volume data to design and implement resilient IT
              Infrastructure solutions that give exceptional performance with
              minimum cost.
            </h6>

            <div className="my-5">
              <h3 className="text-center">Our Products</h3>
            </div>
            <div className="row gy-4">
              {SData.map((item, index) => {
                return (
                  <Card
                    title={item.title}
                    description={item.description}
                    imgsrc={item.imgsrc}
                    products={true}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
