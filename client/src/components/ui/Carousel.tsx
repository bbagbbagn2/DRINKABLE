import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import main from "../../assets/images/Campaign Main1.png";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <Slider {...settings}>
      <Container>
        <CarouselItem src={main} />
      </Container>
      <CarouselItem src={main} />

      <CarouselItem src={main} />

      <CarouselItem src={main} />
    </Slider>
  );
}

const Container = styled.div`
    aspect-ratio: 2.119205298;
    border-radius: 16px;
    margin-top: 32px;
`;

const CarouselItem = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
