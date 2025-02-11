// src/pages/Service.jsx
import pic from "../img/3.png"
import logo from "../img/logo.png"
function Service() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 ">
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

                <div className="mx-auto max-w-2xl sm:pt-48 lg:pt-56 ">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 lg:text-5xl">
                            Core Service Overview
                        </h1>
                    </div>
                </div>
                <article className='flex flex-col pt-10'>

                    <div className='flex flex-row py-10'>


                        <div className='basis-1/2 border-black rounded-[calc(var(--radius-lg)+1px)] '>
                            <h1 className=' text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-2xl'>Preconstruction</h1>
                            <p className='pt-2'>Comprehensive initial project analysis, including feasibility studies, design reviews, and budgeting to ensure project alignment with client goals and optimal cost-efficiency. Preconstruction planning also establishes realistic timelines and schedules for seamless execution.</p>
                            <a href="" > Learn more</a>
                        </div>

                        <div className='basis-1/2'>
                            <h1 className=' text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-2xl'>General Contracting</h1>
                            <p className='pt-2'>Overseeing all construction aspects, from resource allocation to subcontractor coordination. Our GC services cover all essential functions to keep projects on schedule and within budget, while maintaining strict standards for quality, safety, and regulatory compliance.</p>

                        </div>
                    </div>
                    {/* <div className="flex">
                        <img src={logo} alt="Company Logo" className="w-30 h-30 rounded-lg justify-center" />
                    </div> */}

                    <div className='flex flex-row py-10'>
                        <div className='basis-1/2'>
                            <h1 className=' text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-2xl'>Construction Management</h1>
                            <p className='pt-2'>On-site management that monitors every stage of the construction process, providing real-time updates and proactive problem-solving to maintain efficiency and mitigate delays. CM services ensure alignment between project objectives, quality standards, and cost control</p>

                        </div>
                        <div className='basis-1/2'>
                            <h1 className=' text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-2xl'>Purchasing</h1>
                            <p className='pt-2'>Expertise in sourcing and procuring high-quality equipment, materials, and specialized technology required for semiconductor facilities. Our procurement service includes vendor selection, quality assurance, and cost management to secure reliable and efficient project resources.</p>

                        </div>
                    </div>



                </article>
            </div >

        </div >

    );
}

export default Service;