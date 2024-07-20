import { apiEndPoint } from './apiEndPoint';
import client, { removeToken } from './index';
import { handleError } from './index';

export const uploadXrayAPI = async postData => {
  try {
    const res = await client.post(apiEndPoint.GEN_AI_X_RAY_UPLOAD, postData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    return res.data;
  } catch (error) {
    return handleError(error);
  }
};


export const getReportOptionsAPI = async () => {
  try {
    const res = await client.get(apiEndPoint.REPORT_OPTIONS);
    return res.data;
  } catch (error) {
    return handleError(error);
  }
};