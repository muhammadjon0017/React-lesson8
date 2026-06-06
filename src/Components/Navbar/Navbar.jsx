import "./Navbar.css";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaPlus,
  FaUser,
} from "react-icons/fa";

function Navbar({ setBoll, users }) {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Qidirish..." />
        </div>

        <div className="navbar__actions">
          <button
            className="add-user-btn"
            onClick={() => setBoll(true)}
          >
            <FaPlus /> Qo'shish
          </button>

          <button className="nav-btn" title="Bildirishnomalar">
            <FaBell />
            <span className="badge">3</span>
          </button>

          <button className="nav-btn" title="Foydalanuvchilar soni">
            <FaUser />
            <span className="badge">{users?.length || 0}</span>
          </button>

          <div className="navbar__user">
            <span>Muhammad</span>
            <FaUserCircle className="user-avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;