import React from "react";
import HomeSrc from "../images/Home.png";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto d-flex">
        <div className="card">
          {props.product === false && props.icon}
          {/* <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} /> */}
          <div className="card-body">
            <h5 className="card-title card_title">{props.title}</h5>
            <p className="card-text text_color">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
