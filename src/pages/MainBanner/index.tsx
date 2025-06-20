import { BiPlay } from "react-icons/bi"
import Span from '@/components/Span'
import Button from '@/components/Button'
function index() {
    return (
        <section className="container">
            <div className="flex items-center justify-center capitalize">
                <div className="relative flex flex-col justify-center items-star gap-16 h-[670px]">
                    <label className="text-red-600 font-medium bg-red-100 p-3 w-44 text-center rounded-[50px]">
                        More than Faster
                    </label>
                    <div className="w-[430px] flex flex-col" >
                        <h1 className=" !text-[60px] !font-bold">
                            Be the fastest in delivering your <span className="text-[#e95757] font-bold">food</span>
                        </h1>
                        <p className="font-medium">
                            Our job is to filling your tummy with delicious food <br /> and whith fast and free delivery
                        </p>
                    </div>
                    <div className="flex items-center left-[-36px] w-[800px] justify-center absolute bottom-0 gap-20">
                        <Button text="get started" />
                        <div className="cursor-pointer text-black flex items-center justify-center gap-3">
                            <BiPlay size={30} className="text-yellow-500 rounded-[50px] flex items-center justify-center bg-yellow-50 w-10  h-10  " />
                            Watch video
                        </div>
                        <Span name='Reed Richards' url='Food Courier.jpeg' />
                    </div>
                </div>
                <div>
                    <img src="banner.png" alt="" />
                </div>
            </div>
        </section>
    )
}
export default index