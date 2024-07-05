import SideBar from "../Component/SideBar";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import { motion } from "framer-motion";

const Dashboard = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex gap-6 relative">
      <div className="bg-white lg:pl-[1.5rem] max-sm:ml-0 h-screen max-sm:hidden md:hidden lg:block sm:hidden pr-5 border-r w-[20%] sticky top-0">
        <SideBar />
      </div>

      {isOpen && (
        <div className="lg:hidden  sm:block max-sm:block fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: isOpen ? 0 : "-100%" }}
            transition={{ duration: 0.3 }}
            className="bg-white h-full w-3/4 p-5"
          >
            <SideBar />
          </motion.div>
        </div>
      )}

      <div className="lg:hidden  sm:block max-sm:block fixed top-5 left-5 z-30">
        <button onClick={handleToggle} className="text-2xl">
          {isOpen ? <GrFormClose size={24} /> : <RiMenuUnfoldLine size={24} />}
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white w-full lg:pl-5 sm:pl-3 max-sm:pl-2"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Dashboard;
