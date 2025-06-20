
import { BiLogoInstagramAlt } from "react-icons/bi"
import { FaFacebookF, FaPlay } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"
import List from '@/components/List'

function index() {
    return (
        <section className="container">
            <footer className="mt-48">
                <nav className="flex items-center justify-between">
                    <div className="flex flex-col justify-around h-[300px]">
                        <img className="w-36" src="./logo.png" alt="" />
                        <div className="w-2xs font-medium">
                            Our job is to filling your tummy with delicious food and with fast and free delivery
                        </div>
                        <div className="flex items-center justify-between text-3xl text-red-food w-40">
                            <div>
                                <BiLogoInstagramAlt />
                            </div>
                            <div>
                                <FaFacebookF />
                            </div>
                            <div>
                                <FaTwitter />
                            </div>
                        </div>
                    </div>
                    <List title="About" list={['About us', 'Features', 'News', 'Menu']} />
                    <List title='Company' list={['why fudo', 'partner with us', 'FAQ', 'Blog']} />
                    <List title="Support" list={['account', 'support center', ' feedback', 'contact us', 'Accessiblity']} />
                    <div className="flex flex-col items-center justify-center relative">
                        <List title="Get in touch" list={['question or feedback?', "we'd love to hear from you"]} />
                        <div className="flex items-center justify-around
                      border-gray-500
                        border-2
                        p-3 w-[200px]
                        rounded-4xl
                        font-medium text-gray-600
                        cursor-pointer
                        absolute
                        bottom-0
                        ">
                            Email Address <FaPlay className="text-red-food"/>
                        </div>
                    </div>
                </nav>
            </footer>
        </section>
    )
}
export default index