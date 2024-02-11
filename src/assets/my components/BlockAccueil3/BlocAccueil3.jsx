import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function BlockAccueil3() {

    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

    };

    return (

        <>

            <div className="w-3/4 h-96 bg-[#9db39e] mt-36 ml-auto mr-auto rounded-3xl p-10">
                <div className="text-4xl mb-6">
                    <h3>Actualités</h3>
                </div>

                <Slider {...settings} >
                    <div className="border-8 border-[#f4edc8] w-1/4 h-56 bg-[url('pictures/feuillesfolle2.jpg')] bg-[length:100%] ">
                        <h4 className="text-white text-4xl text-center pt-6 pb-6 opacity-60 hover:opacity-100">Évenements</h4>
                        <h5 className="text-yellow-400 text-xl text-bold pl-4 font-bold opacity-60 hover:opacity-100">Lorem ipsum, dolor sit amet consectetur nisi eum facilis, veritatis deserunt, aut, temporibus eaque. </h5>
                    </div>

                    <div className="border-8 border-[#f4edc8] w-1/4 h-56 bg-[url('/pictures/feuillesfolles1.jpg')] bg-[length:100%] ">
                        <h4 className="text-white text-4xl text-center pt-6 pb-6 opacity-60 hover:opacity-100">Évenements</h4>
                        <h5 className="text-yellow-400 text-xl text-bold pl-4 font-bold opacity-60 hover:opacity-100">Lorem ipsum, dolor sit amet consectetur nisi eum facilis, veritatis deserunt, aut, temporibus eaque. </h5>
                    </div>

                    <div className="border-8 border-[#f4edc8] w-1/4 h-56 bg-[url('pictures/feuillesfolles2A.jpg')] bg-[length:100%] ">
                        <h4 className="text-white text-4xl text-center pt-6 pb-6 opacity-60 hover:opacity-100">Évenements</h4>
                        <h5 className="text-yellow-400 text-xl text-bold pl-4 font-bold opacity-60 hover:opacity-100">Lorem ipsum, dolor sit amet consectetur nisi eum facilis, veritatis deserunt, aut, temporibus eaque. </h5>
                    </div>

                    <div className="border-8 border-[#f4edc8] w-1/4 h-56 bg-[url('pictures/feuillesfolles3.jpg')] bg-[length:100%] ">
                        <h4 className="text-white text-4xl text-center pt-6 pb-6 opacity-60 hover:opacity-100">Évenements</h4>
                        <h5 className="text-yellow-400 text-xl text-bold pl-4 font-bold opacity-60 hover:opacity-100">Lorem ipsum, dolor sit amet consectetur nisi eum facilis, veritatis deserunt, aut, temporibus eaque. </h5>
                    </div>

                    <div className="border-8 border-[#f4edc8] w-1/4 h-56 bg-[url('pictures/feuillesfolles4.jpg')] bg-[length:100%] ">
                        <h4 className="text-white text-4xl text-center pt-6 pb-6 opacity-60 hover:opacity-100">Évenements</h4>
                        <h5 className="text-yellow-400 text-xl text-bold pl-4 font-bold opacity-60 hover:opacity-100">Lorem ipsum, dolor sit amet consectetur nisi eum facilis, veritatis deserunt, aut, temporibus eaque. </h5>
                    </div>

                    <div className="border-8 border-[#f4edc8] w-1/4 h-56 bg-[url('pictures/feuillesfolles3.jpg')] bg-[length:100%] ">
                        <h4 className="text-white text-4xl text-center pt-6 pb-6 opacity-60 hover:opacity-100">Évenements</h4>
                        <h5 className="text-yellow-400 text-xl text-bold pl-4 font-bold opacity-60 hover:opacity-100">Lorem ipsum, dolor sit amet consectetur nisi eum facilis, veritatis deserunt, aut, temporibus eaque. </h5>


                    </div>

                </Slider>
            </div>

        </>
    )
}