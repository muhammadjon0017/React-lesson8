import "./Home.css";
import { MdSettingsSuggest } from "react-icons/md";
import {
  FaTrash,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaEdit,
} from "react-icons/fa";

function Home({ users, setUsers }) {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__header">
          <h1>Foydalanuvchilar Ro'yxati</h1>
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
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>
                      <div className="avatar-mini">{index + 1}</div>
                    </td>

                    <td>{user.name}</td>

                    <td>{user.email}</td>

                    <td>{user.phone}</td>

                    <td className="text-center">
                      <button
                        className="delete-row-btn"
                        title="O'chirish"
                        onClick={() =>
                          setUsers((prevUsers) =>
                            prevUsers.filter(
                              (item) => item.id !== user.id
                            )
                          )
                        }
                      >
                        <FaTrash />
                      </button>

                      <button
                        className="edit-row-btn"
                        title="Tahrirlash"
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="no-users">
              <p>Foydalanuvchilar mavjud emas.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;