import React from 'react'

const AddFirm = () => {
    return (
        <div>
            <div className="container">
                <div
                    className="card mt-5"
                    style={{ marginLeft: '250px', maxWidth: '500px' }}
                >
                    <div className="card-header text-center">
                        <h3>Add Firm</h3>
                    </div>

                    <div className="card-body">
                        <form>
                            <label htmlFor="firmName" className="form-label">Firm Name</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="firmName"
                                placeholder="Enter firm name"
                                required
                            />

                            <label htmlFor="area" className="form-label">Area</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="area"
                                placeholder="Enter area"
                                required
                            />

                            <label htmlFor="category" className="form-label">Category</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="category"
                                placeholder="Enter category"
                                required
                            />

                            <label htmlFor="region" className="form-label">Region</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="region"
                                placeholder="Enter region"
                                required
                            />

                            <label htmlFor="offer" className="form-label">Offer</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="offer"
                                placeholder="Enter offer"
                                required
                            />

                            <label htmlFor="image" className="form-label">Upload Image</label>
                            <input
                                type="file"
                                className="form-control mb-4"
                                id="image"
                                accept="image/*"
                                required
                            />

                            <button type="submit" className="btn btn-success w-100">Add Firm</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddFirm
