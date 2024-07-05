import { HiPlusCircle } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
const DashboardHeader = () => {
  return (
    <div className="flex justify-between pt-[3rem] pr-10">
      <div>
        <h3 className="text-2xl text-[#3c3737] font-medium">Dashboard</h3>
      </div>

      <div className="flex gap-2   text-[#3c3737]">
        <span className="font-normal text-[1rem] cursor-pointer">Export</span>
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
