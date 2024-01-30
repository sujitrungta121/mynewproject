import { FaArrowRightLong } from "react-icons/fa6";
import DemoSlider from "../../common/swiperComponent";
import popularServices from "../../common/metadata/popluar_services_data";
export default function TrendingServices() {
  return (
    <main className="bg-emerald-900 mb-16 pb-16  xl:pt-32 lg:pt-32 md:pt-32 p-4 md:pr-32 flex flex-col gap-8 w-full">
      {/* heading */}
      <div className="flex xl:flex-row 2xl:flex-row gap-6 lg:flex-row md:flex-row sm:flex-col flex-col justify-between xl:items-center lg:items-center md:items-center  xl:pl-32 lg:pl-32 md:pl-32 ">
        {/* left part */}
        <div className="flex flex-col">
          <span className="font-bold xl:text-3xl lg:text-3xl text-xl sm:text-xl md:text-2xl text-white">
            Trending Services
          </span>
          <span className="text-white xl:text-base lg:text-base sm:text-xs text-xs">
            Most viewed and all-time top-selling services
          </span>
        </div>
        {/* right part */}
        <div className="flex flex-row gap-4 items-center justify-between">
          <span className="text-white xl:text-base lg:text-base sm:text-xs text-xs  ">All Services</span>
          <FaArrowRightLong color="white" />
        </div>
      </div>
      <div>
        <DemoSlider data={popularServices} />
      </div>
    </main>
  );
}
