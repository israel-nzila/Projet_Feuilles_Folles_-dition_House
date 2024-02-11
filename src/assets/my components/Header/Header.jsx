import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Header() {

    return (

        <>
            <nav className="bg-[#819a89] h-24 flex justify-between">
                <div className="h-20 w-24 mt-9 ml-2">
                    <img src="pictures/logo_feuilles_folles.jpg" alt="" className="drop-shadow-lg rounded-full" />
                </div>

                <div className="flex justify-around bg-[#d8d8d8] w-3/4 rounded-2xl h-20 mt-10 mr-8 drop-shadow-lg">
                    <div className="flex flex-row gap-14">
                        <button className="hover:text-yellow-600">Accueil</button>
                        <button className="hover:text-yellow-600">Notre catalogue</button>
                        <button className="hover:text-yellow-600">Actualités</button>
                        <button className="hover:text-yellow-600">Nouveautés</button>
                        <button className="hover:text-yellow-600">Librairies</button>
                        <button className="hover:text-yellow-600">Zone du lecteur</button>
                        <button className="hover:text-yellow-600">Feuilles folles</button>

                        <div className="ml-2 mt-8 flex gap-4">
                        <span>
                            <Input />
                            </span>
                            
                                <Button className="h-6 w-10  rounded-xl text-xs  hover:text-sky-800      transition ease-in-out delay-0 bg-[#d5c23e] hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300" name="OK" />
                               
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}