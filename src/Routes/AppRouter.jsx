// import {BrowerRouter as Router, Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from '../DashBoard/Dashboard';
import Dashboardpage from "../Component/Dashboardpage";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboardpage/>} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default AppRouter
