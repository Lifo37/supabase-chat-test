
import MessageForm from "../components/MessageForm"

export default function Footer() {
    return (
        <div className="fixed bottom-0 w-screen flex items-center flex-col
                        gap-5
                        bottom-5">


            <MessageForm />
            <div className="max-w-full w-full min-h-[70px] max-h-[75px] bg-primary
                            p-6 text-lg text-opacity-50
                            flex items-center justify-evenly shadow-lg
                            hidden ">
                

            </div>
        </div>
    )
}
