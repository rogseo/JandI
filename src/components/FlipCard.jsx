import React from "react";
import purchasing_icon from "../img/Purchasing.png"
import generalContruction_icon from "../img/gc.png"
import management_icon from "../img/management.png"
import preconstruction_icon from "../img/preconstruction.png"



const services = [
    {
        step: "01",
        name: "Preconstruction",
        imageUrl:
            "https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            "Comprehensive initial project analysis, including feasibility studies, design reviews, and budgeting to ensure project alignment with client goals and optimal cost-efficiency. Preconstruction planning also establishes realistic timelines and schedules for seamless execution.",
        icon: preconstruction_icon,

    },
    {
        step: "02",
        name: "General Contracting",
        imageUrl:
            "https://images.unsplash.com/photo-1687462970787-61d953508926?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            " Overseeing all construction aspects, from resource allocation to subcontractor coordination. Our GC services cover all essential functions to keep projects on schedule and within budget, while maintaining strict standards for quality, safety, and regulatory compliance.",
        icon: generalContruction_icon,
    },
    {
        step: "03",
        name: "Construction Management",
        imageUrl:
            "https://images.unsplash.com/photo-1635437536607-b8572f443763?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            "On-site management that monitors every stage of the construction process, providing real-time updates and proactive problem-solving to maintain efficiency and mitigate delays. CM services ensure alignment between project objectives, quality standards, and cost control",

        icon: management_icon,
    },
    {
        step: "04",
        name: "Purchasing",
        imageUrl:
            "https://images.unsplash.com/photo-1635437536607-b8572f443763?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            "Expertise in sourcing and procuring high-quality equipment, materials, and specialized technology required for semiconductor facilities. Our procurement service includes vendor selection, quality assurance, and cost management to secure reliable and efficient project resources.",
        icon: purchasing_icon,
    },
];


function FlipCard() {
    return (
        <section className="py-16 mx-auto px-3 pt-10">
            <div className="mx-auto flex justify-center object-center  px- py-16  sm:py-24 lg:max-w-7xl ">
                <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
                    <div className=" mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-2">
                        {services.map((service) => (
                            <div
                                key={service.name}
                                className="group  h-70 w-70 lg:h-96 lg:w-96 [perspective:1000px]"
                            >
                                <div className="relative h-full w-full rounded-xl shadow-xl shadow-[#153361] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-active:[transform:rotateY(180deg)] ">
                                    {/* Front face with image */}
                                    <div className="absolute  inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                                        <div className="flex min-h-full flex-col items-center justify-center">
                                            <img src={service.icon} alt="constructor icons" />
                                            <p className=" md:my-6 pt-3 text-[20px] lg:text-3xl text-[#153361] text-bold">{service.name}</p>

                                        </div>

                                    </div>
                                    {/* Back face with text */}
                                    <div className="absolute  bg-[#153361] inset-0 h-full w-full rounded-xl  px-5 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                        <div className="flex    min-h-full flex-col items-center justify-center">
                                            <h2 className="text-[20px] lg:text-2xl font-bold mb-4">
                                                {service.name}
                                            </h2>
                                            <p className="text-sm lg:text-lg text-pretty text-center mb-4 ">
                                                {service.description}
                                            </p>
                                            {/* <a href="tel:555-555-5555" className="inline-flex">
                                                <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                                                    <span>Schedule Service</span>
                                                
                                                </button>
                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}
export default FlipCard;