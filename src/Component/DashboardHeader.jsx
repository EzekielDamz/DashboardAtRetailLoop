import { HiPlusCircle } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
const DashboardHeader = () => {
  return (
    <div className="flex justify-between pt-[3rem] lg:pr-10 max-sm:pr-2 sm:pr-3">
      <div>
        <h3 className="text-2xl font-Ubuntu text-[#3c3737] font-medium">
          Dashboard
        </h3>
      </div>

      <div className="flex gap-2 max-sm:pt-1 sm:pt-1  text-[#3c3737]">
        <span className="font-normal text-[1rem] cursor-pointer font-Ubuntu">Export</span>
        <span className="text-[1rem] pt-1 cursor-pointer">
          <IoMdNotificationsOutline />
        </span>
        <span className="text-[1.5rem] cursor-pointer">
          <HiPlusCircle />
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;
