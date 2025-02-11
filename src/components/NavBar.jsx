// src/components/NavBar.jsx
import { Link } from "react-router-dom";
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import logo from "../img/Blue.png";
import menu from "../img/menu.png"
import logo1 from "../img/logo.png"







function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="absolute inset-x-0 top-0 z-50 bg-blue">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5" >
                        <span className="sr-only">Your Company</span>
                        <img src={logo} alt="Company Logo" className="w-60 h-15" />
                    </Link>
                </div>

                <div className="flex lg:hidden ">

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <img src={menu} alt="menu tab" className="w-10 h-10" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-20">



                    <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" to="/">Home</Link>
                    <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" to="/About">About</Link>
                    <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" to="/Service">Service</Link>
                    {/* <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" to="/Contact">Contact</Link> */}


                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="/Contact" className="text-sm/6 font-semibold text-gray-900">contact<span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>


            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img src={logo1} alt="logo image" className="w-15 h-15" />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <p>close</p>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" to="/">
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <p>Home</p>
                                    </button>
                                </Link>
                                <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" to="/About">
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <p>About</p>
                                    </button>
                                </Link>
                                <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" to="/Service">
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <p>Service</p>
                                    </button>
                                </Link>
                                <button>
                                <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" to="/About">About</Link>

                                </button>
                                
                                <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" to="/Service">Service</Link>
                                {/* <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" to="/Contact">Contact</Link> */}

                            </div>
                            <div className="py-6">
                                <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" to="/Service">
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <p>Service</p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>

        </header>



    );
}

export default NavBar;


