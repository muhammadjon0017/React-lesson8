import "./Modal.css";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Modal({ setBoll, getData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
    };

    getData(newUser);

    setBoll(false);

    setName("");
    setEmail("");
    setPhone("");
  }

  function handleClose() {
    setBoll(false);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Yangi foydalanuvchi</h2>

          <button className="close-btn" onClick={handleClose}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Ism sharif</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masalan: Muhammad Samatov"
              required
            />
          </div>

          <div className="form-group">
            <label>Email manzili</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Telefon raqam</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 90 012 00 17"
            />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="cancel-btn"
              onClick={handleClose}
            >
              Bekor qilish
            </button>

            <button type="submit" className="submit-btn">
              Saqlash
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;