import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Login from '../components/forms/Login';
import Register from '../components/forms/Register';
import AddFirm from '../components/forms/AddFirm';
import AddProducts from '../components/forms/AddProducts';

const LandingPage = () => {

  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isAddFirm, setIsAddFirm] = useState(false);
  const [isAddProducts, setIsAddProducts] = useState(false);

  const loginHandler = () => {
    setIsLogin(true);
    setIsRegister(false);
    setIsAddFirm(false);
    setIsAddProducts(false);
  }

  const registerHandler = () => {
    setIsRegister(true);
    setIsLogin(false);
    setIsAddFirm(false);
    setIsAddProducts(false);
  }

  const addFirmHandler = () => {
    setIsLogin(false);
    setIsRegister(false);
    setIsAddFirm(true);
    setIsAddProducts(false);
  }
  const addProductsHandler = () => {
    setIsLogin(false);
    setIsRegister(false);
    setIsAddFirm(false);
    setIsAddProducts(true);
  }
  return (
    <>
      <div className="LandingPage">
        <NavBar loginHandler={loginHandler} registerHandler={registerHandler} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <SideBar addFirmHandler={addFirmHandler} addProductsHandler={addProductsHandler} />

            </div>
            <div className="col-lg-9">
              {/* Uncomment the following lines to enable login and register forms */}
              {isLogin && <Login />}
              {isRegister && <Register />}
              {/* <Register/> */}
              {isAddFirm && <AddFirm />}
              {isAddProducts && <AddProducts />}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
