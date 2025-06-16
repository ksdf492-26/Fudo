import { BiSearch } from "react-icons/bi"
import { IoBag } from "react-icons/io5"
import { FiLogIn } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header () {
    return (
        <header className="mt-4">
            <section className="container">
            <nav className="flex justify-around items-center text-black font-light">
                <img src="logo.png" alt="" />
                <ul className="ul-items flex items-center gap-10">
                    <li className="text-hover-orange ">
                        Why fudo
                    </li>
                    <li className="text-hover-orange">
                        Services
                    </li>
                    <li className="text-hover-orange">
                        Menu 
                    </li>
                    <li className="text-hover-orange">
                        Contact 
                    </li>
                </ul>
                   <menu className="flex items-center gap-10">
                    <BiSearch size={30}  />
                    <IoBag size={30} />
                    <button className="!rounded-[50px] w-34 flex items-center justify-center gap-2 font-bold bg-orange-600 text-white p-3 text-lg"> 
                        <FiLogIn size={20} />
                        Login
                    </button>
                 
                    </menu> 
            </nav>
            </section>
        </header>
    )
}

export default Header