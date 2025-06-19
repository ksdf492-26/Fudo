import Title from '@/components/Title'
import Button from '@/components/Button'
import { BiPhone } from 'react-icons/bi'
import Phone from '@/components/Phone'
function index() {
    return (
        <section className="container">
            <div className="bg-red-200 rounded-2xl p-36 flex items-center justify-between relative ">
                <div>
                    <div className='flex items-center '>
                        <div>
                            <Title title='download app' textOne='get started with' textTwo='fudo today!' />
                            <p className='text-xl font-medium w-[450px]'>
                                Discovery food wherever and whenever and get your food delivered quickly.
                            </p>
                        </div>
                        <div className='p-3 w-[140px] rounded-2xl bg-red-food flex flex-col items-center justify-between'>
                            <div className='w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center'>
                                <div className='w-[60px] h-[30px] bg-red-food'>
                                    <div className='w-[30px] bg-red-500 h-[30px] flex justify-center'>
                                        <div className='w-[10px] h-[10px] bg-red-food '>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center font-medium text-white'>
                                Your Food has arrived
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[600px]'>
                        <Button text='get the app' />
                        <span className="self-end !rounded-[50px] h-[56px] !capitalize flex items-center justify-between font-bold  text-white p-3 text-lg bg-white w-[280px] ">
                            <div>
                                <img className='w-10 rounded-full h-10' src="./Food Courier.jpeg" alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-lg font-medium text-black'>
                                    Red Richards
                                </div>
                                <div className='text-gray-500 font-medium text-xs'>
                                    Food courier
                                </div>
                            </div>
                            <div className='rounded-full h-10 w-10 bg-red-food flex items-center justify-center'>
                                <BiPhone size={25} color='white' />
                            </div>
                        </span>
                    </div>
                </div>
                <Phone />
            </div>
        </section>
    )
}

export default index