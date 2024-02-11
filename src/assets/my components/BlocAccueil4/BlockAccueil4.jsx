import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function BlockAccueil4() {

    const settings = {

        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };





    return (

        <>

            <iframe src="pictures/Dosseh_-_Habitué(720p).mp4" className="w-3/4 h-96 bg-[#130c0a] mt-36 ml-auto mr-auto rounded-3xl p-10 aspect-video"></iframe>

            <div className="mt-10 w-2/4 ml-auto mr-auto">
                <Slider {...settings}>

                    <div className="w-10 h-32">
                        <img src="pictures/play-jaune.png" alt="" className=" w-32 h-32 bg-[url('pictures/feuillesfolle2.jpg')] bg-cover transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300" />

                        <div>
                            <h6 className="text-red-500">Célébration</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiepturi nihil.</p>
                            <span className="text-[#d5c23e] hover:text-yellow-600">plus...</span>
                        </div>
                    </div>




                    <div className="w-10 h-32 ">
                        <img src="pictures/play-jaune.png" alt="" className=" w-32 h-32 bg-[url('pictures/feuillesfolle2.jpg')] bg-cover transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300" />

                        <div>
                            <h6 className="text-red-500">Festivité</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiepturi nihil.</p>
                            <span className="text-[#d5c23e] hover:text-yellow-600">plus...</span>
                        </div>
                    </div>

                    <div className="w-10 h-32 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img src="pictures/play-jaune.png" alt="" className=" w-32 h-32 bg-[url('pictures/feuillesfolle2.jpg')] bg-cover" />
                    
                        <div>
                            <h6 className="text-red-500">Rencontre</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiepturi nihil.</p>
                            <span className="text-[#d5c23e] hover:text-yellow-600">plus...</span>
                        </div>
                    </div>

                    <div className="w-10 h-32 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img src="pictures/play-jaune.png" alt="" className=" w-32 h-32 bg-[url('pictures/feuillesfolle2.jpg')] bg-cover" />
                    
                        <div>
                            <h6 className="text-red-500">Agapée</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiepturi nihil.</p>
                            <span className="text-[#d5c23e] hover:text-yellow-600">plus...</span>
                        </div>
                    </div>

                    <div className="w-10 h-32 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img src="pictures/play-jaune.png" alt="" className=" w-32 h-32 bg-[url('pictures/feuillesfolle2.jpg')] bg-cover" />
                    
                        <div>
                            <h6 className="text-red-500">Atéliers</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiepturi nihil.</p>
                            <span className="text-[#d5c23e] hover:text-yellow-600">plus...</span>
                        </div>
                    </div>

                    <div className="w-10 h-32 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img src="pictures/play-jaune.png" alt="" className=" w-32 h-32 bg-[url('pictures/feuillesfolle2.jpg')] bg-cover" />
                    
                        <div>
                            <h6 className="text-red-500">Visite</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiepturi nihil.</p>
                            <span className="text-[#d5c23e] hover:text-yellow-600">plus...</span>
                        </div>
                    </div>

                    <div className="w-10 h-32 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img src="pictures/play-jaune.png" alt="" className=" w-32 h-32 bg-[url('pictures/feuillesfolle2.jpg')] bg-cover" />
                    
                        <div>
                            <h6 className="text-red-500">Itinérance</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiepturi nihil.</p>
                            <span className="text-[#d5c23e] hover:text-yellow-600">plus...</span>
                        </div>
                    </div>

                    <div className="w-10 h-32 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img src="pictures/play-jaune.png" alt="" className=" w-32 h-32 bg-[url('pictures/feuillesfolle2.jpg')] bg-cover" />
                    
                        <div>
                            <h6 className="text-red-500">Ils parlent...</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiepturi nihil.</p>
                            <span className="text-[#d5c23e] hover:text-yellow-600">plus...</span>
                        </div>
                    </div>



                </Slider>
            </div>
        </>
    )
}

