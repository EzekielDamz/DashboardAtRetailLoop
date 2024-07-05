// import {BrowerRouter as Router, Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from '../DashBoard/Dashboard';
import Dashboardpage from "../Component/Dashboardpage";
import Home from "../DashBoard/Home";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboardpage />} />

          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter
