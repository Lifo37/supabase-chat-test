import { useEffect, useState } from "react";


export default function Chat() {

    const [height, setHeight] = useState(window.innerHeight - 205);

    return (
        <div className="absolute flex items-center justify-center w-screen flex-col">
        <div className="mt-[10px] h-[60vh] w-[90vw] bg-black
                        max-w-xl shadow-2xl">
        </div>


        </div>
    )
}