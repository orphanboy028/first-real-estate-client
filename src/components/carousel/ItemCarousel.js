"use client";

import React from "react";
import styles from "./carousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecommendedCard from "../cards/RecommendedCard";
import { GrFormPrevious, GrFormNext } from "../../utils/ApplicationIcon";
import HighlighterCards from "../cards/HighlighterCards";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import AppartMentCard from "../cards/AppartMentCard";

const CustomPrevArrow = ({ onClick }) => (
  <div className={styles.customPrevArrow} onClick={onClick}>
    <GrFormPrevious />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className={styles.customNextArrow} onClick={onClick}>
    <GrFormNext />
  </div>
);

export default function ItemCarousel(props) {
  const { DekstopslidesToShow, mobileslidesToShow, data, cardType } = props;

  let CardComponent;

  switch (cardType) {
    case "RecommendedCard":
      CardComponent = RecommendedCard;
      break;
    case "HighlighterCards":
      CardComponent = HighlighterCards;
      break;

    case "AppartMentCard":
      CardComponent = AppartMentCard;
      break;

    default:
      CardComponent = RecommendedCard; // Default to RecommendedCard if no matching card type found
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: DekstopslidesToShow, //
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: mobileslidesToShow,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {data.map((product, index) => (
          <CardComponent {...product} />
        ))}
      </Slider>
    </div>
  );
}
