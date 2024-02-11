import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Aparaitre(){

    var settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };


    return(

        <>
        
        

        <Slider {...settings}>
        <div className=" w-1/4 h-60">
            <img src="pictures/roman6.jpeg" alt="" />
            </div>
            <div className=" w-1/4 h-60">
            <img src="pictures/roman-avez_vous_lu.jpg" alt="" />
            </div>
            <div className=" w-1/4 h-60">
            <img src="pictures/roman3.jpeg" alt="" />
            </div>
            <div className=" w-1/4 h-60">
            <img src="pictures/roman1.jpeg" alt="" />
            </div>
            <div className=" w-1/4 h-60">
            <img src="pictures/roman_sors_de_ta_zone_de_confort_nelly.jpg" alt="" />
            </div>
            <div className=" w-1/4 h-60">
            <img src="pictures/roman4.jpeg" alt="" />
            </div>
        </Slider>
        </>
    )
}