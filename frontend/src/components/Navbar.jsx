import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    // const jump = (target) => {
    //     const violation = document.getElementById(target);
    //     window.scrollTo({
    //         top: violation.offsetTop,
    //         behavior: "smooth"
    //     });
    // };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#23354E] px-5 py-1 lg:py-1 h-8.2 lg:h-18 md:h-17 flex justify-between items-center z-10">

            {/* Logo in navbar */}
            <a href="/"><img src={require('../assets/images/hackman_logo.png')} alt="Logo" className="h-4 md:h-7 lg:h-7 mt-2 mb-2 ml-1" /></a>

            {/* Navbar for large screens */}
            {/* The navigation elements div */}
            <div className="hidden lg:block">

                {props.currentPage === 'landing' && <a href="/" className="text-[#22C3FF] text-xl  text-[18px] sm:mr-8 mr-3 hover:text-[#D4DFC7]">Home</a>}
                {props.currentPage === 'landing' && <a href="/#about" className="text-[#22C3FF] text-xl text-[18px] sm:mr-8 mr-3 hover:text-[#D4DFC7]">About</a>}
                {/* {props.currentPage === 'landing' && <a href="/#themes" className="text-[#22C3FF] text-xl text-[18px] sm:mr-8 mr-3 hover:text-[#D4DFC7]">Themes</a>} */}
                {props.currentPage === 'landing' && <a href="/#schedule" className="text-[#22C3FF] text-xl  text-[18px] sm:mr-8 mr-3 hover:text-[#D4DFC7]">Schedule</a>}
                {/* {props.currentPage === 'landing' && <a href="/#sponsors" className="text-[#22C3FF] text-xl  text-[18px] sm:mr-8 mr-3 hover:text-[#D4DFC7]">Sponsors</a>} */}
                {props.currentPage === 'landing' && <a href="/#faq" className="text-[#22C3FF] text-xl  text-[18px] sm:mr-8 mr-3 hover:text-[#D4DFC7]">FAQs</a>}

            </div>

            {/* Regiter button */}
            {props.currentPage === 'landing' && (
            <Link to={"/registeration"} className="font-semibold text-xl">
                <button className="hidden lg:block pt-1 pb-2 right-0 px-5 py-4 rounded-lg mt-2 mb-2 mr-2 text-[#071E22] bg-[#D4DFC7] hover:text-white hover:bg-[#22C3FF]">
                    Register
                </button>
            </Link>
            )}


            {/* Navbar for small and medium screen */}
            {/* Drop down menu */}
            {/* Menu button for small and medium screen */}
            {props.currentPage === 'landing' && <button className="focus:outline-none lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                <img src={require('../assets/images/Menu.png')} alt="Menu" className="h-7 md:h-8 right-0" color='#D4DFC7' />
            </button>}

            {/* Navigation elements inside dropdown menu */}
            <div className={`${isOpen ? "block" : "hidden"} lg:hidden absolute top-8 md:top-10 left-0 right-0 bg-[#23354E] text-center pb-4`}>

                {props.currentPage === 'landing' && <a href="/" className="block text-[#22C3FF] font-bold text-base mb-1 hover:text-[#D4DFC7]" onClick={() => { setIsOpen(!isOpen); }} >Home</a>}
                {props.currentPage === 'landing' && <a href="/#about" className="block text-[#22C3FF] font-bold text-base mb-1 hover:text-[#D4DFC7]" onClick={() => { setIsOpen(!isOpen); }} >About</a>}
                {/* {props.currentPage === 'landing' && <a href="/#themes" className="block text-[#22C3FF] font-bold text-base mb-1 hover:text-[#D4DFC7]" onClick={() => { setIsOpen(!isOpen); }} >Themes</a>} */}
                {props.currentPage === 'landing' && <a href="/#schedule" className="block text-[#22C3FF] font-bold text-base mb-1 hover:text-[#D4DFC7]" onClick={() => { setIsOpen(!isOpen); }} >Schedule</a>}
                {/* {props.currentPage === 'landing' && <a href="/#sponsors" className="block text-[#22C3FF] font-bold text-base mb-1 hover:text-[#D4DFC7]" onClick={() => { setIsOpen(!isOpen); }} >Sponsors</a>} */}
                {props.currentPage === 'landing' && <a href="/#faq" className="block text-[#22C3FF] font-bold text-base mb-1 hover:text-[#D4DFC7]" onClick={() => { setIsOpen(!isOpen); }} >FAQ</a>}

                {/* Register button inside dropdown menu*/}
                {props.currentPage === 'landing' && (
                    <Link to={"/registeration"} className="text-[#071E22] font-medium text-base">
                        <button onClick={() => { setIsOpen(!isOpen); }} className="pb-1 px-2 rounded-lg text-[#071E22] bg-[#D4DFC7] hover:text-white hover:bg-[#22C3FF]">
                            Register
                        </button>
                    </Link>
                )}

            </div>

        </nav>
    );
}

export default Navbar