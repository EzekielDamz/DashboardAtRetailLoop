import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
const Home = () => {
  return (
    <Dashboard>
      <div className="text-center  pt-[3rem]">
        <h1 className="pb-[2rem] text-3xl">
          Home Page Please Navigate to the dashboard
        </h1>
        <Link to="/dashboard" className="text-2xl underline">
          Dasboard
        </Link>
      </div>
    </Dashboard>
  );
};

export default Home;
