import Item from "../Item/Item";
import lists from "../../assets/list.json";
import "./SliderList.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

function SliderList() {
  const sliderRef = useRef(null);
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="sliderContainer">
        <Slider ref={sliderRef} {...settings} style={{ gap: "10px" }}>
          {lists.map((list) => (
            <Item
              key={list.id}
              img={list.imageUrl}
              title={list.title}
              pricesale={list.priceSale}
              pricenormal={list.priceNormal}
            />
          ))}
        </Slider>
      </div>
      <div className="info">
        <div className="buttons">
          <button
            className="button"
            onClick={() => sliderRef.current.slickPrev()}
            aria-label="Previous"
          />
          <button
            className="button"
            onClick={() => sliderRef.current.slickNext()}
            aria-label="Next"
          />
        </div>
        <div>
          {" "}
          <a className="link" href="#">
            Смотреть все
          </a>
        </div>
      </div>
    </>
  );
}

export default SliderList;
