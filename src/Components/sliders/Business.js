import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slide from "../../Images/slider-img.png";
import Slide_2 from "../../Images/newsfeed-image.png";
import Close from "../../Images/close.svg";

export default function NewsSlider() {
    const [storymodal, setStoryModal] = React.useState(false);
    const story = {
        className: "",
        centerMode: false,
        infinite: false,
        slidesToShow: 1,
        initialSlide: 0,
        speed: 1000,
        arrows: true,
    };

    return (
        <Slider {...story} >
            <div className="container-fluid ">
                <div className="row">
                   <div className="slide-img">
                        <img  src={Slide} alt="slider" className="img-fluid"/>
                   </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                   <div className="slide-img">
                        <img  src={Slide_2} alt="slider" className="img-fluid"/>
                   </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                   <div className="slide-img">
                        <img  src={Slide} alt="slider" className="img-fluid"/>
                   </div>
                </div>
            </div>
        </Slider>
    );
}
