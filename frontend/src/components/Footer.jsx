import { Linkedin, Instagram, Mail } from 'react-feather'
import '../index.css';
import privacypolicy from "../assets/documents/Privacy Policy.pdf";
import termsconditions from "../assets/documents/Terms and Conditions.pdf";

function Footer() {
    return (
        <footer class="bg-[#23354E]">
            <div class="container px-3 pt-5 sm:pt-8 mx-auto">
                <div class="flex flex-wrap md:text-center text-center order-first">
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4 py-0">
                        <h2 class="font-poppins text-white lg:text-3xl md:text-xl text-xl tracking-wider font-bold mb-1 sm:mb-2">Reach Out To Us</h2>
                        <div class="list-none mb-4 sm:mb-10">
                            <li>
                                <p class="text-white text-xs lg:text-lg md:text-md hover:text-[#22C3FF]">Pankaj Garg: <a href="tel:">+91 9113630416</a></p>
                            </li>
                            <li>
                                <p class="text-white text-xs lg:text-lg md:text-md hover:text-[#22C3FF]">Ananya M: <a href="tel:">+91 7338498081</a></p>
                            </li>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4 py-0">
                        <h2 class="font-poppins text-white lg:text-3xl md:text-xl text-xl tracking-wider font-bold mb-1 sm:mb-2">Connect with Us On</h2>
                        <div className="flex justify-center text-white text-xs sm:text-xl ">
                            <div className="">
                                <a href="https://www.instagram.com/wearehackman/" rel='noreferrer noopener' target="_blank"><Instagram size= {30} className='hover:text-[#22C3FF] lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl' /></a>
                            </div>
                            <div className="ml-8 insta">
                                <a href="https://www.linkedin.com/company/wearehackman/" rel='noreferrer noopener' target="_blank"><Linkedin size= {30} className='hover:text-[#22C3FF] lg:text-5xl lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl'/></a>
                            </div>
                            <div className="ml-8 mb-4 sm:mb-10">
                                <a href="mailto:genesis.hackman@gmail.com" rel='noreferrer noopener' target="_blank"><Mail size= {30} className='hover:text-[#22C3FF] lg:text-5xl lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl'/></a>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/1 w-full px-4 py-0">
                        <p class="font-poppins text-[#22C3FF] tracking-widest cursor-pointer lg:text-sm md:text-sm text-xs mt-0.5 sm:mt-2 mb-1 sm:mb-2"><a href={privacypolicy} rel='noreferrer noopener' target="_blank" className='hover:text-green-300'>Privacy Policy</a> | <a href={termsconditions} rel='noreferrer noopener' target="_blank" className='hover:text-green-300'>Terms & Conditions</a></p>
                        <p class="font-poppins text-white tracking-widest lg:text-smF md:text-sm text-xs mb-4">© 2023 Hackman. All rights Reserved ️</p>
                    </div>



                </div>
            </div>
            <div className='bg-[#24263B] pt-0.5 pb-0.5'>
                <p className='font-poppins text-center text-white text-xs sm:text-base tarcking-widest mb-0.5 sm:mb-2 mt-1 sm:mt-2 '>Made by team <a href="https://www.instagram.com/genesis.ise/" rel='noreferrer noopener' target="_blank" className='text-[#22C3FF]'>Genesis</a> with ❤️</p>
            </div>
        </footer>
    );
}

export default Footer;