import React from 'react'

const AddProducts = () => {
    return (
        <div>
            <div className="container">
                <div
                    className="card mt-5"
                    style={{ marginLeft: '250px', maxWidth: '600px' }}
                >
                    <div className="card-header text-center">
                        <h3>Add Product</h3>
                    </div>

                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="productName" className="form-label">Product Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="productName"
                                        placeholder="Enter product name"
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        placeholder="Enter price"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="category"
                                        placeholder="Enter category"
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="image" className="form-label">Upload Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        accept="image/*"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="BestSeller" className="form-label">BestSeller</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="BestSeller"
                                        placeholder="Enter BestSeller"
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        placeholder="Enter product description"
                                        rows="3"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-success w-100">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AddProducts
