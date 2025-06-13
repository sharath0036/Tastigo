import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
// import Login from '../components/forms/Login';
import Register from '../components/forms/Register';
import AddFirm from '../components/forms/AddFirm';
import AddProducts from '../components/forms/AddProducts';

const LandingPage = () => {
  return (
    <>
      <div className="LandingPage">
        <NavBar />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <SideBar />
            </div>
            <div className="col-lg-9">
              {/* <Login /> */}
              {/* <Register/> */}
              {/* <AddFirm /> */}
              <AddProducts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
