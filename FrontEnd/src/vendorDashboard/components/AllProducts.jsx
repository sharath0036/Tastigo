import React, { useState, useEffect } from 'react';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    const productHandler = async () => {
        const firmId = localStorage.getItem("firmId");
        try {
            const response = await fetch(`http://localhost:9000/Product/getProducts/${firmId}`);
            const newProductData = await response.json();
            setProducts(newProductData.products);
        } catch (error) {
            console.error(error);
            alert('Failed to fetch products');
        }
    };

    useEffect(() => {
        productHandler();
    }, []);

    const deleteProductHandler = async (productId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this product?');
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:9000/Product/deleteProduct/${productId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert("Product deleted successfully.");
                productHandler();
            }
        } catch (error) {
            console.error(error);
            alert('Failed to delete product');
        }
    };

    return (
        <div className="mt-4">
            <h4>All Products</h4>
            {!products ? (
                <p className="text-center text-muted">No Products Added</p>
            ) : (
                <div className="row">
                    {products.map((item) => (
                        <div className="col-md-4 col-sm-6 mb-4" key={item._id}>
                            <div className="card h-100 shadow-sm">
                                {item.image && (
                                    <img
                                        src={`http://localhost:9000/uploads/${item.image}`}
                                        className="card-img-top"
                                        alt={item.productname}
                                        style={{ height: '130px', width:'80px', objectFit: 'cover' }}
                                    />
                                )}
                                <div className="card-body">
                                    <h5 className="card-title">{item.productname}</h5>
                                    <p className="card-text">Price: ₹{item.price}</p>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteProductHandler(item._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
};

export default AllProducts;
