const AddFirm = () => {
  return (
    <div>
      <div className="container">
        <div
          className="card mt-5"
          style={{ marginLeft: '250px', maxWidth: '600px' }}
        >
          <div className="card-header text-center">
            <h3>Add Firm</h3>
          </div>

          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="firmName" className="form-label">Firm Name</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="firmName"
                    placeholder="Enter firm name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="area" className="form-label">Area</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="area"
                    placeholder="Enter area"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label className="form-label d-block">Category</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="veg"
                      name="category"
                      value="Veg"
                    />
                    <label className="form-check-label" htmlFor="veg">Veg</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="nonveg"
                      name="category"
                      value="Non-Veg"
                    />
                    <label className="form-check-label" htmlFor="nonveg">Non-Veg</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label d-block">Region</label>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="southIndian"
                      name="region"
                      value="South Indian"
                    />
                    <label className="form-check-label" htmlFor="southIndian">South Indian</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="northIndian"
                      name="region"
                      value="North Indian"
                    />
                    <label className="form-check-label" htmlFor="northIndian">North Indian</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="chinese"
                      name="region"
                      value="Chinese"
                    />
                    <label className="form-check-label" htmlFor="chinese">Chinese</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="bakery"
                      name="region"
                      value="Bakery"
                    />
                    <label className="form-check-label" htmlFor="bakery">Bakery</label>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="offer" className="form-label">Offer</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="offer"
                    placeholder="Enter offer"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="image" className="form-label">Upload Image</label>
                  <input
                    type="file"
                    className="form-control mb-4"
                    id="image"
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
    </div>

  )
}

export default AddFirm
