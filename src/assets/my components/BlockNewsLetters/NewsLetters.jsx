import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Newsletters() {

    return (
        <>
        <div className="flex flex-col justify-center gap-2 mt-14 ">
            <div className="mb-6">
                <h6>Newsletters</h6>
            </div>
            <Input />
                        <div className="ml-24">
                <Button className="h-10 w-10 rounded-xl hover:text-sky-800      transition ease-in-out delay-0 bg-[#d5c23e] hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300" name="OK" />
            </div>
            </div>
        </>
    )
}