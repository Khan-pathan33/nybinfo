import Weddings from '..//..//../assets/whatAreYouPlanningForImage/Weddings.png'
import MiceEvents from '..//..//../assets/whatAreYouPlanningForImage/MiceEvents.png'
import DJNight from '..//..//../assets/whatAreYouPlanningForImage/DJNight.png'
import GetTogether from '..//..//../assets/whatAreYouPlanningForImage/GetTogether.png'
import Birthdays from '..//..//../assets/whatAreYouPlanningForImage/Birthdays.png'
import ThemeParties from '..//..//../assets/whatAreYouPlanningForImage/ThemeParties.png'
import SocialEvents from '..//..//../assets/whatAreYouPlanningForImage/SocialEvents.png'


export default function EventPlanning() {
  const events = [
    {
      title: "Weddings",
      img: Weddings,
      w: "w-[502px]",
      h: "h-[384px]",
      top: "top-[4px]",
      left: "left-[0px]",
      rectangleColor: "bg-[#FFBB00]",
      rectangleHeight: "h-[16px]"
    },
    {
      title: "Mice / Corporate Events",
      img: MiceEvents,
      w: "w-[544px]",
      h: "h-[443px]",
      top: "top-[3px]",
      left: "left-[512px]",
      rectangleColor: "bg-[#D33E39]",
      rectangleHeight: "h-[34px]"
    },
    {
      title: "Concerts / DJ Nights",
      img: DJNight,
      w: "w-[556px]",
      h: "h-[323px]",
      top: "top-[0px]",
      left: "left-[1065px]",
      rectangleColor: null,
      rectangleHeight: null
    },
    {
      title: "Family / Get Togethers",
      img: GetTogether,
      w: "w-[502px]",
      h: "h-[366px]",
      top: "top-[417px]",
      left: "left-[1px]",
      rectangleColor: null,
      rectangleHeight: null
    },
    {
      title: "Birthdays / Anniversaries",
      img: Birthdays,
      w: "w-[545px]",
      h: "h-[286px]",
      top: "top-[497px]",
      left: "left-[512px]",
      rectangleColor: null,
      rectangleHeight: null
    },
    {
      title: "Theme Parties",
      img: ThemeParties,
      w: "w-[274px]",
      h: "h-[400px]",
      top: "top-[382px]",
      left: "left-[1066px]",
      rectangleColor: null,
      rectangleHeight: null
    },
    {
      title: "Social Events",
      img: SocialEvents,
      w: "w-[273px]",
      h: "h-[456px]",
      top: "top-[327px]",
      left: "left-[1350px]",
      rectangleColor: null,
      rectangleHeight: null
    }
  ];

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-br from-[#26273A] to-[#000000] relative pt-[120px]">
      <div className="relative w-[1623px] h-[900px]">

        {/* Centered Heading */}
        <div className="w-full flex justify-center items-center mb-10">
          <h2 className="text-white font-poppins font-medium text-[34px] leading-[44px] text-center">
            What Are You Planning For ?
          </h2>
        </div>

        {events.map(
          ({ title, img, w, h, top, left, rectangleColor, rectangleHeight }, index) => (
            <div key={index} className={`absolute ${top} ${left} flex flex-col items-start`}>
              
              <div className={`relative rounded-lg overflow-hidden shadow-lg group ${w} ${h}`}>
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition"
                  loading="lazy"
                />

                {/* Custom overlays */}
                {title === "Weddings" ? (
                  <div
                    className="absolute left-0"
                    style={{
                      width: "503.271px",
                      height: "72.047px",
                      top: "312.56px",
                      background: "#000000C7",
                      backdropFilter: "blur(15.958px)",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "16px"
                    }}
                  >
                    <span className="font-semibold drop-shadow-lg text-[#E3E3E3] text-base">
                      • {title}
                    </span>
                  </div>
                ) : title === "Mice / Corporate Events" ? (
                  <div
                    className="absolute"
                    style={{
                      width: "545.652px",
                      height: "83.702px",
                      top: "359.18px",
                      left: "-0.37px",
                      background: "#000000A6",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "16px"
                    }}
                  >
                    <span className="font-semibold drop-shadow-lg text-[#E3E3E3] text-base">
                      • {title}
                    </span>
                  </div>
                ) : title === "Concerts / DJ Nights" ? (
                  <div
                    className="absolute"
                    style={{
                      width: "557.307px",
                      height: "80.523px",
                      top: "242.63px",
                      left: "-1.06px",
                      background: "#000000A6",
                      backdropFilter: "blur(15.958px)",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "16px"
                    }}
                  >
                    <span className="font-semibold drop-shadow-lg text-[#E3E3E3] text-base">
                      • {title}
                    </span>
                  </div>
                ) : (
                  <div className="absolute bottom-6 left-4 font-semibold drop-shadow-lg text-[#E3E3E3] text-base">
                    • {title}
                  </div>
                )}
              </div>

              {rectangleColor && rectangleHeight && (
                <div className={`mt-1 ${w} ${rectangleHeight} ${rectangleColor}`} />
              )}
            </div>
          )
        )}

      </div>
    </div>
  );
}