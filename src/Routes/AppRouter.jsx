
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "../DashBoard/User";
import Dashboardpage from "../Component/Dashboardpage";
import Home from "../DashBoard/Home";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboardpage />} />
          <Route path="/users" element={<User />} />

          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter
