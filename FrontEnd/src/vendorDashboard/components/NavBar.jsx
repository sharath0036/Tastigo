import { useState } from "react";

const NavBar = ({ loginHandler, registerHandler, showlogOut, logOutHandler }) => {
  const [activeButton, setActiveButton] = useState("register");

  const handleClick = (buttonType, handler) => {
    setActiveButton(buttonType);
    handler();
  };

  const firmName = localStorage.getItem("firmName");

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <h3 className="text-white m-0">Tastigo</h3>
          <h4>FirmName :  {firmName}</h4>
          <div className="text-end">
            {!showlogOut ? (
              <>
                <button
                  type="button"
                  className={`btn me-2 ${activeButton === "register" ? "btn-warning" : "btn-outline-light"}`}
                  onClick={() => handleClick("register", registerHandler)}
                >
                  Register
                </button>
                <button
                  type="button"
                  className={`btn ${activeButton === "login" ? "btn-info" : "btn-outline-light"}`}
                  onClick={() => handleClick("login", loginHandler)}
                >
                  Login
                </button>
              </>
            ) : (
              <button
                type="button"
                className={`btn ${activeButton === "logout" ? "btn-danger" : "btn-outline-light"}`}
                onClick={() => handleClick("logout", logOutHandler)}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
