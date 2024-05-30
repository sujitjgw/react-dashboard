import { useState, React } from 'react';

export default function SiteWidePinCode() {

  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type === "text/csv" || selectedFile.name.endsWith('.csv')) {
        setFile(selectedFile);
      } else {
        console.log('Selected file is not a CSV.');
        alert('Please select a CSV file.');
        setFile(null); // Reset the file state if not CSV
      }
    } else {
      console.log('No file selected');
    }
  }
  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('csvFile', file);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_SITE_URL}/csv`, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const result = await response.text();
        alert(result);
      } else {
        const errorText = await response.text();
        throw new Error(`Failed to upload file: ${errorText}`);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  };

  const deleteSitewidePin = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_SITE_URL}/sitewide-pincode-delete`, {
        method: "POST"
      });
      const data = await response.json();
      alert(data.message)
    } catch (error) {
      alert('error in deleting sitewide data')
    }
  }

  const downloadSitewidePin = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_SITE_URL}/sitewide-pincode-download`, {
        method: 'GET', // Assuming the endpoint just needs a GET request
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // The response should be treated as a blob if it's a file
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'sitewidePincode.csv'); // Specify the filename to download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading sitewide pincode data:', error);
      alert('Error in downloading sitewide pincode data');
    }
  };


  return (
    <div className='container-fluid'>
      <div className='row mb-3'>
        <h4 class='mb-4 border-bottom pb-3'>Sitewide Pincode</h4>
        <div className='text-end sample-btn-left-xs'>
          <button type="button" class="btn btn-info">Download Sample CSV Format</button>
        </div>
      </div>
      <div className='row'>
        <div class="d-flex align-items-start justify-content-between custom-flex-sitewide">
          <div className='mb-3'><input type="file" className='mb-3' onChange={handleFileChange} /><button className='btn btn-success' onClick={handleUpload}>Upload</button></div>
          <div className='mb-3'><button type="button" class="btn btn-primary" onClick={downloadSitewidePin}>Download Current Data</button></div>
          <div className='mb-3'><button type="button" class="btn btn-danger" onClick={deleteSitewidePin}>Delete Current Data</button></div>
        </div>
      </div>

    </div>
  )
}
