import React from "react";
import SideBar from "../Component/SideBar";
import Dashboardpage from "../Component/Dashboardpage";
const Dashboard = ({ children }) => {
  return (
    <section className="flex gap-6">
      <SideBar />
      <div className="bg-white first-letter: w-full">{children}</div>
    </section>
  );
};

export default Dashboard;
