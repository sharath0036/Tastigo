import React from 'react';

const SideBar = ({ addFirmHandler, addProductsHandler }) => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: '280px', height: '87vh' }}>

            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item" onClick={addFirmHandler}>
                    <a href="#" className="nav-link active" aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use href="#home" />
                        </svg>
                        Add Firm
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis" onClick={addProductsHandler}>
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use href="#speedometer2" />
                        </svg>
                        Add Product
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use href="#table" />
                        </svg>
                        All Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use href="#grid" />
                        </svg>
                        User Details
                    </a>
                </li>

            </ul>
            <hr />

        </div>
    );
};

export default SideBar;
