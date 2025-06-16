import { BiPlay } from "react-icons/bi"

function MainBanner () {
    return (
        <section className="container">
            <div className="flex items-center justify-center capitalize">
                <div className=" flex flex-col items-start justify-around h-[500px]">
                    <label className="bg-red-100 p-3 w-44 text-center rounded-[50px]">
                            More than Faster
                    </label>
                    <div className="w-[430px] flex flex-col">
                         <h1 className=" !text-[60px] !font-bold">
                       Be the fastest in delivering your <span className="text-[#e95757] font-bold">food</span> 
                    </h1>
                    <p className="font-medium">
                        Our job is to filling your tummy with delicious food <br /> and whith fast and free delivery 
                    </p>
                    </div>
                    <div className="flex items-center justify-center gap-20">
                        <div className="bg-red-food text-white p-3 font-bold rounded-[50px] w-34 text-center">
                            get started 
                        </div>
                        <div className=" text-black flex items-center justify-center gap-3">
                            <BiPlay size={30} className="text-yellow-500 rounded-[50px] flex items-center justify-center bg-yellow-50 w-10  h-10  "/>
                             Watch video 
                        </div>
                    </div>
                </div>
                <div>
                    <img src="banner.png" alt="" />
                </div>
            </div>
        </section>
    )
}
export default MainBanner