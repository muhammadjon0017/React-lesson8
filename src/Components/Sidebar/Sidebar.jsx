import "./Sidebar.css";
import {
  FaHome,
  FaUsers,
  FaChartPie,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <h2>CRM </h2>
      </div>

      <nav className="sidebar__nav">
        <ul>
          <li className="active">
            <a href="#">
              <FaHome /> Bosh sahifa
            </a>
          </li>
          <li>
            <a href="#">
              <FaUsers /> Mijozlar
            </a>
          </li>
          <li>
            <a href="#">
              <FaChartPie /> Hisobotlar
            </a>
          </li>
          <li>
            <a href="#">
              <FaCog /> Sozlamalar
            </a>
          </li>
        </ul>
      </nav>

      <div className="sidebar__footer">
        <button className="logout-btn">
          <FaSignOutAlt /> Chiqish
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
