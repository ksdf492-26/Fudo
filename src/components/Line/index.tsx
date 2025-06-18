import { Line } from "@/types/Line"

function index ({Icon,text}:Line) {
    return (
        <li className=" transition-all p-2 w-[250px] cursor-pointer rounded-4xl gap-2  flex items-center font-medium capitalize bg-hover-red-food">
            <span className="bg-white text-gray-800 rounded-full p-2">
                <Icon size={30}/>
            </span>
            <span className="text-start text-lg w-[200px]">
                {text}
            </span>
        </li>
    )
}
export default index