import React from 'react'

const NavBar = ({ loginHandler, registerHandler }) => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <h3>Tastigo</h3> </ul>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2" onClick={loginHandler}>Login</button>
            <button type="button" className="btn btn-warning" onClick={registerHandler}>Register</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
