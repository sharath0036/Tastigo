import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Login from '../components/forms/Login';
import Register from '../components/forms/Register';
import AddFirm from '../components/forms/AddFirm';
import AddProducts from '../components/forms/AddProducts';
import WelCome from '../components/WelCome';
import AllProducts from '../components/AllProducts';

const LandingPage = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [showlogOut, setShowLogout] = useState(false);
  const [showfirmTitle, setShowFirmTitle] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('loginToken');
    if (token) {
      setShowLogout(true);
    }
  }, []);

  useEffect(() => {
    const firmName = localStorage.getItem('firmName');
    if (firmName) {
      setShowFirmTitle(false); // Hide "Add Firm" if firm already added
    }
  }, []);

  const logOutHandler = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (!confirmed) return;

    localStorage.removeItem('loginToken');
    localStorage.removeItem("firmId");
    localStorage.removeItem("firmName");
    setShowLogout(false);
    setShowFirmTitle(true);
    setActiveForm(null);
  };

  const requireLogin = (actionFn) => {
    if (!showlogOut) {
      alert("Please login to continue.");
      setActiveForm("login");
    } else {
      actionFn();
    }
  };

  return (
    <div className="LandingPage">
      <NavBar
        loginHandler={() => setActiveForm("login")}
        registerHandler={() => setActiveForm("register")}
        showlogOut={showlogOut}
        logOutHandler={logOutHandler}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideBar
              addFirmHandler={() => requireLogin(() => setActiveForm("addFirm"))}
              addProductsHandler={() => requireLogin(() => setActiveForm("addProducts"))}
              AllProductsHandler={() => requireLogin(() => setActiveForm("allProducts"))}
              showfirmTitle={showfirmTitle}
            />
          </div>
          <div className="col-lg-9">
            {activeForm === "login" && <Login showWelcomeHandler={() => setActiveForm("Welcome")} />}
            {activeForm === "register" && <Register loginHandler={() => setActiveForm("login")} />}
            {activeForm === "addFirm" && showlogOut && <AddFirm />}
            {activeForm === "addProducts" && showlogOut && <AddProducts />}
            {activeForm === "Welcome" && <WelCome />}
            <div style={{ marginLeft: '100px' }}>
              {activeForm === "allProducts" && showlogOut && <AllProducts />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
