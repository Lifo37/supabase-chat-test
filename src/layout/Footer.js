import { FiZap } from "react-icons/fi"
import { BiMessageDetail, BiSearchAlt } from "react-icons/bi"

export default function Footer() {
    return (
        <div className="bottom-0 max-w-full w-full min-h-[70px] max-h-[85px] bg-primary
                        p-6 fixed text-lg text-opacity-50
                        flex items-center justify-evenly shadow-lg">

           <BarIcon icon={ <BiMessageDetail /> } />
           <BarIcon icon={ <BiSearchAlt /> } />

        </div>
    )
}

const BarIcon = ({ icon }) => {
    return (
        <div className="nav-icon hover:text-white">
            {icon}
        </div>
    )
}