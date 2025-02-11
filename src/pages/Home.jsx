// src/pages/Home.jsx
import pic from "../img/1.png"
function Home() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8  ">
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
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        J&I Advanced Construction.{' '}
                        <a href="#" className="font-semibold text-indigo-600">
                            <span aria-hidden="true" className="absolute inset-0" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>

                <div className="relative h-full text-end rounded-lg ">
                    <img src={pic} alt="Company Logo" className="w-full h-full rounded-lg" />
                    <div className="absolute top-40 right-5 w-full h-full text-balance text-right rounded-lg">
                        <h2 className="text-white text-2xl lg:text-5xl font-bold">We Deliver Preconstruction Services</h2>
                        <h2 className="text-white text-2xl lg:text-5xl font-bold">for Realizing Customer Value</h2>
                    </div>
                </div>
                <div>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        Despite our relatively short history, J&I Advanced Construction comprises veterans with over 10 years of experience in semiconductor construction. Notably, our team has nearly a decade of experience specifically in constructing semiconductor plants in the United States, making us experts in this field. Leveraging this extensive experience, we deeply understand the critical importance of the initial stages of construction.

                        Our vision is to enable our partners to anticipate and manage potential risks through our services, thereby minimizing those risks and ensuring the achievement of project goals. We aim to support SK hynix in the successful construction of its semiconductor plant in the US by providing thorough planning and execution from the very beginning.

                    </p>
                </div>
            </div>

        </div>

    );
}

export default Home;