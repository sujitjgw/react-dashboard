import React from 'react';

export default function Dashboard (){
    return (
        <div className='container-fluid'>
          <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-4'>
          <div className="card text-center">
      <div className="card-body bg-info py-5 text-light">
        <h5 className="card-title">Sitewide Pincode</h5>
        <h3 className="card-subtitle mb-2">540</h3>
        </div>
    </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4'>
          <div className="card text-center">
      <div className="card-body bg-success py-5 text-light">
        <h5 className="card-title">Collection Pincode</h5>
        <h3 className="card-subtitle mb-2">177</h3>
        </div>
    </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4'>
          <div className="card text-center">
      <div className="card-body bg-danger py-5 text-light">
        <h5 className="card-title">Product Pincode</h5>
        <h3 className="card-subtitle mb-2">240</h3>
        </div>
    </div>
          </div>
          </div>
        </div>
      );
}
