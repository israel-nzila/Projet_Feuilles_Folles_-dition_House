import BlockAccueil1 from "../BlockAccueil/BlockAccueil1"
import BlockAccueil2 from "../BlockAccueil2/BlockAccueil2"
import BlockAccueil3 from "../BlockAccueil3/BlocAccueil3"
import BlockAccueil4 from "../BlocAccueil4/BlockAccueil4"
import Footer from "../Footer/Footer"
import BtnEmail from "../BtnEmail/BtnEmail"



export default function Accueil() {

    return (
        <>
            {/* <div > */}
            <div  >
                <BlockAccueil1 h1="Bientôt entre vos mains, chers lecteurs Les mots qu’il vous faut pour soigner vos maux Des phrases qu’il vous faut pour nourrir votre cerveau" src="pictures/roman-livres_c_nul.jpeg" />
            </div>
            <div>
                <BlockAccueil2 />
            </div>
            <div>
                <BlockAccueil3/>
            </div>
            <div>
                <BlockAccueil4/>
            </div>

            <BtnEmail/>

            <div>
                <Footer/>
            </div>

            {/* </div> */}
        </>
    )
}