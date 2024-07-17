import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Layout } from '../../layouts';
import { setToken } from '../../api';
import { uploadXrayAPI } from '../../api/genai';
import ChatGPTOutput from '../../common/ChatGPTOutput';
import { displayErrorToast } from '../../helpers/displayToast';
import useCookie from '../../hooks/useCookie';
import ImageModal from './../../common/ImageModal'; 

const Home = () => {
  const { t } = useTranslation();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [report, setReport] = useState('');
  const [clinicNote, setClinicNote] = useState('');
  const userData = useSelector(state => _.get(state, "user.userData", null));
  const [isLoading, setIsLoading] = useState(false);
  const [value] = useCookie('jwt', null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleFileChange = event => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(file => file.type.startsWith('image/'));
    if (validFiles.length) {
      setSelectedFiles(validFiles);
      setReport('');
    } else {
      alert('Please select valid image files.');
      event.target.value = null;
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length && clinicNote) {
      const formData = new FormData();
      selectedFiles.forEach(file => formData.append('images', file));
      formData.append('prompt', clinicNote);
      setIsLoading(true);
      try {
        const token = userData?.token || "";
        token && setToken(token);
        const response = await uploadXrayAPI(formData);
        setReport(response.data);
      } catch (error) {
        console.error('Error uploading X-ray:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      displayErrorToast('Please select files and provide clinic notes.');
    }
  };

  const handleCopyReport = () => {
    navigator.clipboard.writeText(report);
  };

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Upload X-ray Images</h1>
          <div className="flex flex-col md:flex-row items-center justify-around mb-6">
            <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <input
                type="file"
                multiple
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
                className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
              >
                {isLoading ? 'Uploading...' : 'Generate Report'}
              </button>
            </div>
            {selectedFiles.length > 0 && (
              <div className="flex flex-col w-full md:w-1/2 items-center">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Preview:</h2>
                <div className="grid grid-cols-2 gap-4">
                  {selectedFiles.map((file, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(file)}
                      alt="X-ray preview"
                      className="rounded-md shadow-md h-32 w-32 object-cover mb-4 cursor-pointer"
                      onClick={() => openModal(URL.createObjectURL(file))}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          {report && (
            <div className="mt-4 bg-gray-100 p-4 rounded-md">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-700">Report:</h2>
                <FontAwesomeIcon
                  icon={faCopy}
                  onClick={handleCopyReport}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer transition duration-200 w-6 h-6"
                  title="Copy Report"
                />
              </div>
              <p className="text-lg font-normal text-black-650 mt-2 break-words">
                <ChatGPTOutput text={report} />
              </p>
            </div>
          )}
        </div>
      </div>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageSrc={modalImage}
      />
    </Layout>
  );
};

export default Home;
