
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Button/Button";

export default function BlockAccueil1(props) {

    var settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>


            <div className="w-3/4 h-96 bg-[#a8b9ab] mt-52 ml-auto mr-auto rounded-3xl ">

                <Slider {...settings}>

                    <div className="flex">

                        <div className="flex flex-row relative">

                            <div className="flex flex-col w-1/2 h-80">
                                <div className="pt-4" >
                                    <h1 className="text-4xl text-sky-700 black text-center leading-normal">{props.h1}</h1>
                                </div>

                                <div className="ml-[200px] relative mt-20">
                                    <Button className=" h-14 w-60 rounded-3xl hover:text-sky-800      transition ease-in-out delay-0 bg-[#d5c23e] hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300" name='En savoir plus' />
                                </div>

                            </div>

                            <div className="w-2/5 mt-10 ml-10 drop-shadow-xl transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src={props.src} alt="" />
                            </div>

                        </div>
                    </div>



                    

                    <div className="flex">

                        <div className="flex flex-row relative">

                            <div className="flex flex-col w-1/2 h-80">
                                <div className="pt-4" >
                                    <h1 className="text-4xl text-sky-700 black text-center leading-normal">{props.h1}</h1>
                                </div>

                                <div className="ml-[200px] relative mt-20">
                                    <Button className="bg-[#d5c23e] h-14 w-60 rounded-3xl hover:text-sky-800 hover:bg-yellow-400 " name='En savoir plus' />
                                </div>

                            </div>

                            <div className="w-2/5 mt-10 ml-10 drop-shadow-xl ">
                                <img src={props.src} alt="" />
                            </div>

                        </div>
                    </div>


                </Slider>




            </div>
          
        </>
    )
}