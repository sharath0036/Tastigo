import React, { useState } from 'react'

const AddProducts = () => {
    const [productname, setproductname] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState([]);
    const [image, setImage] = useState(null);
    const [bestSeller, setBestSeller] = useState(false);
    const [description, setDescription] = useState('');

    const handleCategoryChange = (event) => {
        const value = event.target.value;
        if (category.includes(value)) {
            setCategory(category.filter(item => item !== value));
        } else {
            setCategory([...category, value]);
        }
    };

    const handleImageUpload = (event) => {
        const value = event.target.files[0];
        setImage(value);
    };

    const handleBestSellerChange = (event) => {
        const value = event.target.value === 'true';
        setBestSeller(value);
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('productname', productname);
            formData.append('price', price);
            formData.append('image', image);
            formData.append('description', description);

            category.forEach(value => {
                formData.append('category', value);
            });
            const firmId = localStorage.getItem('firmId');

            const response = fetch(`http://localhost:9000/Product/addProducts/${firmId}`, {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                alert("Product added successfully!");
            }
            
            setproductname('');
            setPrice('');
            setCategory([]);
            setImage(null);
            setBestSeller(false);
            setDescription('');

        } catch (error) {
            console.error("Error adding product:", error);
            alert("Failed to add product. Please try again.");
        }
    }
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
                        <form onSubmit={handleAddProduct}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="productname" className="form-label">Product Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="productname"
                                        placeholder="Enter product name"
                                        value={productname}
                                        onChange={e => setproductname(e.target.value)}
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
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label d-block">Category</label>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="categoryVeg"
                                            name="category"
                                            value="veg"
                                            checked={category.includes('veg')}
                                            onChange={handleCategoryChange}
                                        />
                                        <label className="form-check-label" htmlFor="categoryVeg">
                                            Veg
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="categoryNonVeg"
                                            name="category"
                                            value="non-veg"
                                            checked={category.includes('non-veg')}
                                            onChange={handleCategoryChange}
                                        />
                                        <label className="form-check-label" htmlFor="categoryNonVeg">
                                            Non-Veg
                                        </label>
                                    </div>
                                </div>


                                <div className="col-md-6 mb-3">
                                    <label htmlFor="image" className="form-label">Upload Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label d-block">BestSeller</label>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="BestSeller"
                                            id="BestSellerYes"
                                            value="true"
                                            onChange={handleBestSellerChange}
                                            checked={bestSeller === true}
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="BestSellerYes">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="BestSeller"
                                            id="BestSellerNo"
                                            value="false"
                                            onChange={handleBestSellerChange}
                                            checked={bestSeller === false}
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="BestSellerNo">
                                            No
                                        </label>
                                    </div>
                                </div>


                                <div className="col-md-6 mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        placeholder="Enter product description"
                                        rows="3"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
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
