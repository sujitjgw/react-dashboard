import React from 'react';

export default function Dashboard (){
    return (
        <div className='container-fluid'>
          <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-4'>
          <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Sitewide Pincode</h5>
        <h6 className="card-subtitle mb-2 text-muted">540</h6>
        </div>
    </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4'>
          <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Collection Pincode</h5>
        <h6 className="card-subtitle mb-2 text-muted">177</h6>
        </div>
    </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4'>
          <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Product Pincode</h5>
        <h6 className="card-subtitle mb-2 text-muted">240</h6>
        </div>
    </div>
          </div>
          </div>
        </div>
      );
}
