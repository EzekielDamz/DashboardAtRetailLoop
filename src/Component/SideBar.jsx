// import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdFingerPrint } from "react-icons/io";
const SideBar = () => {
  const location = useLocation();
  const navbar = [
    {
      Nav: "Home",
      to: "/",
    },
    {
      Nav: "Dashboard",
      to: "/dashboard",
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
    <aside >
      <div className="pt-[3rem]">
        <div className="text-[2.5rem] pl-3 pb-7">
          <IoMdFingerPrint />
        </div>
        {navbar.map((navs, index) => (
          <div key={index} className=" py-2 cursor-pointer">
            <Link to={navs.to}>
              <h4
                className={`text-[#3c3737] lg:pl-2 max-sm:pl-2 py-3 font-normal w-[100%] rounded-sm sm:text-sm  lg:text-lg ${
                  location.pathname.endsWith(`${navs.to}`)
                    ? "bg-[#3c3737]  text-[#ececec] "
                    : ""
                }`}
              >
                {navs.Nav}
              </h4>
            </Link>
          </div>
        ))}
      </div>
      <div className="pt-[12rem] text-[#3c3737] ">
        <p>Abram Kongaard</p>
      </div>
    </aside>
  );
};

export default SideBar;
