// src/pages/Service.jsx
import pic from "../img/1.png"
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
            <img src={pic} alt="Company Logo" className="w-full h-auto rounded-lg"/>

            <div className="absolute inset-x-0 z-0 bg" >
                <img src={pic} alt="Company Logo" className="w-full h-auto rounded-lg" />
                <div className="absolute top-0 left-0 w-full h-full text-end items-center justify-center  bg-opacity-50 rounded-lg">
                    <h2 className="text-white text-2xl font-bold text-balance">We Deliver Preconstruction Services</h2>
                    <h2 className="text-white text-2xl font-bold text-balance">for Realizing Customer Value</h2>
                </div>

            </div>
        </div>

    );
}

export default Service;