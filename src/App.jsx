import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Modal from "./Components/Modal/Modal";

function App() {
  const [boll, setBoll] = useState(false);

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");

    return savedUsers
      ? JSON.parse(savedUsers)
      : [
          {
            id: 1,
            name: "Muhammad Samatov",
            email: "muhammad@example.com",
            phone: "+998 90 012 00 17",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function getData(newUser) {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  return (
    <>
      <Sidebar />

      <div className="main__container">
        <Navbar
          setBoll={setBoll}
          users={users}
        />

        <Home
          users={users}
          setUsers={setUsers}
        />
      </div>

      {boll && (
        <Modal
          setBoll={setBoll}
          getData={getData}
        />
      )}
    </>
  );
}

export default App;