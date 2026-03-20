import React from 'react';
import TicketA from '..//..//..//assets/TicketImage/TicketA.png';
import TicketB from '..//..//..//assets/TicketImage/TicketB.png';

const TicketBook = () => {
  return (
    <div className="pt-20 flex justify-center items-center px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row max-w-[1615px] w-full pt-9 gap-[34px] items-center justify-between">

        {/* Heading */}
        <div className="text-center md:text-left w-[241px] md:w-auto font-poppins text-[28px] md:text-[34px] font-medium text-[#252525] leading-[1.2]">
          What are you <br /> Looking For{" "}
          <span className="text-[#C20000] text-[40px] md:text-[47px]">?</span>
        </div>

        {/* Ticket Images */}
        <div className="flex flex-col md:flex-row items-center gap-[34px] w-full md:w-auto justify-center">
          <img
            src={TicketA}
            alt="Ticket A"
            className="w-[653px] h-[102px] object-contain"
          />
          <img
            src={TicketB}
            alt="Ticket B"
            className="w-[653px] h-[102px] object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default TicketBook;