import React from 'react';

export default function TextChangesPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="row">
              <div className="col-md-4">
                <div>
                  <label htmlFor="deliveryInput" className="form-label">
                    <strong>Text for Delivery Text</strong>
                  </label>
                </div>
              </div>
              <div className="col-md-8">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="deliveryInput"
                    placeholder="Yes, we can deliver product at your pin code."
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div>
                  <label htmlFor="notDeliveryInput" className="form-label">
                    <strong>Text for Not Delivery Text</strong>
                  </label>
                </div>
              </div>
              <div className="col-md-8">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="notDeliveryInput"
                    placeholder="Sorry, we can't deliver product at your pin code."
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                
              </div>
              <div className="col-md-8">
              <button type="submit" className="btn btn-danger">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
