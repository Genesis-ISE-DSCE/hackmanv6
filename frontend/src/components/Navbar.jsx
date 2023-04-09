import React, { useState } from 'react';

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
        <nav className="fixed top-0 left-0 right-0 bg-[#23354E] px-5 py-5 flex justify-between items-center z-10">
            <img src={require('../assets/images/hackman_logo.png')} alt="Logo" className="text-[#E5F2FF] font-medium h-8" />
          
            <div className="flex hidden md:block">
                <a href="#landing" className="text-[#22C3FF] font-small sm:text-2xl text-[18px] sm:mr-8 mr-3">Home</a>
                <a href="#themes" className="text-[#22C3FF] font-small sm:text-2xl text-[18px] sm:mr-8 mr-3">Themes</a>
                <a href="#schedule" className="text-[#22C3FF] font-small sm:text-2xl text-[18px] sm:mr-8 mr-3">Schedule</a>
                <a href="#sponsors" className="text-[#22C3FF] font-small sm:text-2xl text-[18px] sm:mr-8 mr-3">Sponsors</a>
                <a href="#faq" className="text-[#22C3FF] font-small sm:text-2xl text-[18px] sm:mr-8 mr-3">FAQs</a>
            </div>
            <button className="hidden md:block pt-1 pb-2 right-0 sm:px-8 py-3 rounded-lg sm:mr-8" style={{ backgroundColor: "#D4DFC7" }}>
                <a href="/Registration" target="_blank" className="text-[#071E22] font-medium sm:text-xl text-lg">Register</a>
            </button>

            <button className="text-[#E5F2FF] font-medium text-2xl focus:outline-none sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                <img src={require('../assets/images/Menu.png')} alt="Menu" className="h-10 right-0" color='#D4DFC7' />
            </button>
            <div className={`${isOpen ? "block" : "hidden"} sm:hidden absolute top-20 left-0 right-0 bg-[#23354E] text-center rounded-lg pb-4`}>
                <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-1" onClick={() => {
                    setIsOpen(!isOpen);
                    jump("landing");
                }}>Home</a>

                <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-1" onClick={() => {
                    setIsOpen(!isOpen);
                    jump("themes");
                }}>Themes</a>

                <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-1" onClick={() => {
                    setIsOpen(!isOpen);
                    jump("schedule");
                }}>Schedule</a>

                <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-1" onClick={() => {
                    setIsOpen(!isOpen);
                    jump("sponsors");
                }}>Sponsors</a>

                <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-2" onClick={() => {
                    setIsOpen(!isOpen);
                    jump("faq");
                }}>FAQ</a>

                <button onClick={() => {
                    setIsOpen(!isOpen);
                    // jump("registration");
                }} className="pt-1 pb-2 sm:px-8 px-3 rounded-lg sm:mr-8" style={{ backgroundColor: "#D4DFC7" }}>
                    <a href="/registration" target="_blank" className="text-[#071E22] font-medium sm:text-xl text-lg">Register</a>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;