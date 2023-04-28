// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Linkedin, Instagram, Facebook } from 'react-feather'
import '../index.css';

function Footer() {
    // return (
    //     <div className="bg-[#23354E]">
    //         <div className="lg:text-6xl md:text-4xl text-[#22C3FF] pt-4 text-center font-poppins font-bold text-3xl">CONTACT</div>

    //         <div className="lg:pt-8 lg:mx-36 lg:flex lg:justify-between md:pt-8 md:mx-16 md:flex md:justify-between pt-4 mx-8 text-[#D4DFC7]">
    // <div className="hover:text-[#22C3FF] lg:inline-flex lg:text-left md:inline-flex md:text-left text-center pb-1">
    // <FontAwesomeIcon icon={faPhone} className='lg:text-4xl md:text-2xl text-md'></FontAwesomeIcon>
    //     <a className="lg:pl-2 lg:text-2xl lg:items-center md:pl-2 md:text-xl md:items-center pl-2 text-sm items-center" href="tel:">+911234567890</a>
    // </div>
    // <div className="hover:text-[#22C3FF] lg:inline-flex lg:text-center md:inline-flex md:text-center text-center pb-1">
    // <FontAwesomeIcon icon={faEnvelope} className='lg:text-4xl md:text-2xl text-md'></FontAwesomeIcon>
    //     <a className="lg:pl-2 lg:text-2xl lg:items-center md:pl-2 md:text-xl md:items-center pl-2 text-sm items-center" href="mailto:">genesis.hackman@gmail.com</a>
    // </div>
    // <div className="hover:text-[#22C3FF] lg:inline-flex lg:text-right md:inline-flex md:text-right text-center pb-1">
    // <FontAwesomeIcon icon={faPhone} className='lg:text-4xl md:text-2xl text-md'></FontAwesomeIcon>
    //     <a className="lg:pl-2 lg:text-2xl lg:items-center md:pl-2 md:text-xl md:items-center pl-2 text-sm items-center" href="tel:">+911234567890</a>
    // </div>
    //         </div>

    //         <div className="lg:pt-2 lg:pb-2 md:pt-2 md:pb-2 pt-1 flex justify-center text-[#D4DFC7]">
    //             <div className="">
    //             <a href="https://www.instagram.com/wearehackman/" rel='noreferrer noopener' target="_blank"><FontAwesomeIcon icon={faLinkedin} className='lg:text-5xl lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl'></FontAwesomeIcon></a>
    //             </div>
    //             <div className="ml-8 insta">
    //             <a href="https://www.instagram.com/wearehackman/" rel='noreferrer noopener' target="_blank"><FontAwesomeIcon icon={faInstagram} className='lg:text-5xl lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl'></FontAwesomeIcon></a>
    //             </div>
    //             <div className="ml-8">
    //             <a href="https://www.instagram.com/wearehackman/" rel='noreferrer noopener' target="_blank"><FontAwesomeIcon icon={faFacebook} className='lg:text-5xl lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl'></FontAwesomeIcon></a>
    //             </div>
    //         </div>

    //         <div className='lg:flex lg:justify-center md:flex md:justify-center pt-2 text-[#D4DFC7]'>
    //             <div className='text-center lg:text-md md:text-md text-xs lg:pb-4 md:pb-4 pb-0'>
    //                 <a href="#/" rel='noreferrer noopener' target="_blank" className='text-green-300'>Privacy Policy </a>| Hackman v6.0 &#169; 2023 |&nbsp;
    //             </div>
    //             <div className='text-center lg:text-md md:text-md text-xs pb-2'>
    //                 Made by team Genesis | <a href="#/" rel='noreferrer noopener' target="_blank" className='text-green-300'>Terms & Conditions</a>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <footer class="bg-[#23354E]">
            <div class="container px-3 pt-5 sm:pt-8 mx-auto">
                <div class="flex flex-wrap md:text-center text-center order-first">
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4 py-0">
                        <h2 class="font-poppins text-white text-base sm:text-xl font-bold tracking-widest mb-1 sm:mb-2">Student Coordinators</h2>
                        <div class="list-none mb-4 sm:mb-10">
                            <li>
                                <p class="text-white text-xs sm:text-xl hover:text-[#22C3FF]">Pankaj Garg - <a href="tel:">+911234567890</a></p>
                            </li>
                            <li>
                                <p class="text-white text-xs sm:text-xl hover:text-[#22C3FF]">Ananya Bhat - <a href="tel:">+911234567890</a></p>
                            </li>
                            <li>
                                <p class="text-white text-xs sm:text-xl hover:text-[#22C3FF]">Mail - <a href="mailto:">genesis.hackman@gmail.com</a></p>
                            </li>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4 py-0">
                        <h2 class="font-poppins text-white text-base sm:text-xl font-bold tracking-widest mb-1 sm:mb-2">Follow Us On Socials</h2>
                        <div className="flex justify-center text-white text-xs sm:text-xl ">
                            <div className="">
                                <a href="https://www.instagram.com/wearehackman/" rel='noreferrer noopener' target="_blank"><Linkedin size= {30} className='hover:text-[#22C3FF] lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl' /></a>
                            </div>
                            <div className="ml-8 insta">
                                <a href="https://www.instagram.com/wearehackman/" rel='noreferrer noopener' target="_blank"><Facebook size= {30} className='hover:text-[#22C3FF] lg:text-5xl lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl'/></a>
                            </div>
                            <div className="ml-8 mb-4 sm:mb-10">
                                <a href="https://www.instagram.com/wearehackman/" rel='noreferrer noopener' target="_blank"><Instagram size= {30} className='hover:text-[#22C3FF] lg:text-5xl lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl'/></a>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/1 w-full px-4 py-0">
                        <p class="font-poppins text-[#22C3FF] tracking-widest cursor-pointer lg:text-sm md:text-sm text-xs mt-0.5 sm:mt-2 mb-1 sm:mb-2"><a href="#/" rel='noreferrer noopener' target="_blank" className='hover:text-green-300'>Privacy Policy</a> | <a href="#/" rel='noreferrer noopener' target="_blank" className='hover:text-green-300'>Terms & Conditions</a></p>
                        <p class="font-poppins text-white tracking-widest lg:text-sm md:text-sm text-xs mb-4">© 2023 Hackman. All rights Reserved ️</p>
                    </div>



                </div>
            </div>
            <div className='bg-[#24263B] pt-0.5 pb-0.5'>
                <p className='font-poppins text-center text-white text-xs sm:text-base tarcking-widest mb-0.5 sm:mb-2 mt-1 sm:mt-2 '>Made by team Genesis with ❤️</p>
            </div>
        </footer>
    );
}

export default Footer;