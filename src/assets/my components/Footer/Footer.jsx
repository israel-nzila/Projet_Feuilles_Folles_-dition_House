import BlockFooter from "../BlockFooter/BlockFooter";
import Newsletters from "../BlockNewsLetters/NewsLetters";
import DevTeam from "../Developpement_Team/DevTeam";

export default function Footer() {

    return (
        <>
            <div className="w-full h-96 bg-[#a9b79f] mt-20 flex gap-12">

                <div className="">
                    <BlockFooter children="A propos des feuilles folles" paragraphe="© 2023 Copyright RFI – All rights reserved
RFI is not responsible for the content of external websites
Attendance certified by the OJ" />
                </div>
                <div>
                    <BlockFooter children="Nous contacter" paragraphe="© 2023 Copyright RFI – All rights reserved
RFI is not responsible for the content of external websites
Attendance certified by the OJ" />
                </div>
                <div>
                    <BlockFooter children="Nos livres" paragraphe="© 2023 Copyright RFI – 

RFI is not responsible 

external websites
Attendance certified by the OJ" />
                </div>
                <div>
                    <BlockFooter children="Nos évenements" paragraphe="RFI is not responsible for the content of external websites
Attendance certified by the OJ" />
                </div>
                <div>
                    <Newsletters />
                </div>
                <div>
                    <BlockFooter children="Nos partenaires" paragraphe="RFI is not 
 for the
certified by 
the OJ" />
                </div>
                <div >

                    <DevTeam />

                </div>

            </div>

            <div className="w-full h-16 bg-[#d35149]"></div>
            <div className="w-full h-16 bg-[#a9b79f] flex justify-center gap-5 ">
                <img src="pictures/rs-facebook-f-gros.png" alt="" className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300" />
                <img src="pictures/rs-instagram(2).png" alt="" className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300" />
                <img src="pictures/rs-linkedin.png" alt="" className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300"/>
                <img src="pictures/rs-whatsapp.png" alt=""  className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300"/>
            </div>

        </>
    )
};