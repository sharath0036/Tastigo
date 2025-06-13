import { useState } from "react";

const NavBar = ({ loginHandler, registerHandler }) => {
  const [activeButton, setActiveButton] = useState("register");

  const handleClick = (buttonType, handler) => {
    setActiveButton(buttonType);
    handler();
  };

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <h3>Tastigo</h3>
          </ul>

          <div className="text-end">
            <button
              type="button"
              className={`btn ${activeButton === "register" ? "btn-outline-light me-2" : "btn-warning"}`}
              onClick={() => handleClick("register", registerHandler)}
            >
              Register
            </button>

            <button
              type="button"
              className={`btn ${activeButton === "login" ? "btn-outline-light me-2" : "btn-info"}`}
              onClick={() => handleClick("login", loginHandler)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
