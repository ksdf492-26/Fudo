"use client"
import Title from '@/components/Title'
import { BiStar } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'
import Peoples from '@/data/Peoples'
import { useState } from 'react'
import { ImGift } from 'react-icons/im'
function index() {
    const [id, setId] = useState(1)
    setTimeout(() => {
        setId(id + 1);
    }, 10000);
    if (id > 9) {
        setId(1)
    }
    return (
        <section className="container">
            <div className='flex items-center justify-around mb-48'>
                <div className='relative'>
                    <img src="./cozinheiro.png" alt="" />
                    <div className='bg-gray-200 w-[300px] h-[150px] bottom-[-70px] right-0 absolute flex flex-col items-center rounded-3xl shadow-[0_8px_30px_rgba(59,130,246,0.5)]'>

                        <div className='font-medium text-xl m-3'>
                            Our Reviews
                        </div>
                        <div className='relative w-40 h-14'>
                            {
                                Peoples
                                    .filter(people => people.id <= 3)
                                    .map((people, index) => (
                                        <img
                                            key={people.id}
                                            src={people.url}
                                            className='w-16 h-16 rounded-full border-2 border-white absolute'
                                            style={{ left: `${index * 30}px` }}
                                        />
                                    ))
                            }
                            <span className='w-16 h-16 rounded-full border-2 bg-red-food flex items-center justify-center border-white absolute text-white font-medium text-xl'
                                style={{ left: `${3 * 30}px` }}>
                                12k
                            </span>
                        </div>
                    </div>

                </div>
                <div className=' flex flex-col gap-4'>
                    <div className=' flex flex-col '>
                        <Title
                            title='what they say' textOne='what our customers'
                            textTwo='say about us'
                        />
                        <p className='w-[450px] font-medium !mt-10 text-lg'>
                            "Fudo is the best. Besides the many and delicious meals, the service is also very good, especially in the very fast delivery. I highly recommend Fudo to you."
                        </p>
                    </div>
                    {
                        Peoples
                            .filter(people => people.id === id)
                            .map(people => (
                                <div key={people.id} className='flex transition-all flex-col justify-between gap-4'>
                                    <div className='flex items-center justify-start gap-2'>
                                        <img src={people.url} alt="" className='w-16 h-16 rounded-full' />
                                        <div>
                                            <div className='font-semibold text-xl'>
                                                {people.name}
                                            </div>
                                            <div className='font-medium text-gray-500'>
                                                {people.commentary}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-2xl text-amber-500 flex items-center gap-1'>
                                        {[...Array(5)].map((_, i) =>
                                            i < people.review ? <FaStar key={i} /> : <BiStar key={i} />
                                        )}
                                        <span className='font-bold text-black text-xs ml-2'>
                                            {people.review}
                                        </span>
                                    </div>

                                </div>
                            ))
                    }


                </div>
            </div>
        </section>
    )
}
export default index