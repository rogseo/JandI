// src/pages/Home.jsx
import pic from "../img/1.png"
function Home() {
    return (
        <div className="absolute inset-x-0 z-0" >
            <img src={pic} alt="Company Logo" className="w-full h-auto rounded-lg"/>
            <div className="absolute top-0 left-0 w-full h-full text-end items-center justify-center  bg-opacity-50 rounded-lg">
                <h2 className="text-white text-2xl font-bold text-balance">We Deliver Preconstruction Services</h2>
                <h2 className="text-white text-2xl font-bold text-balance">for Realizing Customer Value</h2>
            </div>
    
        </div>

    );
}

export default Home;