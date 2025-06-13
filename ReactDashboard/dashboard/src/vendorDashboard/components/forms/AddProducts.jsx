import React from 'react'

const AddProducts = () => {
    return (
        <div>
            <div className="container">
                <div
                    className="card mt-5"
                    style={{ marginLeft: '250px', maxWidth: '500px' }}
                >
                    <div className="card-header text-center">
                        <h3>Add Product</h3>
                    </div>

                    <div className="card-body">
                        <form>
                            <label htmlFor="productName" className="form-label">Product Name</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="productName"
                                placeholder="Enter product name"
                                required
                            />

                            <label htmlFor="price" className="form-label">Price</label>
                            <input
                                type="number"
                                className="form-control mb-3"
                                id="price"
                                placeholder="Enter price"
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

                            <label htmlFor="image" className="form-label">Upload Image</label>
                            <input
                                type="file"
                                className="form-control mb-3"
                                id="image"
                                accept="image/*"
                                required
                            />

                            <label htmlFor="BestSeller" className="form-label">BestSeller</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="BestSeller"
                                placeholder="Enter BestSeller"
                                required
                            />

                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea
                                className="form-control mb-4"
                                id="description"
                                placeholder="Enter product description"
                                rows="3"
                                required
                            ></textarea>

                            <button type="submit" className="btn btn-success w-100">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddProducts
