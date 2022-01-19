import React from "react";

import { Carousel } from "react-bootstrap";
import "../Styles/Carousel.css";
export function Carousels({ data }) {
  return (
    <Carousel>
      {data.map((data, index) => (
        <Carousel.Item className="ImageCon" key={index}>
          <img className="img" src={data.ImageUrl} alt={`${index} slide`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
