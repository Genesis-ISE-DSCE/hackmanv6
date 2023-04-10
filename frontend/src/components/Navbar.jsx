import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const jump = (target) => {
        const violation = document.getElementById(target);
        window.scrollTo({
            top: violation.offsetTop,
            behavior: "smooth"
        });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#23354E] px-5 py-1 md:py-1 flex justify-between items-center z-10">
            
            {/* Logo in navbar */}
            <img src={require('../assets/images/hackman_logo.png')} alt="Logo" className="h-4 md:h-4 lg:h-5 ml-1" />

            {/* Navbar for large screens */}
            {/* The navigation elements div */}
            <div className="flex hidden lg:block">

                <a href="#landing" className="text-[#22C3FF] text-base  text-[18px] sm:mr-8 mr-3">Home</a>
                <a href="#themes" className="text-[#22C3FF] text-base  text-[18px] sm:mr-8 mr-3">Themes</a>
                <a href="#schedule" className="text-[#22C3FF] text-base  text-[18px] sm:mr-8 mr-3">Schedule</a>
                <a href="#sponsors" className="text-[#22C3FF] text-base  text-[18px] sm:mr-8 mr-3">Sponsors</a>
                <a href="#faq" className="text-[#22C3FF] text-base  text-[18px] sm:mr-8 mr-3">FAQs</a>
           
            </div>

            {/* Regiter button */}
            <button className="hidden lg:block pt-0.5 pb-1 right-0 px-5 py-3 rounded-lg mt-2 mb-2 mr-2" style={{ backgroundColor: "#D4DFC7" }}>
                <a href="/Registration" target="_blank" className="text-[#071E22] font-medium text-base">Register</a>
            </button>


            {/* Navbar for small and medium screen */}
            {/* Drop down menu */}
            {/* Menu button for small and medium screen */}
            <button className="focus:outline-none lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                <img src={require('../assets/images/Menu.png')} alt="Menu" className="h-8 md:h-8 right-0" color='#D4DFC7' />
            </button>

            {/* Navigation elements inside dropdown menu */}
            <div className={`${isOpen ? "block" : "hidden"} lg:hidden absolute top-10 left-0 right-0 bg-[#23354E] text-center rounded-lg pb-4`}>

                <a href="#" className="block text-[#E5F2FF] font-bold text-sm text-2xl mb-1" onClick={() => { setIsOpen(!isOpen); }} >Home</a>
                <a href="#themes" className="block text-[#E5F2FF] font-bold text-sm mb-1" onClick={() => { setIsOpen(!isOpen); }} >Themes</a>
                <a href="#schedule" className="block text-[#E5F2FF] font-bold text-sm mb-1" onClick={() => { setIsOpen(!isOpen); }} >Schedule</a>
                <a href="#sponsors" className="block text-[#E5F2FF] font-bold text-sm mb-1" onClick={() => { setIsOpen(!isOpen); }} >Sponsors</a>
                <a href="#faq" className="block text-[#E5F2FF] font-bold text-sm mb-2" onClick={() => { setIsOpen(!isOpen); }} >FAQ</a>

                {/* Register button inside dropdown menu*/}
                <button onClick={() => { setIsOpen(!isOpen); }} className="pb-1 px-2 rounded-lg" style={{ backgroundColor: "#D4DFC7" }}>
                    <a href="/registration" target="_blank" className="text-[#071E22] font-medium text-sm">Register</a>
                </button>

            </div>

        </nav>
    );
}

export default Navbar