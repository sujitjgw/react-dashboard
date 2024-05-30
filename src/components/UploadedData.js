import React, { useState } from 'react';

export default function UploadedData() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [selectedTab, setSelectedTab] = useState('sitewide');

  const sitewideData = [
    { pincode: '201301' },
    { pincode: '110092' },
    { pincode: '110055' },
    { pincode: '201506' },
    { pincode: '110085' },
    { pincode: '459874' },
    { pincode: '547896' },
    { pincode: '200446' },
    { pincode: '110059' },
  ];

  const collectionTagData = [
    { tag: 'cake', pincode: '201301' },
    { tag: 'cake', pincode: '110092' },
    { tag: 'cake', pincode: '110055' },
    { tag: 'cake', pincode: '201506' },
    { tag: 'shirt', pincode: '110085' },
    { tag: 'shirt', pincode: '459874' },
    { tag: 'shirt', pincode: '547896' },
    { tag: 'cake', pincode: '200446' },
    { tag: 'cake', pincode: '110059' },
  ];

  const productSpecificData = [
    { sku: 'd4110055', pincode: '201301' },
    { sku: 'ddii44', pincode: '110092' },
    { sku: 'PZ548', pincode: '110055' },
    { sku: 'Uye55', pincode: '201506' },
    { sku: 'UYY693', pincode: '110085' },
    { sku: 'PZ548', pincode: '459874' },
    { sku: 'Uye55', pincode: '547896' },
    { sku: 'UYY693', pincode: '200446' },
    { sku: 'd4110055', pincode: '110059' },
  ];

  const dataMap = {
    sitewide: sitewideData,
    collectionTag: collectionTagData,
    productSpecific: productSpecificData,
  };

  const data = dataMap[selectedTab];

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
            <h4 className="mb-3">Uploaded Data</h4>
          </div>
          <div className="col-lg-4">
            <input className="form-control mb-4" placeholder="Search by Pincode" />
          </div>
          <div className="col-lg-12 mb-3">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="sitewide-tab"
                  data-bs-toggle="tab"
                  href="#sitewide"
                  role="tab"
                  aria-controls="sitewide"
                  aria-selected="true"
                  onClick={() => {
                    setSelectedTab('sitewide');
                    setCurrentPage(1);
                  }}
                >
                  Sitewide Pincode
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="collectionTag-tab"
                  data-bs-toggle="tab"
                  href="#collectionTag"
                  role="tab"
                  aria-controls="collectionTag"
                  aria-selected="false"
                  onClick={() => {
                    setSelectedTab('collectionTag');
                    setCurrentPage(1);
                  }}
                >
                  Collection/Tag Specific Pincode
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="productSpecific-tab"
                  data-bs-toggle="tab"
                  href="#productSpecific"
                  role="tab"
                  aria-controls="productSpecific"
                  aria-selected="false"
                  onClick={() => {
                    setSelectedTab('productSpecific');
                    setCurrentPage(1);
                  }}
                >
                  Product Specific Pincode
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-12">
            <div className="tab-content" id="myTabContent">
              <div
                className={`tab-pane fade show ${selectedTab === 'sitewide' ? 'active' : ''}`}
                id="sitewide"
                role="tabpanel"
                aria-labelledby="sitewide-tab"
              >
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
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className={`tab-pane fade ${selectedTab === 'collectionTag' ? 'show active' : ''}`}
                id="collectionTag"
                role="tabpanel"
                aria-labelledby="collectionTag-tab"
              >
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Product Tag</th>
                        <th>Pincode</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((item, index) => (
                        <tr key={index}>
                          <td>{item.tag}</td>
                          <td>{item.pincode}</td>
                          <td>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className={`tab-pane fade ${selectedTab === 'productSpecific' ? 'show active' : ''}`}
                id="productSpecific"
                role="tabpanel"
                aria-labelledby="productSpecific-tab"
              >
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Product SKU</th>
                        <th>Pincode</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((item, index) => (
                        <tr key={index}>
                          <td>{item.sku}</td>
                          <td>{item.pincode}</td>
                          <td>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
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
