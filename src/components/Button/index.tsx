import { Button } from "@/types/Button"


function index ({Icon,text}:Button) {
    return (
        <button className="!rounded-[50px] w-34 !capitalize flex items-center justify-center gap-2 font-bold bg-red-food text-white p-3 text-lg">
            {
                Icon &&
                <Icon size={25}/>
            }
            {text}
        </button>
    )
}

export default index