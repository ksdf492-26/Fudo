import { Span } from "@/types/Span"
import { BiPhone } from "react-icons/bi"

function index({url,name}:Span) {
    return (
        <span className="cursor-pointer !rounded-[50px] h-[56px] !capitalize flex items-center justify-between font-bold  text-white p-3 text-lg bg-white w-[280px] shadow-[0_8px_30px_#3333]">
            <div>
                <img className='w-10 rounded-full h-10' src={url} alt="" />
            </div>
            <div className='flex flex-col'>
                <div className='text-lg font-medium text-black'>
                    {name}
                </div>
                <div className='text-gray-500 font-medium text-xs'>
                    Food courier
                </div>
            </div>
            <div className='rounded-full h-10 w-10 bg-red-food flex items-center justify-center'>
                <BiPhone size={25} color='white' />
            </div>
        </span>
    )
}

export default index 