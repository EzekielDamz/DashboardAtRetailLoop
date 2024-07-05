// import React from "react";
import { Link } from "react-router-dom"
import { IoMdFingerPrint } from "react-icons/io";
const SideBar = () => {
  const navbar = [
    {
      Nav: "Home",
      to: "/home",
    },
    {
      Nav: "Dashboard",
      to: "/",
    },
    {
      Nav: "Users",
      to: "/users",
    },
    {
      Nav: "Support center",
      to: "/support-center",
    },
  ];
  return (
    <aside className="bg-white pl-[2rem] h-screen  border-r w-[23%] sticky top-0 ">
      <div className="pt-[3rem]">
        <div className="text-[2.5rem] pl-3 pb-7">
          <IoMdFingerPrint />
        </div>
        {navbar.map((navs, index) => (
          <div key={index} className=" py-2 cursor-pointer">
            <h4 className="text-[#3c3737] pl-4 py-3 font-normal w-[12rem] rounded-sm hover:bg-[#3c3737] hover:text-[#ececec]">
              {navs.Nav}
            </h4>
          </div>
        ))}
      </div>
      <div className="pt-[12rem]">
        <p>Abram Kongaard</p>
      </div>
    </aside>
  );
};

export default SideBar;
