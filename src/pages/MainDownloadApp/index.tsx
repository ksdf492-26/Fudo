import Title from '@/components/Title'
import Button from '@/components/Button'
import Phone from '@/components/Phone'

import Span from '@/components/Span'
function index() {
    return (
        <section className="container">
            <div className="bg-red-200 rounded-2xl p-20 h-[700px] flex items-center justify-start relative ">
                <div className='flex flex-col justify-center '>
                    <div className='flex items-center justify-between w-[650px]'>
                        <div>
                            <Title title='download app' textOne='get started with' textTwo='fudo today!' />
                            <p className='text-xl font-medium w-[450px]'>
                                Discovery food wherever and whenever and get your food delivered quickly.
                            </p>
                        </div>
                        <div className='p-3 mt-36 w-[140px] rounded-2xl bg-red-food flex flex-col items-center justify-between'>
                            <div className='w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center'>
                                <div className='w-[60px] h-[30px]  flex'>
                                    <div className='w-[30px] bg-red-food h-[30px] flex justify-center'>
                                        <div className='w-[10px] h-[10px] bg-red-400 '>

                                        </div>
                                    </div>
                                    <div className='w-[30px] bg-red-400 h-[30px] flex justify-center'>
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
                       <div className='self-end'>
                         <Span name='Reed Richards' url='Food Courier.jpeg' />
                       </div>
                    </div>
                </div>
                <Phone />
            </div>
        </section>
    )
}

export default index