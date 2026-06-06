import "./Modal.css";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Modal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // onAdd({
    //   id: Date.now(),
    //   name,
    //   email,
    //   phone: phone || "Kiritilmagan",
    // });

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Yangi foydalanuvchi</h2>
          <button className="close-btn">
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
              placeholder="Masalan: Dostonbek Turgunov"
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
              placeholder="+998 90 123 45 67"
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="cancel-btn">
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
