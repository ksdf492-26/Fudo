import { BiSearch } from "react-icons/bi"
import { IoBag } from "react-icons/io5"
import { FiLogIn } from 'react-icons/fi';
import Button from '@/components/Button'
function Header () {
    return (
        <header className="mt-4">
            <section className="container">
            <nav className="flex justify-around items-center text-black font-light">
                <img src="logo.png" alt="" />
                <ul className="ul-items flex items-center gap-10">
                    <li className="text-hover-red-food ">
                        Why fudo
                    </li>
                    <li className="text-hover-red-food">
                        Services
                    </li>
                    <li className="text-hover-red-food">
                        Menu 
                    </li>
                    <li className="text-hover-red-food">
                        Contact 
                    </li>
                </ul>
                   <menu className="flex items-center gap-10">
                    <BiSearch size={30}  />
                    <IoBag size={30} />
                    <Button text="Login" Icon={FiLogIn} />
                 
                    </menu> 
            </nav>
            </section>
        </header>
    )
}

export default Header