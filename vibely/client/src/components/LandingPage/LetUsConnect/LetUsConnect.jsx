 //2nd one
 import React, { useState } from "react";
 import banner from "..//..//..//assets/letUsConnect/banner.png"; 

 const LetUsConnect = () => { 

    const [formData, setFormData] = useState({ 
     name: "",
    email: "",
    contact: "",
   eventType: "",
     notes: "",
     call: false,
   whatsapp: false

  });


   const handleChange = (e) => { 
  const { name, value, type, checked } = e.target;

  setFormData({ 
     ...formData,
  [name]: type === "checkbox" ? checked : value
  });
 }; 

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(formData);
  }; 

  return (
    <div className="flex flex-col items-center justify-center py-10 ">

      {/* Title */}
      <h2 className="text-[34px] leading-[44px] tracking-[0%] font-medium text-[#252525] w-[253px] h-[44px] mb-6">Let us Connect</h2>

      {/* Scroll Background */}
      <div
        className=" w-full max-w-[1351px] h-[700px] bg-center bg-contain bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >

        {/* Form */}
        <form onSubmit={handleSubmit} id='contactForm' className="flex flex-col gap-6 w-[701px] h-[358px] items-end opacity-100 absolute ">

          {/* Name */}
          <div className="flex items-center gap-6">
            <label className="w-[141] h-[30] text-[22.37px] text-[#FFE9C0] font-normal text-left font-cinzel">YOUR NAME :</label>
            <input
              type="text" name="name"

              placeholder="Enter your name" value={formData.name} onChange={handleChange}
              className="w-[450.60px] h-[41.14px] rounded-[7.31px] border-[1.83px] border-[#F3C700]/85 bg-black/10 backdrop-blur-sm text-[#FFE9C0] 
              px-3 py-2 outline-none text-center placeholder:text-center placeholder:text-[#E16158] placeholder:text-[16.46px] placeholder:font-poppins"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-6">
            <label className="w-[80px] h-[30px] text-[22.37px] whitespace-nowrap font-normal text-left text-[#E1FFAA] font-cinzel ">EMAIL :</label>
            <input
              type="email" name="email"
       placeholder="Enter your email" value={formData.email} onChange={handleChange}
              className="w-[450.60px] h-[41.14px] rounded-[7.31px] border-[1.83px] border-[#F3C700]/85 bg-black/10 backdrop-blur-sm text-[#FFE9C0] 
              px-3 py-2 outline-none text-center placeholder:text-center placeholder:text-[#E16158] placeholder:text-[16.46px] placeholder:font-poppins"
            />
          </div>

          {/* Contact */}
          <div className="flex items-center gap-6">
            <label className="w-[226px] h-[30px] text-[22.37px] font-normal text-right font-cinzel text-right text-[#FFE9C0] leading-normal">CONTACT NUMBER :</label>
            <input
              type="text"   name="contact"
               placeholder="Enter your contact number" value={formData.contact} onChange={handleChange}
              className="w-[450.60px] h-[41.14px] rounded-[7.31px] border-[1.83px] border-[#F3C700]/85 bg-black/10 backdrop-blur-sm text-[#FFE9C0] 
              px-3 py-2 outline-none text-center placeholder:text-center placeholder:text-[#E16158] placeholder:text-[16.46px] placeholder:font-poppins"
            />
          </div>

          {/* Event Type */}
          <div className="flex items-center gap-6">
            <label className="w-[145px] h-[30px] text-[22.37px] font-normal  whitespace-nowrap font-cinzel text-[#FFE9C0] text-left leading normal">EVENT TYPE :</label>
            <input
              type="text" name="eventType"
              placeholder="Corporate, Wedding, Birthday, Concert etc" value={formData.eventType} onChange={handleChange}
              className="w-[450.60px] h-[41.14px] rounded-[7.31px] border-[1.83px] border-[#F3C700]/85 bg-black/10 backdrop-blur-sm text-[#FFE9C0] 
              px-3 py-2 outline-none text-center placeholder:text-center placeholder:text-[#E16158] placeholder:text-[16.46px] placeholder:font-poppins"
            />
          </div>

          {/* Notes */}
          <div className="flex items-center gap-6">  
            <label className="w-[181px] h-[30px] text-[22.37px] font-normal  whitespace-nowrap font-cinzel text-[#FFE9C0] text-left leading normal">NOTES / QUERY :</label>
            <textarea
              placeholder="Brief your query if any..." name="notes" value={formData.notes} onChange={handleChange}
              className="w-[450.69px] h-[97.82px] px-3 py-2 rounded-[7.31px] border-[1.83px] border-[#F3C700]/85 bg-black/10 
              backdrop-blur-sm text-[#FFE9C0] placeholder:text-[#E16158] text-center outline-none resize-none"
            ></textarea>
           </div>

          {/* Checkbox */}
          
   <div className="flex items-center gap-30">

  {/* CALL */}
  <div className="flex items-center gap-2">
    <label className="text-[22.37px] font-normal font-cinzel text-[#FFE9C0] leading-normal">
      CALL
    </label>
    <input
      type="checkbox"  name="call"
    checked={formData.call}
    onChange={handleChange}
      className="w-[20px] h-[20px] rounded-[3px] border-[2px] border-[#FFC17B] appearance-none bg-transparent"
    />
  </div>

  {/* WHATSAPP */}
  <div className="flex items-center gap-2">
    <label className=" text-[22.37px] font-normal font-cinzel text-[#FFE9C0] leading-normal">
      WHATSAPP
    </label>
    <input
      type="checkbox" name="whatsapp"
    checked={formData.whatsapp}
    onChange={handleChange}
className="w-[20px] h-[20px] rounded-[3px] border-[2px] border-[#FFC17B] appearance-none bg-transparent"
    />
  </div>

</div>

</form> 
</div>

      {/* Submit Button */}
       <div className="flex justify-center mt-6" >
         <button  type="submit"
       form="contactForm"
        className="w-[250px] h-[54px] flex items-center justify-center gap-[10.34px] pt-[13.45px] pr-[28.96px] pb-[10px] 
        pl-[28.96px] rounded-[8.27px]  bg-gradient-to-r from-[#DC9600] to-[#C38500]">
      
       <span className="font-poppins font-semibold text-[22.76px] text-[#FFFFFF]">
       
       SUBMIT
       </span>
      </button>
       </div>
       
      

    </div>
  );
};

export default LetUsConnect;
   
//5th one
// import React, { useState } from "react";
// import banner from "../../../assets/letUsConnect/banner.png";

// const LetUsConnect = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     eventType: "",
//     notes: "",
//     call: false,
//     whatsapp: false
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="flex flex-col items-center py-10 px-4">

//       {/* Title */}
//       <h2 className="text-2xl md:text-[34px] font-medium text-[#252525] mb-8">
//         Let us Connect
//       </h2>

//       {/* Banner */}
//       <div
//         className="relative w-full max-w-[1350px]  min-h-[700px]  bg-center bg-cover  bg-no-repeat flex items-center justify-center py-16"
//         style={{ backgroundImage: `url(${banner})` }}
//       >

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           id="contactForm"
//           className="w-full max-w-[700px] grid grid-cols-1 md:grid-cols-[220px_1fr] gap-y-6 gap-x-6 px-4 md:px-6"
//         >

//           {/* Name */}
//           <label className="text-[#FFE9C0] text-lg md:text-[22px] font-cinzel">
//             YOUR NAME :
//           </label>

//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             className="w-full h-[42px] rounded border border-[#F3C700]/85 bg-black/10 backdrop-blur-sm
//             text-[#FFE9C0] px-3 outline-none text-center placeholder:text-[#E16158]"
//           />

//           {/* Email */}
//           <label className="text-[#FFE9C0] text-lg md:text-[22px] font-cinzel">
//             EMAIL :
//           </label>

//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             className="w-full h-[42px] rounded border border-[#F3C700]/85 bg-black/10 backdrop-blur-sm
//             text-[#FFE9C0] px-3 outline-none text-center placeholder:text-[#E16158]"
//           />

//           {/* Contact */}
//           <label className="text-[#FFE9C0] text-lg md:text-[22px] font-cinzel">
//             CONTACT NUMBER :
//           </label>

//           <input
//             type="text"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             placeholder="Enter your contact number"
//             className="w-full h-[42px] rounded border border-[#F3C700]/85 bg-black/10 backdrop-blur-sm
//             text-[#FFE9C0] px-3 outline-none text-center placeholder:text-[#E16158]"
//           />

//           {/* Event Type */}
//           <label className="text-[#FFE9C0] text-lg md:text-[22px] font-cinzel">
//             EVENT TYPE :
//           </label>

//           <input
//             type="text"
//             name="eventType"
//             value={formData.eventType}
//             onChange={handleChange}
//             placeholder="Corporate, Wedding, Birthday, Concert etc"
//             className="w-full h-[42px] rounded border border-[#F3C700]/85 bg-black/10 backdrop-blur-sm
//             text-[#FFE9C0] px-3 outline-none text-center placeholder:text-[#E16158]"
//           />

//           {/* Notes */}
//           <label className="text-[#FFE9C0] text-lg md:text-[22px] font-cinzel">
//             NOTES / QUERY :
//           </label>

//           <textarea
//             name="notes"
//             value={formData.notes}
//             onChange={handleChange}
//             placeholder="Brief your query if any..."
//             className="w-full h-[100px] rounded border items-center border-[#F3C700]/85 bg-black/10 backdrop-blur-sm
//             text-[#FFE9C0] px-3 py-2 outline-none resize-none placeholder:text-[#E16158]"
//           />

//           {/* Checkbox */}
//           <div></div>

//           <div className="flex flex-wrap justify-center gap-6 md:gap-12 col-span-1 md:col-span-2">

//             <label className="flex items-center gap-2 text-[#FFE9C0] text-lg md:text-[22px] font-cinzel">
//               CALL
//               <input
//                 type="checkbox"
//                 name="call"
//                 checked={formData.call}
//                 onChange={handleChange}
//                 className="w-[20px] h-[20px] border-2 border-[#FFC17B] rounded appearance-none"
//               />
//             </label>

//             <label className="flex items-center gap-2 text-[#FFE9C0] text-lg md:text-[22px] font-cinzel">
//               WHATSAPP
//               <input
//                 type="checkbox"
//                 name="whatsapp"
//                 checked={formData.whatsapp}
//                 onChange={handleChange}
//                 className="w-[20px] h-[20px] border-2 border-[#FFC17B] rounded appearance-none"
//               />
//             </label>

//           </div>

//         </form>

//       </div>

//       {/* Submit Button */}
//       <div className="mt-8">
//         <button
//           type="submit"
//           form="contactForm"
//           className="w-[200px] md:w-[250px] h-[50px] rounded bg-gradient-to-r from-[#DC9600] to-[#C38500] text-white font-semibold text-lg"
//         >
//           SUBMIT
//         </button>
//       </div>

//     </div>
//   );
// };

// export default LetUsConnect;
//latestone responsive design 

// import React, { useState } from "react";
// import banner from "../../../assets/letUsConnect/banner.png";

// const LetUsConnect = () => {

// const [formData, setFormData] = useState({
//   name: "",
//   email: "",
//   contact: "",
//   eventType: "",
//   notes: "",
//   call: false,
//   whatsapp: false
// });

// const handleChange = (e) => {
//   const { name, value, type, checked } = e.target;

//   setFormData({
//     ...formData,
//     [name]: type === "checkbox" ? checked : value
//   });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(formData);
// };

// return (

// <div className="flex flex-col items-center justify-center py-10 px-4">

// {/* TITLE */}

// <h2 className="text-2xl md:text-4xl font-medium text-[#252525] mb-10 text-center">
// Let us Connect
// </h2>


// {/* BANNER */}

// <div
// className="w-full max-w-[1300px] min-h-[600px] bg-center bg-contain bg-no-repeat flex items-center justify-center px-4"
// style={{ backgroundImage: `url(${banner})` }}
// >


// {/* FORM */}

// <form
// onSubmit={handleSubmit}
// id="contactForm"
// className="flex flex-col gap-6 w-full max-w-[700px]"
// >

// {/* NAME */}

// <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">

// <label className="md:w-[220px] text-lg md:text-[22] text-[#FFE9C0] font-cinzel">
// YOUR NAME :
// </label>

// <input
// type="text"
// name="name"
// placeholder="Enter your name"
// value={formData.name}
// onChange={handleChange}

// className="w-full md:w-[450px] h-[42px]
// rounded-md border border-[#F3C700]/85
// bg-black/10 backdrop-blur-sm
// text-[#FFE9C0]
// px-3 outline-none
// placeholder:text-[#E16158]"
// />

// </div>


// {/* EMAIL */}

// <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">

// <label className="md:w-[220px] text-lg md:text-[22] text-[#FFE9C0] font-cinzel">
// EMAIL :
// </label>

// <input
// type="email"
// name="email"
// placeholder="Enter your email"
// value={formData.email}
// onChange={handleChange}

// className="w-full md:w-[450px] h-[42px]
// rounded-md border border-[#F3C700]/85
// bg-black/10 backdrop-blur-sm
// text-[#FFE9C0]
// px-3 outline-none
// placeholder:text-[#E16158]"
// />

// </div>


// {/* CONTACT */}

// <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">

// <label className="md:w-[220px] text-lg md:text-[22] text-[#FFE9C0] font-cinzel">
// CONTACT NUMBER :
// </label>

// <input
// type="text"
// name="contact"
// placeholder="Enter your contact number"
// value={formData.contact}
// onChange={handleChange}

// className="w-full md:w-[450px] h-[42px]
// rounded-md border border-[#F3C700]/85
// bg-black/10 backdrop-blur-sm
// text-[#FFE9C0]
// px-3 outline-none
// placeholder:text-[#E16158]"
// />

// </div>


// {/* EVENT TYPE */}

// <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">

// <label className="md:w-[220px] text-lg md:text-[22] text-[#FFE9C0] font-cinzel">
// EVENT TYPE :
// </label>

// <input
// type="text"
// name="eventType"
// placeholder="Corporate, Wedding, Birthday, Concert etc"
// value={formData.eventType}
// onChange={handleChange}

// className="w-full md:w-[450px] h-[42px]
// rounded-md border border-[#F3C700]/85
// bg-black/10 backdrop-blur-sm
// text-[#FFE9C0]
// px-3 outline-none
// placeholder:text-[#E16158]"
// />

// </div>


// {/* NOTES */}

// <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">

// <label className="md:w-[220px] text-lg md:text-[22] text-[#FFE9C0] font-cinzel">
// NOTES / QUERY :
// </label>

// <textarea
// name="notes"
// placeholder="Brief your query if any..."
// value={formData.notes}
// onChange={handleChange}

// className="w-full md:w-[450px] h-[100px]
// rounded-md border border-[#F3C700]/85
// bg-black/10 backdrop-blur-sm
// text-[#FFE9C0]
// px-3 py-2 outline-none resize-none
// placeholder:text-[#E16158]"
// ></textarea>

// </div>


// {/* CHECKBOX */}

// <div className="flex justify-end gap-8 md:gap-16 mt-2 w-full md:w-[450px] ml-auto">

// <div className="flex items-center gap-2">

// <label className="text-lg md:text-[22] font-cinzel text-[#FFE9C0]">
// CALL
// </label>

// <input
// type="checkbox"
// name="call"
// checked={formData.call}
// onChange={handleChange}
// className="w-5 h-5 border-2 border-[#FFC17B] appearance-none bg-transparent"
// />

// </div>


// <div className="flex items-center gap-2">

// <label className="text-lg md:text-[22] font-cinzel text-[#FFE9C0]">
// WHATSAPP
// </label>

// <input
// type="checkbox"
// name="whatsapp"
// checked={formData.whatsapp}
// onChange={handleChange}
// className="w-5 h-5 border-2 border-[#FFC17B] appearance-none bg-transparent"
// />

// </div>

// </div>

// </form>

// </div>


// {/* SUBMIT BUTTON */}

// <div className="flex justify-center mt-8">

// <button
// type="submit"
// form="contactForm"

// className="w-[200px] md:w-[250px] h-[50px] md:h-[54px]
// flex items-center justify-center
// rounded-lg
// bg-gradient-to-r from-[#DC9600] to-[#C38500]"
// >

// <span className="font-semibold text-lg md:text-[22px] text-white">
// SUBMIT
// </span>

// </button>

// </div>

// </div>

// );

// };

// export default LetUsConnect;
