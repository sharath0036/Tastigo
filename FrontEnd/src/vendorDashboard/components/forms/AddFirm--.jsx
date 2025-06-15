import React, { useState } from 'react';

const AddFirm = () => {
  const [firmName, setfirmName] = useState('');
  const [area, setarea] = useState('');
  const [category, setcategory] = useState([]);
  const [region, setregion] = useState([]);
  const [offer, setoffer] = useState('');
  const [file, setfile] = useState(null);

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    if (category.includes(value)) {
      setcategory(category.filter(item => item !== value));
    } else {
      setcategory([...category, value]);
    }
  };

  const handleRegionChange = (event) => {
    const value = event.target.value;
    if (region.includes(value)) {
      setregion(region.filter(item => item !== value));
    } else {
      setregion([...region, value]);
    }
  };

  const handleImageUpload = (event) => {
    const value = event.target.files[0];
    setfile(value);
  };

  const handlerAddFirmSubmit = async (e) => {
    e.preventDefault();
    const loginToken = localStorage.getItem('loginToken');
    const formData = new FormData();

    formData.append('firmName', firmName);
    formData.append('area', area);
    formData.append('offer', offer);
    if (file) formData.append('image', file);

    category.forEach(value => {
      formData.append('category', value);
    });

    region.forEach(value => {
      formData.append('region', value);
    });

    try {
      const response = await fetch(`http://localhost:9000/Firm/addFirm`, {
        method: 'POST',
        headers: {
          'token': `${loginToken}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        alert("Firm Created Successfully");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to add firm. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="card mt-5" style={{ marginLeft: '250px', maxWidth: '600px' }}>
        <div className="card-header text-center">
          <h3>Add Firm</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handlerAddFirmSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firmName" className="form-label">Firm Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firmName"
                  value={firmName}
                  onChange={(e) => setfirmName(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="area" className="form-label">Area</label>
                <input
                  type="text"
                  className="form-control"
                  id="area"
                  value={area}
                  onChange={(e) => setarea(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label d-block">Category</label>
                {['veg', 'non-veg'].map((cat) => (
                  <div className="form-check form-check-inline" key={cat}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={cat}
                      value={cat}
                      checked={category.includes(cat)}
                      onChange={handleCategoryChange}
                    />
                    <label className="form-check-label" htmlFor={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </label>
                  </div>
                ))}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label d-block">Region</label>
                {['south-india', 'north-india', 'chinese', 'bakery'].map((reg) => (
                  <div className="form-check form-check-inline" key={reg}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={reg}
                      value={reg}
                      checked={region.includes(reg)}
                      onChange={handleRegionChange}
                    />
                    <label className="form-check-label" htmlFor={reg}>
                      {reg.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="offer" className="form-label">Offer</label>
                <input
                  type="text"
                  className="form-control"
                  id="offer"
                  value={offer}
                  onChange={(e) => setoffer(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="image" className="form-label">Upload Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  onChange={handleImageUpload}
                  accept="image/*"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success w-100">Add Firm</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFirm;
