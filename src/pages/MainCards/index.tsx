import Cards from "@/components/Card"

function index () {
    return (
        <section className="container">
            <div className="flex flex-col mt-20">
                <div className="text-center mb-20">
                    <div className="uppercase text-lg text-red-food font-medium" >
                        what we serve
                    </div>
                    <div className="text-[40px] flex flex-col font-bold">
                        <div>
                            your favorite food
                        </div>
                        <div>
                            delivery partner 
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <Cards url="f1.png" title="easy to order" text="Your only need a few steps in ordering food" />
                    <Cards url="f2.png " title="fastest delivery" text="Delivery that is always ontime event faster" />
                    <Cards url="f3.png" title="best quality" text="Not only fast for us quality is also number one"/>
                </div>
            </div>
        </section>
    )
}

export default index