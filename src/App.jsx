import { useState } from "react";
// Styles
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
// import Modal from "./Components/Modal/Modal";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Muhammad Samatov",
      email: "muhammad@example.com",
      phone: "+998 90 012 00 17",
    },
  ]);

  return (
    <>
      <Sidebar />
      <div className="main__container">
        <Navbar />
        <Home users={users} />
      </div>
      {/* <Modal /> */}
    </>
  );
}

export default App;
