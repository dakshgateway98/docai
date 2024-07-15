import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { uploadXrayAPI } from '../../api/genai';
import { displayErrorToast } from '../../helpers/displayToast';
import useCookie from '../../hooks/useCookie';
import { Layout } from '../../layouts';
import { setToken } from '../../api';

const Home = () => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [report, setReport] = useState('');
  const [clinicNote, setClinicNote] = useState('');
  const userDetails = useSelector(state => _.get(state, 'userAuth.userDetails', null));
  const [isLoading, setIsLoading] = useState(false)
  const [value] = useCookie('jwt', null);

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setReport('');
    } else {
      alert('Please select a valid image file.');
      event.target.value = null; 
    }
  };

  const handleUpload = async () => {
    if (selectedFile && clinicNote) {
      const formData = new FormData();
      formData.append('images', selectedFile);
      formData.append('prompt', clinicNote);
      setIsLoading(true);
      try {
        const token = userDetails?.token || "";
        token && setToken(token);
        const response = await uploadXrayAPI(formData);
        setReport(response.data);
      } catch (error) {
        console.error('Error uploading X-ray:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      displayErrorToast('Please select a file and provide clinic notes.');
    }
  };

  const handleCopyReport = () => {
    navigator.clipboard.writeText(report).then(() => {
      alert('Report copied to clipboard!');
    });
  };

  return (
    <Layout pageTitle={t('containers.home.title')}>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Upload X-ray Image </h1>
          <div className="flex flex-col md:flex-row items-center justify-around mb-6">
            <div className="mb-4 md:mb-0 md:mr-4 flex-shrink-0 w-full md:w-auto">
              <input
                type="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <textarea
                placeholder="Enter clinic notes here..."
                value={clinicNote}
                onChange={e => setClinicNote(e.target.value)}
                className="mt-4 w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={handleUpload}
                className="mt-4 w-full md:w-auto bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
              >
                Generate Report
              </button>
            </div>
            {selectedFile && (
              <div className="flex-shrink-0 w-full md:w-auto">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Preview:</h2>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="X-ray preview"
                  className="rounded-md shadow-md h-32 w-32 object-cover"
                />
              </div>
            )}
          </div>
          {report && (
            <div className="mt-4 bg-gray-100 p-4 rounded-md">
              <div className='flex justify-between w-full'>
              <h2 className="text-lg font-bold text-gray-700 mb-2">Report:</h2>
              <FontAwesomeIcon
                icon={faCopy}
                onClick={handleCopyReport}
                className="text-blue-500 hover:text-blue-600 cursor-pointer transition duration-200 w-6 h-6"
                title="Copy Report"
              />
              </div>
              <p className="text-lg text-gray-650 mb-2">{report}</p>
              
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;