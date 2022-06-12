
export default function Message({ text }) {
    return (
        <div className="w-full max-h-[200px] flex">
            <div className="w-[55px] h-[55px] overflow-hidden
                            p-1">
                <img className="w-full overflow-hidden rounded-full" src={"https://cdn.discordapp.com/avatars/373278681315016704/631d8d437eaca5700a60a9bcc39c473d.webp?size=2048"} />
            </div>

            <div className="w-full pl-3
                            flex flex-col">
                <div className="flex gap-2">
                    <p className="font-bold">Isfy</p> 
                    <p className="opacity-40 font-light">6/11/22</p>
                </div>

                <div className="">
                    {text}
                </div>
            </div>
        </div>

    )
}