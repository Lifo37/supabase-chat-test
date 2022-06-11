import { FiLogIn } from "react-icons/fi"

export default function Header() {
    return (
    <div className="p-6 text-lg max-w max-h-[80px] flex items-center bg-primary justify-between">
        <p className="font-extrabold text-3xl shadow-lg">Logo</p>

        <button className="font-black p-2 grid grid-cols-2 gap-1 
                        place-items-center border rounded-md
                        hover:border-slate-300 focus:border-slate-600
                        active:bg-slate-700">
            <h2 className="ml-2">Login</h2>
            <FiLogIn size={"1.8rem"}/>
        </button>
    </div>
    )
}