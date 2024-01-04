import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { ImYoutube } from "react-icons/im";
import Solution from "./Solution";
import Service from "./Service";
import Industries from "./Industries";
import PRESIDIO from "./PRESIDIO";
import Insight from "./Insight";
import Partners from "./Partners";
import Company from "./Company";

function App() {
  return (
    <body>
      <div id="topicons">
        <ul id="icons">
          <li> <FaFacebookF /></li>
          <li><BsLinkedin /></li>
          <li><FaXTwitter /></li>
          <li><GrInstagram /></li>
          <li><ImYoutube /></li>
        </ul>

        <ul id="ind">
          <li class="indication"><span>{">"}</span> Contact Us </li>
          <li class="indication"><span>{" >"}</span> ClientLogin </li>
          <li class="indication"><span>{" >"}</span> Locations </li>
        </ul>
      </div>
      <Router>
        <div id="pagelinks">
          {/* <Link to="/Solution" class="nav">
            Solution
          </Link>
          <Link to="/Service" class="nav">
            Service
          </Link> */}
          {/* Add a drop-down menu for Solution */}
          <div className="dropdown nav">
            <Link to="/Solution" className="nav dropbtn">
              Solution
            </Link>
            <div className="dropdown-content">
              <Link to="/Solution/Strategy">Strategy</Link>
              <Link to="/Solution/Consulting">Consulting</Link>
              <Link to="/Solution/Design">Design</Link>
            </div>
          </div>

          {/* Add a drop-down menu for Service */}
          <div className="dropdown nav">
            <Link to="/Service" className="nav dropbtn">
              Service
            </Link>
            <div className="dropdown-content">
              <Link to="/Service/Overeview">Overeview</Link>
              <Link to="/Service/ModernInfrastucure">ModernInfrastucure</Link>
              <Link to="/Service/Cloud">Cloud</Link>
            </div>
          </div>

          <Link to="/Industries" class="nav">
            Industries
          </Link>
          <Link to="/" class="nav">
            <img src="https://www.presidio.com/icheestu/2021/02/Presidio-blue-logo.svg" alt=""></img>
          </Link>
          <Link to="/Insight" class="nav">
            Insight
          </Link>
          <Link to="/Partners" class="nav">
            Partners
          </Link>
          <Link to="/Company" class="nav">
            Company
          </Link>
        </div>
        <Routes>
          <Route path="/Solution" element={<Solution />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Industries" element={<Industries />} />
          <Route path="/" element={<PRESIDIO />} />
          <Route path="/Insight" element={<Insight />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/Company" element={<Company />} />
        </Routes>
      </Router>
      {/*  */}
      <div id="footer"><img class="image1" src="footer.jpg" alt=""></img></div>
    </body>
  );
}

export default App;


