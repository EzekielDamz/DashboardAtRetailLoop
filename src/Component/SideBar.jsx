import face from "../assets/Image/faceImage.jpeg";
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
      to: "/support",
    },
  ];
  return (
    <aside>
      <div className="pt-[3rem] font-Ubuntu">
        <div className="text-[2.5rem] pl-3 pb-7">
          <IoMdFingerPrint />
        </div>
        {navbar.map((navs, index) => (
          <div key={index} className=" py-2 cursor-pointer">
            <Link to={navs.to}>
              <h4
                className={`text-[#3c3737] font-Ubuntu lg:pl-2 max-sm:pl-2 sm:pl-2 py-3 font-normal w-[100%] rounded-sm sm:text-sm  lg:text-lg ${
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
      <div className="pt-[12rem] text-[#3c3737] flex gap-3 pb-5">
        <div>
          <img
            src={face}
            alt="A face image"
            className="w-[2rem] h-[2rem] rounded-full"
          />
        </div>

        <p className="font-Ubuntu">Abram Kongaard</p>
      </div>
    </aside>
  );
};

export default SideBar;
