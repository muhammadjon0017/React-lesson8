import "./Navbar.css";
import { FaSearch, FaBell, FaUserCircle, FaPlus, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Qidirish..." />
        </div>

        <div className="navbar__actions">
          <button className="add-user-btn">
            <FaPlus /> Qo'shish
          </button>

          <button className="nav-btn" title="Bildirishnomalar">
            <FaBell />
            <span className="badge">{3}</span>
          </button>

          <button className="nav-btn" title="Bildirishnomalar">
            <FaUser />
            <span className="badge">{0}</span>
          </button>

          <div className="navbar__user">
            <span>Samatov</span>
            <FaUserCircle className="user-avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
