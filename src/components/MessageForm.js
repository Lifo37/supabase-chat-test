import { BiSend } from "react-icons/bi"

export default function MessageForm() {
    return(
        <div className="w-full flex gap-3
                        max-w-[80vw] md:max-w-xl">
            <input className="grow
                              bg-primary
                              pl-4 pr-4 pt-2 pb-2 rounded-lg
                              transition-all duration-200
                              min-w-max
                              hover:border-violet-500" placeholder="Enter a message" />
            <button className="flex-none
                                p-3 rounded-lg bg-violet-500 text-lg
                                focus:border-violet-200">
                <BiSend />
            </button>
        </div>
    )
}