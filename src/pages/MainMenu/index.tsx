import Title from '@/components/Title'

import Line from '@/components/Line'
import Menu from '@/data/Menu'
import Foods from '@/data/Foods'
import ProductCard from '@/components/ProductCard'

function index() {
    return (
        <section className="container">
            <div>
                <div className='mt-20 mb-20'>
                    <Title title="Our menu" textOne="Menu that always" textTwo="makes your fall in love" />
                </div>
                <div className='flex items-center justify-between '>
                    <ul className='h-[330px] w-1/3 overflow-y-scroll'>
                        {Menu.map((item, i) => (
                            <Line key={i} Icon={item.Icon} text={item.Text} />
                        ))}

                    </ul>
                    <div className="overflow-div flex overflow-x-scroll flex-nowrap w-[800px] gap-4">
                        {Foods.map(food => (
                            <ProductCard
                                key={food.id}
                                id={food.id}
                                img={food.img}
                                price={food.price}
                                title={food.title}
                            />
                        ))}
                    </div>



                </div>
            </div>
        </section>
    )
}

export default index

