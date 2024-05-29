import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UploadedData() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [data, setData] = useState([
    { pincode: '201301' },
    { pincode: '110092' },
    { pincode: '110055' },
    { pincode: '201506' },
    { pincode: '110085' },
    { pincode: '459874' },
    { pincode: '547896' },
    { pincode: '200446' },
    { pincode: '110059' },
  ]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const showPagination = data.length > itemsPerPage;

  return (
    <div className="container-fluid">
      <div className="col-lg-12 px-2 mb-5">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <h4 className="mb-3">Pincode Listing</h4>
          </div>
          <div className="col-lg-4">
            <input className="form-control mb-4" placeholder="Search by Pincode" />
          </div>
          <div className='row'>
<div class="d-flex align-items-start justify-content-between custom-flex-sitewide">
<div className='mb-3'><button type="button" class="btn btn-primary">Sitewide Pincode</button></div>
<div className='mb-3'><button type="button" class="btn btn-danger">Collection/Tag Specific Pincode</button></div>
<div className='mb-3'><button type="button" class="btn btn-danger">Product Specific Pincode</button></div>
</div>
</div>
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Pincode</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={index}>
                      <td>{item.pincode}</td>
                      <td>
                        <button className="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {showPagination && (
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={handlePrevPage}>
                    Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={handleNextPage}>
                    Next
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
