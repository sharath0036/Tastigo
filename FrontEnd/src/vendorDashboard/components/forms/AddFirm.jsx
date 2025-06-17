import React, { useState } from 'react';

const AddFirm = () => {
  const [formData, setFormData] = useState({
    firmName: '',
    area: '',
    category: [],
    region: [],
    offer: '',
    file: null,
  });

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'file' ? files[0] : value,
    }));
  };

  const handleCheckboxChange = (e, field) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginToken = localStorage.getItem('loginToken');
    const form = new FormData();

    form.append('firmName', formData.firmName);
    form.append('area', formData.area);
    form.append('offer', formData.offer);
    if (formData.file) form.append('image', formData.file);

    formData.category.forEach((item) => form.append('category', item));
    formData.region.forEach((item) => form.append('region', item));
    console.log("form", form);

    try {
      const response = await fetch(`http://localhost:9000/Firm/addFirm`, {
        method: 'POST',
        headers: { 'token': loginToken },
        body: form,
      });

      const data = await response.json();
      localStorage.setItem("firmId", data.firmId);
      setFormData({
        firmName: '',
        area: '',
        category: [],
        region: [],
        offer: '',
        file: null,
      });

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add firm. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="card mt-5" style={{ marginLeft: '250px', maxWidth: '600px' }}>
        <div className="card-header text-center"><h3>Add Firm</h3></div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {['firmName', 'area', 'offer'].map((field) => (
              <div key={field} className="mb-3">
                <label htmlFor={field} className="form-label">{field.replace(/\b\w/g, c => c.toUpperCase())}</label>
                <input type="text" className="form-control" id={field} value={formData[field]} onChange={handleChange} required />
              </div>
            ))}

            <div className="mb-3">
              <label className="form-label">Category</label>
              {['veg', 'non-veg'].map((cat) => (
                <div key={cat} className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" value={cat} checked={formData.category.includes(cat)} onChange={(e) => handleCheckboxChange(e, 'category')} />
                  <label className="form-check-label">{cat.charAt(0).toUpperCase() + cat.slice(1)}</label>
                </div>
              ))}
            </div>

            <div className="mb-3">
              <label className="form-label">Region</label>
              {['south-india', 'north-india', 'chinese', 'bakery'].map((reg) => (
                <div key={reg} className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" value={reg} checked={formData.region.includes(reg)} onChange={(e) => handleCheckboxChange(e, 'region')} />
                  <label className="form-check-label">{reg.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}</label>
                </div>
              ))}
            </div>

            <div className="mb-3">
              <label htmlFor="file" className="form-label">Upload Image</label>
              <input type="file" className="form-control" id="file" onChange={handleChange} accept="image/*" required />
            </div>

            <button type="submit" className="btn btn-success w-100">Add Firm</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFirm;
