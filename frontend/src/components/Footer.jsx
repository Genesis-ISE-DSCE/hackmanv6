import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import '../index.css';

function Footer() {
    return (
        <div className="bg-[#23354E]">
            <div className="lg:text-6xl md:text-4xl text-[#22C3FF] pt-4 text-center font-poppins font-bold text-3xl">Contact</div>

            <div className="lg:pt-8 lg:mx-36 lg:flex lg:justify-between md:pt-8 md:mx-16 md:flex md:justify-between pt-6 mx-8 text-[#D4DFC7]">
                <div className="hover:text-[#22C3FF] lg:inline-flex lg:text-left md:inline-flex md:text-left text-center pb-1">
                <FontAwesomeIcon icon={faPhone} className='lg:text-4xl md:text-2xl text-lg'></FontAwesomeIcon>
                    <a className="lg:pl-2 lg:text-2xl lg:items-center md:pl-2 md:text-xl md:items-center pl-2 text-md items-center" href="tel:">+911234567890</a>
                </div>
                <div className="hover:text-[#22C3FF] lg:inline-flex lg:text-center md:inline-flex md:text-center text-center pb-1">
                <FontAwesomeIcon icon={faEnvelope} className='lg:text-4xl md:text-2xl text-lg'></FontAwesomeIcon>
                    <a className="lg:pl-2 lg:text-2xl lg:items-center md:pl-2 md:text-xl md:items-center pl-2 text-md items-center" href="mailto:">genesis.hackman@gmail.com</a>
                </div>
                <div className="hover:text-[#22C3FF] lg:inline-flex lg:text-right md:inline-flex md:text-right text-center pb-1">
                <FontAwesomeIcon icon={faPhone} className='lg:text-4xl md:text-2xl text-lg'></FontAwesomeIcon>
                    <a className="lg:pl-2 lg:text-2xl lg:items-center md:pl-2 md:text-xl md:items-center pl-2 text-md items-center" href="tel:">+911234567890</a>
                </div>
            </div>

            <div className="pt-6 flex justify-center pb-4 text-[#D4DFC7]">
                <div className="">
                <a href="https://www.instagram.com/wearehackman/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='text-5xl hover:scale-150'></FontAwesomeIcon></a>
                </div>
                <div className="ml-8 insta">
                <a href="https://www.instagram.com/wearehackman/" target="_blank"><FontAwesomeIcon icon={faInstagram} className='text-5xl hover:scale-150'></FontAwesomeIcon></a>
                </div>
                <div className="ml-8">
                <a href="https://www.instagram.com/wearehackman/" target="_blank"><FontAwesomeIcon icon={faFacebook} className='text-5xl hover:scale-150'></FontAwesomeIcon></a>
                </div>
            </div>

            <div className='lg:flex lg:justify-center md:flex md:justify-center pt-2 text-[#D4DFC7]'>
                <div className='text-center lg:text-md md:text-md text-xs lg:pb-4 md:pb-4 pb-2'>
                    <a href="#" target="_blank" className='text-green-300'>Privacy Policy </a>| Hackman v6.0 &#169; 2023 |&nbsp;
                </div>
                <div className='text-center lg:text-md md:text-md text-xs pb-4'>
                    Made by team Genesis | <a href="#" target="_blank" className='text-green-300'>Terms & Conditions</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;