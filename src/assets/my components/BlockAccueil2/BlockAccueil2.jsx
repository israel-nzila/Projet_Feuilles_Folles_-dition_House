import Nouveaute from "../Nouveauté/Nouveaute"
import Aparaitre from "../Aparaitre/Aparaitre"


export default function BlockAccueil2() {

    return (
        <>
            <div className="w-3/4 h-[30rem] bg-[#e4e1d3] m-auto mt-72 rounded-3xl pl-10 pt-10 pr-10">

                <div className="mb-4 text-blue-800 text-4xl">
                    <h2>Nos livres</h2>
                </div>

                <div className="divide-y divide-black">

                    <div className="flex gap-20 mb-4 ">
                        <div className="hover:text-yellow-600"><h3>Nouveautés</h3></div>
                        <div className="hover:text-yellow-600"><h3>À paraître</h3></div>
                    </div>


                        <Nouveaute />
                   
                    {/* <Aparaitre /> */}
                </div>

            </div>

        </>
    )
}