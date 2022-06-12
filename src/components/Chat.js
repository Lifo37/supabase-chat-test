import { useEffect, useState } from "react";
import { FaSlackHash } from "react-icons/fa"
import Message from "./Message";

export default function Chat() {

    const [height, setHeight] = useState(window.innerHeight - 205);

    return (
        <div className="absolute flex items-center justify-center w-screen flex-col">
        
        <div className="mt-[10px] h-[69vh] w-[90vw] bg-primary rounded-lg
                        max-w-xl shadow-2xl
                        flex flex-col">

            <div className="w-full p-4
                            bg-secondary text-xl shadow-xl
                            flex items-center gap-5">
                <FaSlackHash className="opacity-40 text-3xl" />
                Channel Name
            </div>            

            <div className="chatbox w-full h-full p-5 overflow-y-scroll
                            flex flex-col gap-3">
                <Message text={"Test"} />
                <Message text={"Test"} />
                <Message text={"Test"} />
                <Message text={"Test"} />
                <Message text={"Test"} />
                <Message text={"Test"} />
                <Message text={"Test"} />
                <Message text={"Test"} />
                <Message text={"Test"} />
                <Message text={"Test"} />
            </div>


        </div>


        </div>
    )
}