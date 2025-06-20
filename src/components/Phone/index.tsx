import { FaMapMarker, FaPizzaSlice } from "react-icons/fa";
import { FaBurger, FaGrip } from "react-icons/fa6";
import { GiCupcake } from "react-icons/gi";
import { Squares2X2Icon } from '@heroicons/react/24/outline'
function index() {
    return (
        <div className="bg-white flex h-[550px] flex-col items-center justify-between absolute bottom-0 right-24 rounded-t-3xl">
            <div>
                <div className='flex items-center gap-14 p-3'>
                    <Squares2X2Icon className='w-12 rounded-xl bg-gray-200 h-12' />
                    <div className='flex items-center gap-1 justify-around font-medium'>
                        <FaMapMarker className='text-red-food' />
                        Xique Xique Bahia, BR
                        
                    </div>
                    <div className='w-12 h-12 rounded-xl bg-gray-200'>
                        <img className='w-10 h-10' src="./Tony.png" alt="" />
                    </div>
                </div>

            </div>
            <div className='rounded-2xl w-[350px] bg-red-200 flex items-center justify-around '>
                <div>
                    <div className="text-xl font-bold capitalize w-36">
                        The fasted in delivery <span className="text-red-food">food</span>
                    </div>
                    <div className="bg-red-food p-1 rounded-3xl w-20 font-medium text-white text-center text-xs">
                        Order Now
                    </div>
                </div>
                <div>
                    <img src="./f3.png" className='w-[150px]' alt="" />
                </div>
            </div>
            <div className="p-3 relative w-[400px] h-[100px]">
                <div className='text-xl font-medium'>
                    Category
                </div>
                <div className='flex items-center absolute gap-2 bottom-0'>
                    <div className='bg-red-food rounded-4xl flex w-[150px] items-center p-2'>
                        <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center'>
                            <FaBurger size={20} />
                        </div>
                        <div className='font-medium text-white text-lg w-[100px] text-center ' >
                            Burger
                        </div>
                    </div>
                    <div className='bg-gray-400 rounded-4xl flex w-[150px] items-center p-2'>
                        <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center'>
                            <FaPizzaSlice size={20} />
                        </div>
                        <div className='font-medium text-white text-lg w-[100px] text-center ' >
                            Pizza
                        </div>
                    </div>
                    <div className='bg-gray-400 rounded-4xl flex w-[150px] items-center p-2'>
                        <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center'>
                            <GiCupcake size={20} />
                        </div>
                        <div className='font-medium text-white text-lg w-[100px] text-center ' >
                            CupCake
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between w-[370px]">
                    <div className="text-xl font-medium">
                        Popular Now
                    </div>
                    <span className="text-xs cursor-pointer text-amber-500 font-extralight flex gap-2 items-center">
                        View Now
                        <div className="w-5 h-5 bg-amber-400 text-white  rounded-lg flex items-center justify-center text-lg">
                            {'>'}
                        </div>
                    </span>
                </div>
                <div className='flex items-center justify-around'>
                    <img className='w-32' src="./burger-01.png" alt="" />
                    <img className='w-32' src="./burger-02.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default index