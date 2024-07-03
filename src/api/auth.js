import client, { removeToken } from "./index";
import { apiEndPoint } from "./apiEndPoint";
import { handleError } from "./index";

export const signInAPI = async (postData) => {
    removeToken();
    const res = await client.post(apiEndPoint.LOGIN, postData);
    return res.data;
};
