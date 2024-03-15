import React from "react";

import Main from "./Main";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SkillCard from "./SkillCard";
import banner from "../../assets/images/projects/home-images/icondb/icondb.png";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
  <Main>
    <Slider {...settings}>
        <SkillCard title="HTML / CSS">Hi</SkillCard>
        <SkillCard title="JavaScript">Hi</SkillCard>
        <SkillCard title="React">Hi</SkillCard>
        <SkillCard title="styled-components">Hi</SkillCard>
    </Slider>
  </Main>
  );
}
