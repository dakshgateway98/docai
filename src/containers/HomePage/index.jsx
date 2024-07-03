import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../layouts';

const Home = () => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [report, setReport] = useState('');

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
    setReport(''); // Clear the report when a new file is selected
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Simulate an API call to get the report
      setTimeout(() => {
        setReport('This is a sample report of the uploaded X-ray image.');
      }, 2000);
    }
  };

  const handleCopyReport = () => {
    navigator.clipboard.writeText(report).then(() => {
      alert('Report copied to clipboard!');
    });
  };

  return (
    <Layout pageTitle={t('containers.home.title')}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">X-ray Image Upload</h1>
          <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="mb-4 md:mb-0 md:mr-4 flex-shrink-0 w-full md:w-auto">
              <input
                type="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <button
                onClick={handleUpload}
                className="mt-4 w-full md:w-auto bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
              >
                Upload
              </button>
            </div>
            {selectedFile && (
              <div className="flex-shrink-0  w-full md:w-auto">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Selected File:</h2>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="X-ray preview"
                  className="rounded-md shadow-md h-32 w-32"
                />
              </div>
            )}
          </div>
          {report && (
            <div className="mt-4 bg-gray-100 p-4 rounded-md">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Report:</h2>
              <p className="text-sm text-gray-600 mb-2">{report}</p>
              <button
                onClick={handleCopyReport}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
              >
                Copy Report
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
