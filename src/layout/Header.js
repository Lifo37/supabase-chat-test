import { FiLogIn, FiMenu } from "react-icons/fi"
import { BiMessageDetail, BiSearchAlt } from "react-icons/bi"
import IconButton from "../components/IconButton"

export default function Header() {
    return (
    <div className="p-6 text-lg max-w max-h-[80px] flex items-center bg-primary 
                    gap-3 justify-between">
        <div className="font-extrabold text-3xl shadow-lg">
            <FiMenu />
        </div>


        <div className="flex w-full justify-end items-center gap-2">
            <IconButton icon={ <BiMessageDetail /> } />
            <IconButton icon={ <BiSearchAlt /> } />
        </div>


        <button className="button">
            <h2 className="ml-2">Login</h2>
            <FiLogIn size={"1.8rem"}/>
        </button>


    </div>
    )
}