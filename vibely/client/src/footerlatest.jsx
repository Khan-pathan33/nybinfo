 <footer className='w-full bg-contain  bg-center text-white py-20' style={{backgroundImage:`url(${footerBg})`}}>
    {/* // <footer className="w-[1728px] h-[614px]  bg-gradient-to-r from-[#290404] to-[#5B0000] text-white py-20 flex items-center"> */}
      <div className="max-w-[1544px] mr-6 grid grid-cols-4 gap-[92px] pl-24 pr-10">
        {/*column1 */}
        <div className="space-y-4">
          <img src={logo} alt="Vibely Logo" className="w-[102px] h-[78px]" />
          {/* <h1 className='text-3xl font-extrabold bg-gradient-to-r from-[#ff6a00] to-[#ffd000] bg-clip-text text-transparent'>Vibely</h1>
    <p className='text-white text-lg font-medium'>Events</p> */}

          <p className="text-sm leading-relaxed font-poppins text-gray-200">
            Vibely Events is your all-in-one event planning platform. from
            expert organizers to essential services, we bring everything
            together to help you plan and celebrate with confidence.
          </p>
        </div>
        {/*column2 */}
        <div className="flex flex-col gap-5">
          <h3>Contact Us</h3>
          <p className="text-sm leading-relaxed">Email:VibelyEvents.com</p>
          <p>
            Address:23/5, Galaxy Plaza,
            <br />
            Ananthapur, Andhra Pradesh
          </p>
        </div>
        {/*column3 */}
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-poppins mb-4">Quick Links</h3>

          <ul className="flex flex-col gap-3">
            <li>USP of Vibely Events</li>
            <li>Our services</li>
            <li>Why Choose us</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/*column4 */}
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-lg font-poppins">FOLLOW US ON </h3>
          <div className="flex items-center gap-4">
            <a href="#"></a>{" "}
            <img
              src={linkedin}
              alt="linkedin"
              className="w-[46px] h-[46px] hover:scale-110 transition"
            />
            <a href="#"></a>{" "}
            <img
              src={twitter}
              className="w-[49px] h-[49px] hover:scale-110 transition"
            />
            <a href="#"></a>{" "}
            <img
              src={instagram}
              className="w-[47px] h-[47px] hover:scale-110 transition"
            />
          </div>
        </div>
      </div>
    </footer>
   
  );
};

export default Footer;