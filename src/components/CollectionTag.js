import React from 'react'

export default function CollectionTag() {
  return (
    <div className='container-fluid'>
                  <div className='row mb-3 border-bottom'>
      <div className="col-lg-8 mb-2">
            <h4 className="mb-3">Collection/Tag Specific Pincode</h4>
          </div>
          <div className="col-lg-4">
          <div className='text-end sample-btn-left-xs'>
        <button type="button" class="btn btn-info text-light">Download Sample CSV Format</button>
        </div>
          </div>
      </div>
<div className='row'>
<div class="d-flex align-items-start justify-content-between custom-flex-sitewide">
<div className='mb-3'><input type="file" className='mb-3' /><button className='btn btn-success'>Upload</button></div>
<div className='mb-3'><button type="button" class="btn btn-primary">Download Current Data</button></div>
<div className='mb-3'><button type="button" class="btn btn-danger">Delete Current Data</button></div>
</div>
</div>

  </div>
  )
}
