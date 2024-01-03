
import './App.css';
import{BrowserRouter as Router,Routes,Link,Route} from "react-router-dom";
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
        <Link to="/Solution" class="nav">
          Solution
        </Link>
        <Link to="/Service" class="nav">
          Service
        </Link>
        <Link to="/Industries" class="nav">
          Industries
        </Link>
        <Link to="/" class="nav">
          PRESIDIO
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
              <Route>
                <Route path="/Solution" element={<Solution/>}></Route>
                <Route path="/Service" element={<Service></Service>}></Route>
                <Route path="/Industries" element={<Industries></Industries>}></Route>
                <Route path="/" element={<PRESIDIO></PRESIDIO>}></Route>
                <Route path="/Insight" element={<Insight></Insight>}></Route>
                <Route path="/Partners" element={<Partners></Partners>}></Route>
                <Route path="/Company" element={<Company></Company>}></Route>
              </Route>
            </Routes>
          </Router>
      </body>
  );
}

export default App;
