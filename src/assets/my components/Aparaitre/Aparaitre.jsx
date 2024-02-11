import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Aparaitre() {

    var settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        
    };


    return (

        <>

            <div className="pt-10">

            <Slider {...settings} >
       
            <div className=" w-1/4 h-60 bg-[url('pictures/roman-empreinte_maryse.jpg')] bg-[length:100%] transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300 ">
            
            </div>
            <div className=" w-1/4 h-60 bg-[url('pictures/roman1.jpeg')] bg-[length:100%] transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
            
            </div>

            <div className=" w-1/4 h-60 bg-[url('pictures/roman2.jpeg')] bg-[length:100%] transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
           
            </div>
            <div className=" w-1/4 h-60 bg-[url('pictures/roman3.jpeg')] bg-[length:100%] transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
          
            </div>
            <div className=" w-1/4 h-60 bg-[url('pictures/roman4.jpeg')] bg-[length:100%] transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
           
            </div>
            <div className=" w-1/4 h-60 bg-[url('pictures/roman5.jpeg')] bg-[length:100%] transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
           
            </div>

            </Slider>
            </div>
        </>


    )
}