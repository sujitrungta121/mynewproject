import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMailBulk,
  FaPhoneAlt
} from "react-icons/fa";
import footerData from "../common/metadata/footerData";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <main className="bg-emerald-900 flex flex-col justify-between  gap-4  pl-20 pr-20 pt-4 pb-4">
      <div className="flex lg:flex-row flex-col gap-2  items-center justify-between border-b pb-3">
        <div>
          <span className="text-white text-base font 500 ">
            Terms of service |{" "}
          </span>
          <span className="text-white text-base font 500 ">
            Freshers Zone |
          </span>
          <span className="text-white text-base font 500 ">
            Institutions Zone
          </span>
        </div>
        <div className="flex flex-row gap-8 ">
          <FaFacebookF color="white" />
          <FaTwitter color="white" />
          <FaInstagramSquare color="white" />
          <FaLinkedin color="white" />
        </div>
      </div>

      <div className="flex flex-col gap-2  lg:flex-row justify-between border-b pb-4">
        {footerData.map((item) => {
      
          return (
            <div key={item.id} className="flex flex-col gap-4">
              <span className="text-white text-base ">
                {item.title}
              </span>
              <div className="flex flex-col gap-2 hover:undeline">
                {item.contents.map((subItem) => {
                  return (
                    <div
                      key={subItem.id}
                      className="text-gray-400 text-sm font-bold hover:cursor-pointer hover:text-white hover:underline"
                    >
                      {subItem.title}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex lg:flex-row flex-col items-center gap-4 justify-between">
        <div className="flex flex-col">
          <span className="text-gray-400 ">
            &copy; FreshersKolkata.com All right reserved.
          </span>
          <span className="text-gray-400">Developed by iekmasolutions</span>
        </div>
        <div>
            <div className="flex flex-row  gap-4 items-center">
              <FaMapMarkerAlt color="white"/>
            <span className="text-white">5/E (26), Second Floor, Port Blair Line(E), Chiriamore, Barrackpore, Kolkata-120</span>
            </div> 
            <div className="flex flex-row gap-4 items-center">
                <FaMailBulk color="white"  />
            <span className="text-white">info@fresherskolkata.com</span>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <FaPhoneAlt  color="white"/>
            <span className="text-white">9038877129</span>
            </div>
        </div>
      </div>
    </main>
  );
}
