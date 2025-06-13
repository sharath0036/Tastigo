import React from 'react'

const Register = () => {
    return (
        <div className="container">
            <div
                className="card mt-5"
                style={{ marginLeft: '250px', maxWidth: '500px' }}
            >
                <div className="card-header text-center">
                    <h3>Vendor Register</h3>
                </div>

                <div className="card-body">
                    <form className="row g-3">
                        <div className="col-12">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter your username"
                                required
                            />
                        </div>

                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="col-12">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
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

    )
}

export default Register
