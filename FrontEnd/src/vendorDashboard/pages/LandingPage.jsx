import { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Login from '../components/forms/Login';
import Register from '../components/forms/Register';
import AddFirm from '../components/forms/AddFirm';
import AddProducts from '../components/forms/AddProducts';

const LandingPage = () => {
  const [activeForm, setActiveForm] = useState(null);

  return (
    <div className="LandingPage">
      <NavBar
        loginHandler={() => setActiveForm("login")}
        registerHandler={() => setActiveForm("register")}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideBar
              addFirmHandler={() => setActiveForm("addFirm")}
              addProductsHandler={() => setActiveForm("addProducts")}
            />
          </div>
          <div className="col-lg-9">
            {activeForm === "login" && <Login />}
            {activeForm === "register" && <Register />}
            {activeForm === "addFirm" && <AddFirm />}
            {activeForm === "addProducts" && <AddProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
