import { Card } from "@/types/Card"

function index ({url,title,text}:Card) {
    return(
        <div className="flex flex-col w-72 items-center justify-center">
            <div>
                <img className="h-52" src={url} alt="" />
            </div>
            <div className="flex flex-col items-center text-center gap-2">
                <div className="font-bold text-3xl capitalize">
                    {title}
                </div>
                <div className="font-semibold text-xl">
                    {text}
                </div>
            </div>
        </div>
    )
}
export default index;