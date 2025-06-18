
import { FaDollarSign } from "react-icons/fa"

import { Foods } from "@/types/Foods"

function index({id,title,price,img}:Foods) {
    return (

    
<div
  key={id}
  className="relative w-[350px] h-[400px] shrink-0 rounded-3xl overflow-hidden shadow-lg"
>
  <img
    className="w-full h-full object-cover"
    src={img}
    alt="Food"
  />

  <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-end p-4">
    <span className="text-xl font-medium">{title}</span>
    <span className="text-lg font-bold flex items-baseline">
      <FaDollarSign size={15} className="text-yellow-600" />
      <span className="text-xl mt-1 mb-1">{price}</span>
    </span>
    <button className="self-start">
      Order Now {'>'}
    </button>
  </div>
</div>



    )
}
export default index