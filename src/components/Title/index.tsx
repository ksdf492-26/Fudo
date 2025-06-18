import { Titles } from "@/types/Title"

function index ({title,textOne,textTwo}:Titles) {
    return (
        <>
                    <div className="uppercase text-lg text-red-food font-medium" >
                        {title}
                    </div>
                    <div className="text-[40px] flex flex-col font-bold">
                        <div>
                            {textOne}
                        </div>
                        <div>
                            {textTwo}
                        </div>
                    </div>
        </>
    )
}

export default index