import React from 'react'

export default function UploadCsvPage() {
  return (
    <div className='container-fluid'>
      <div className='row px-2 mb-5 border py-4 rounded border-secondary'>
      <div className='col-lg-12'>
  <h4 className='mb-3'>Upload CSV Data</h4>
  <input id="file-upload" type="file" className='mt-2 mb-4' />
  <button className='btn btn-primary ml-2'>Upload</button>
</div>

        </div>
    </div>
  )
}
