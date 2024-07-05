
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "../DashBoard/User";
import Dashboardpage from "../Component/Dashboardpage";
import Home from "../DashBoard/Home";
import Support from "../DashBoard/Support"

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboardpage />} />
          <Route path="/users" element={<User />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={"Not Found"} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter
