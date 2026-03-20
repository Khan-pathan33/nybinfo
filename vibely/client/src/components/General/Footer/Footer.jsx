import React from "react";
import footerBg from "..//..//..//assets/footer/footer1.png";
//import {FaLinkedin, FaTwitter,FaInstagram} from 'react-icons/fa'
import logo from "..//..//..//assets/footer/logo.png";
import linkedin from "..//..//..//assets/footer/linkedin.png";
import twitter from "..//..//..//assets/footer/twitter.png";
import instagram from "..//..//..//assets/footer/instagram.png";
const Footer = () => {
  return (
     <footer className='w-full max-w-[1728px] h-[620px] bg-center bg-cover text-white py-20 relative' style={{backgroundImage:`url(${footerBg})`}}>
    {/* // <footer className="w-[1728px] h-[614px]  bg-gradient-to-r from-[#290404] to-[#5B0000] text-white py-20 flex items-center"> */}
      <div className="absolute inset-0 bg-black/15"></div>
      <div className="max-w-[1543.92px] h-[265.85px] flex items-start gap-[92px] mx-auto">
        {/*column1 */}
        <div className="space-y-4">
          <img src={logo} alt="Vibely Logo" className="w-[102px] h-[78px] opacity-100 drop-shadow-md" />
          {/* <h1 className='text-3xl font-extrabold bg-gradient-to-r from-[#ff6a00] to-[#ffd000] bg-clip-text text-transparent'>Vibely</h1>
    <p className='text-white text-lg font-medium'>Events</p> */}

          <p className="w-[569px] h-[120px] text-[#F9F9F9] font-poppins font-light text-[20.24px] 
          leading-normal text-left opacity-100 ">
            Vibely Events is your all-in-one event planning platform. from
            expert organizers to essential services, we bring everything
            together to help you plan and celebrate with confidence.
          </p>
        </div>
        {/*column2 */}
        <div className="w-[296px] h-[176.38px] flex flex-col  gap-[28.77px] opacity-100">
          <h3>Contact Us</h3>
          <p className="text-white font-semibold text-lg leading-relaxed">Email:VibelyEvents.com</p>
          <div className="text-[#F9F9F9] text-left">
            <p>
            Address:23/5, Galaxy Plaza,
            <br />
            Ananthapur, Andhra Pradesh
          </p>
          </div>
          
        </div>
        {/*column3 */}
        <div className=" w-[214.46px] h-[265.85px] flex flex-col  gap-[28.77px] opacity-100">
          <h3 className="text-lg font-poppins mb-4">Quick Links</h3>

          <ul className="w-[214.46px] h-[202.08px] flex flex-col items-start gap-[11.77px] opacity-100 text-[#F9F9F9]">
            <li className='text-[#E6E6E6] font-poppins font-normal text-[20.92px] leading-normal'>USP of Vibely Events</li>
            <li className='text-[#E6E6E6] font-poppins font-normal text-[20.92px] leading-normal'>Our services</li>
            <li className='text-[#E6E6E6] font-poppins font-normal text-[20.92px] leading-normal'>Why Choose us</li>
            <li className='text-[#E6E6E6] font-poppins font-normal text-[20.92px] leading-normal'>Portfolio</li>
            <li className='text-[#E6E6E6] font-poppins font-normal text-[20.92px] leading-normal'>Contact Us</li>
          </ul>
        </div>
        {/*column4 */}
        <div className="flex flex-col items-center gap-5">
  <h3 className="w-[188.46px] h-[35px] text-white font-poppins font-medium text-[23.54px] text-center">
    FOLLOW US ON
  </h3>

  <div className="flex items-end gap-[22.62px]">

    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <img
        src={linkedin}
        alt="linkedin"
        className="w-[46px] h-[46px] block transition-transform  hover:scale-110 duration-300"
      />
    </a>

    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer ">
      <img
        src={twitter}
        alt="twitter"
        className="w-[49px] h-[49px] block transition-transform  hover:scale-110  duration-300"
      />
    </a>

    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img
        src={instagram}
        alt="instagram"
        className="w-[47px] h-[47px] block transition-transform  hover:scale-110  duration-300"
      />
    </a>

  </div>
</div>
      </div>
    </footer>
   
  );
};

export default Footer;
