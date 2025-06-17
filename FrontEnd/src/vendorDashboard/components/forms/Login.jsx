import React, { useState } from 'react';

const Login = ({ showWelcomeHandler }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9000/vender/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('loginToken', data.token);
        console.log(data);
        setEmail('');
        setPassword('');
        showWelcomeHandler();
        alert('Login successful');
      } else {
        alert(data.message || 'Login failed');
      }

      const venderId = data.vendorId;
      const vendorResponse = await fetch(`http://localhost:9000/vender/getVendorById/${venderId}`);
      const vendorData = await vendorResponse.json();
      if (vendorResponse.ok) {
        const vendorFirmId = vendorData.vendorFirmId;
        const vendorFrimName = vendorData.vendor.firm[0].firmName;
        localStorage.setItem("firmId", vendorFirmId);
        localStorage.setItem("firmName", vendorFrimName);
        window.location.reload();
      }

    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <div
        className="card mt-5"
        style={{ marginLeft: '250px', maxWidth: '500px' }}
      >
        <div className="card-header text-center">
          <h3>Vendor Login</h3>
        </div>

        <div className="card-body">
          <form className="row g-3" onSubmit={loginHandler}>
            <div className="col-12">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
