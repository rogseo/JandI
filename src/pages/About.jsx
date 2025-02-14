// src/pages/About.jsx
import React from 'react';
import pic1 from "../img/4.png"
import pic2 from "../img/5.png"
import pic3 from "../img/6.png"
import why from "../img/why.png"

function About() {
    return (
        <div className="relative isolate pt-14 md:px-30 lg:px-50 ">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-cyan-500 to-blue-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            {/* Our Unique Advantage */}
            <div>

                <div className="mx-auto max-w-2xl pt-30 lg:pt-50 ">
                    <div className="text-center">
                        <h1 className="text-[#153361] text-[25px] font-bold tracking-tight text-balance lg:text-5xl">
                            Our Unique Advantage
                        </h1>
                    </div>
                </div>
                <article className='flex flex-col px-3 pt-10'>
                    <div className='flex flex-col lg:flex-row  py-10'>
                        <div className='lg:basis-1/2'>
                            <img src={pic2} alt="advantage 1" className='basis-1/2'></img>
                        </div>

                        <div className='lg:basis-1/2'>
                            <h1 className=' text-xl font-semibold tracking-tight text-balance text-gray-900 sm:text-2xl'>Efficiency and Expertise</h1>
                            <p className='pt-2'>More efficient and skilled than typical U.S.-based GCs, CMs in semiconductor construction, leverage specialized experience to deliver optimized results.</p>

                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row py-10'>
                        <div className='lg:basis-1/2'>
                            <h1 className=' text-xl font-semibold tracking-tight text-balance text-gray-900 sm:text-2xl'>Agility and Speed</h1>
                            <p className='pt-2'>A small team structure enables rapid decision-making and adaptability, allowing us to respond to challenges and client needs faster than larger firms.</p>

                        </div>
                        <div className='lg:basis-1/2'>
                            <img src={pic1} alt="advantage 2" className='basis-1/2'></img>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row py-10'>
                        <div className='lg:basis-1/2'>
                            <img src={pic3} alt="advantage 3" className='basis-1/2'></img>
                        </div>

                        <div className='lg:basis-1/2'>
                            <h1 className=' text-xl font-semibold tracking-tight text-balance text-gray-900 sm:text-2xl'>Global Expertise</h1>
                            <p className='pt-2'>Combining in-depth South Korean and U.S. semiconductor construction knowledge, we offer a unique perspective that maximizes project outcomes for Korean clients in the U.S.</p>

                        </div>
                    </div>
                </article>
            </div>
            {/* Why J&I */}
            <div>
                <div className="mx-auto max-w-2xl pt-30 ">
                    <div className="text-center">
                        <h1 className="text-[#153361] text-[25px] font-bold tracking-tight text-balance lg:text-5xl">
                            Why J&I
                        </h1>
                    </div>
                </div>
                <article className='flex flex-col pt-10'>
                    <div className='flex flex-row py-10'>
                        <img src={why} alt="why J&I" className='w-full h-full'></img>
                    </div>
                </article>
            </div>




        </div>



    );
}

export default About;