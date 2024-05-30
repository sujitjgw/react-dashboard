import React from 'react';

export default function Dashboard (){
    return (
        <div className='container-fluid'>
          <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6 mb-4'>
          <div className="card text-center">
      <div className="card-body bg-info py-4 text-light">
        <h5 className="card-title">Sitewide Pincode</h5>
        <h4 className="card-subtitle mb-2">540</h4>
        </div>
    </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 mb-4'>
          <div className="card text-center">
      <div className="card-body bg-success py-4 text-light">
        <h5 className="card-title">Collection Pincode</h5>
        <h4 className="card-subtitle mb-2">177</h4>
        </div>
    </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 mb-4'>
          <div className="card text-center">
      <div className="card-body bg-danger py-4 text-light">
        <h5 className="card-title">Product Pincode</h5>
        <h4 className="card-subtitle mb-2">240</h4>
        </div>
    </div>
          </div>
          </div>
        </div>
      );
}
