// src/pages/Home.jsx
import pic from "../img/1.png"
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="--font-basic relative isolate px-0 pt-14 lg:px-" >
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
            <div className=" py-32 sm:py-48 lg:py-56">
                <div className="sm:mb-8 px-10 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm/3 lg:text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        J&I Advanced Construction.{' '}
                        <Link to="/About" className="font-semibold text-[#153361]">
                            <span aria-hidden="true" className="absolute inset-0" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>

                <div className="relative h-full pt-10 text-end ">
                    <img src={pic} alt="Company Logo" className="w-full h-full object-fill" />
                </div>
                <div className="px-3">
                    <h1 className="text-[25px]  text-[#153361] font-bold text-balance  pt-10 lg:text-5xl">
                        We Deliver Preconstruction Services
                    </h1>
                    <h1 className="text-[25px] text-[#153361] font-bold text-balance lg:text-5xl">
                        for Realizing Customer Value
                    </h1>
                    <p className="mt-8 text-sm/8 lg:text-lg font-medium text-pretty text-gray-500 ">
                        Despite our relatively short history, J&I Advanced Construction comprises veterans with over 10 years of experience in semiconductor construction. Notably, our team has nearly a decade of experience specifically in constructing semiconductor plants in the United States, making us experts in this field. Leveraging this extensive experience, we deeply understand the critical importance of the initial stages of construction.

                        Our vision is to enable our partners to anticipate and manage potential risks through our services, thereby minimizing those risks and ensuring the achievement of project goals. We aim to support SK hynix in the successful construction of its semiconductor plant in the US by providing thorough planning and execution from the very beginning.

                    </p>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/Contact" className="rounded-md bg-[#153361] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
                        <p>Contact Us</p>
                    </Link>
    

                    <Link to="/About" className="text-sm/6 font-semibold text-gray-900">
                        Learn more <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>

        </div>

    );
}

export default Home;