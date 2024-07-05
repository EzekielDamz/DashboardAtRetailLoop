import Dashboard from "../DashBoard/Dashboard";
import DashboardHeader from "./DashboardHeader";
import DashboardCard from "./DashboardCard";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import ActivitiesTable from "./ActivitiesTable";
const Dashboardpage = () => {

  return (
    <Dashboard>
      <DashboardHeader />
      <div className="pr-10">
        <DashboardCard />
        <div className=" bg-white  shadow-lg mb-[3rem] mt-[3.4rem]   ">
          <div className="flex justify-between  pb-5 p-4">
            <h3 className="text-md text-[#3c3737] font-medium">
              Recent uploads
             </h3>
            <div className="relative text-[#3c3737]">
              <div className="text-2xl absolute pl-3 pt-2">
                <IoIosSearch />
              </div>
              <input
                type="text"
                name=""
                id=""
                className="pl-[3rem] py-2 w-[20rem] rounded-lg outline-none focus:border focus:border-gray-300"
                placeholder="Search by name, status or email"
              />
            </div>
          </div>
          <div className="w-full border-b"></div>
          <div className="p-4 flex justify-between text-[#3c3737] text-md font-medium">
            <h3>Name</h3>
            <div className="flex gap-2">
              <div className="pt-1">
                <IoIosArrowRoundDown />
              </div>

              <h3>Assessment status</h3>
              <div className="pt-1">
                <IoIosArrowRoundDown />
              </div>
              <h3>Last active</h3>
              <div className="pt-1">
                <IoIosArrowRoundDown />
              </div>
              <h3>Modules completed</h3>
              <div className="pt-1">
                <IoIosArrowRoundDown />
              </div>
            </div>
          </div>
          <div className="w-full border-b"></div>
          <ActivitiesTable />
        </div>
      </div>
    </Dashboard>
  );
};

export default Dashboardpage;
            