import "./Home.css";
import { MdSettingsSuggest } from "react-icons/md";
import {
  FaTrash,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaEdit,
} from "react-icons/fa";

function Home({ users }) {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__header">
          <h1>Foydalanuvchilar Ro'yxati.</h1>
        </div>

        <div className="home__table-wrapper">
          {users.length > 0 ? (
            <table className="user-table">
              <thead>
                <tr>
                  <th>
                    <div className="avatar-mini">N</div>
                  </th>
                  <th>
                    <FaUser className="th-icon" /> Ism sharif
                  </th>
                  <th>
                    <FaEnvelope className="th-icon" /> Email
                  </th>
                  <th>
                    <FaPhoneAlt className="th-icon" /> Telefon
                  </th>
                  <th className="text-center">
                    <MdSettingsSuggest className="th-icon" />
                    Amallar
                  </th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user, index) => (
                    <tr key={user.id}>
                      <td>
                        <div className="avatar-mini">{index + 1}</div>
                      </td>
                      <td>
                        <div className="user-name-cell">
                          {/* <div className="avatar-mini">
                            {user.name.charAt(0).toUpperCase()}
                          </div> */}
                          {user.name}
                        </div>
                      </td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td className="text-center">
                        <button className="delete-row-btn" title="O'chirish">
                          <FaTrash />
                        </button>
                        <button className="edit-row-btn" title="Edit">
                          <FaEdit />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <div className="no-users">
              <p>
                Foydalanuvchilar mavjud emas. Yuqoridagi "Qo'shish" tugmasi
                orqali yangi foydalanuvchi qo'shing.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
