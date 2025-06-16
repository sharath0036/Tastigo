import { useState } from 'react';
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
            <div style={{ marginLeft: '200px' }}>
              <AllProducts />
            </div>
            {activeForm === "login" && <Login showWelcomeHandler={() => setActiveForm("Welcome")} />}
            {activeForm === "register" && <Register loginHandler={() => setActiveForm("login")} />}
            {activeForm === "addFirm" && <AddFirm />}
            {activeForm === "addProducts" && <AddProducts />}
            {activeForm === "Welcome" && <WelCome />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
