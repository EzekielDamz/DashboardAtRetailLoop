import Dashboard from "../DashBoard/Dashboard";
import DashboardHeader from "./DashboardHeader";
import DashboardCard from "./DashboardCard";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import ActivitiesTable from "./ActivitiesTable";
import status1 from "../assets/Icons/Status1.svg";
import status2 from "../assets/Icons/Status2.svg";
import status3 from "../assets/Icons/Status3.svg";
import progress1 from "../assets/Icons/Progess1.svg";
import { useState, useEffect } from "react";
const Dashboardpage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activities, setActivities] = useState([
    {
      name: "Jakob",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 8,
      Progress: status1,
      // Progress: progress1,
      ModulesPercentage: "80%",
    },
    {
      name: "Adison Passaquindici Arcand",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 5,
      Progress: status1,
      // Progress: progress2,
      ModulesPercentage: "64%",
    },
    {
      name: "Ruben Franci",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 10,
      Progress: status1,
      // Progress: progress3,
      ModulesPercentage: "100%",
    },
    {
      name: "Ruben WesterVelt",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 7,
      Progress: status2,
      // Progress: progress4,
      ModulesPercentage: "76%",
    },
    {
      name: "Alena Mango",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 4,
      Progress: status2,
      ModulesPercentage: "43%",
    },
    {
      name: "Brandon Ekstrom Bothman",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 9,
      // Progress: "icon",
      Progress: status2,
      ModulesPercentage: "89%",
    },
    {
      name: "Adison Passaquindici Arcand",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 5,
      Progress: status2,
      ModulesPercentage: "64%",
    },
    {
      name: "Jakob",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 8,
      // Progress: "icon",
      Progress: status1,
      ModulesPercentage: "80%",
    },
  ]);
  const [filteredActivities, setFilteredActivities] = useState(activities);
  useEffect(() => {
    const searchActivities = activities.filter((activity) => {
      return activity.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredActivities(searchActivities);
  }, [searchQuery, activities]);

  return (
    <Dashboard>
      <div>
        <DashboardHeader />
        <div className="lg:pr-10 max-sm:pr-2">
          <DashboardCard />
          <div className=" bg-white  shadow-lg mb-[3rem] mt-[3.4rem]   ">
            <div className="flex justify-between  pb-5 p-4">
              <h3 className="lg:text-md sm:text-md  text-[#3c3737] font-medium max-sm:text-[0.9rem] max-sm:pt-1">
                Recent uploads
              </h3>
              <div className="relative text-[#3c3737]">
                <div className="text-2xl absolute lg:pl-3 sm:pl-3 max-sm:pl-1 lg:pt-2 sm:pt-2 max-sm:pt-1">
                  <IoIosSearch />
                </div>
                <input
                  type="text"
                  name=""
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="lg:pl-[3rem] sm:pl-[3rem] max-sm:pl-[2rem] lg:py-2 sm:py-2 max-sm:py-1  lg:w-[20rem] bg-white sm:w-[15rem]  max-sm:w-[10rem] rounded-lg outline-none focus:border focus:border-gray-300"
                  placeholder="Search by name, status or email"
                />
              </div>
            </div>
            <div className="w-full border-b"></div>
            <div className="p-4 flex justify-between text-[#3c3737] lg:text-md max-sm:text-sm font-medium">
              <h3>Name</h3>
              <div className="flex lg:gap-3 sm:gap-3 max-sm:gap-3 ">
                <div className="pt-1 max-sm:hidden sm:block lg:block">
                  <IoIosArrowRoundDown />
                </div>

                <h3>Assessment status</h3>
                <div className="pt-1 max-sm:hidden sm:block lg:block">
                  <IoIosArrowRoundDown />
                </div>
                <h3 className="max-sm:hidden sm:block lg:block">Last active</h3>
                <div className="pt-1 max-sm:hidden sm:block lg:block">
                  <IoIosArrowRoundDown />
                </div>
                <h3>Modules completed</h3>
                <div className="pt-1 max-sm:hidden sm:block lg:block">
                  <IoIosArrowRoundDown />
                </div>
              </div>
            </div>
            <div className="w-full border-b"></div>
            <ActivitiesTable Activieties={filteredActivities} />
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Dashboardpage;
