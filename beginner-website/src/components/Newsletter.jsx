import React from 'react';

const Newsletter = () => {
    return (
    <div className='w-full py-16 text-white px-4'>
          
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols3'>
            <div className='lg-col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>H1 TAG IN USE </h1>
                <p>Join News Letter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-col items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black'  type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 py-6 py-3 text-black'>Notify Me</button>
                </div>

            </div>
            <p >I am learning<span className='text-[#00df9a]'>React</span></p>
        </div>

    </div>

    );
};