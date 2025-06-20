import { List } from "@/types/List"

function index ({title,list}:List) {
    return (
        <>
        <ul className="flex capitalize flex-col gap-2 h-[200px]">
            <li className="font-bold text-black text-xl cursor-pointer">
                {title}
            </li>
            {
                list.map(li => (
                    <li key={li}  className="text-gray-600 self-start font-medium text-lg hover:underline cursor-default">
                        {li}
                    </li>
                ))
            }
        </ul>
        </>
    )
}
export default index