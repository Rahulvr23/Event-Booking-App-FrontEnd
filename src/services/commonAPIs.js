// import axios from 'axios'
// export const commonAPIs=async(httpRequest,url,reqBody,reqHeader)=>{
//     const reqConfig={
//         method:httpRequest,
//         url,
//         data:reqBody,
//         headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
//     }
//     return axios(reqConfig).then((response)=>{
//         return response
//     })
//     .catch((error)=>{
//         return error
//     })
// }
// services/commonAPIs.js
import axios from 'axios';

export const commonAPIs = async (httpRequest, url, reqBody, reqHeader) => {
    const reqConfig = {
        method: httpRequest,
        url,
        data: reqBody,
        headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
    };

    try {
        const response = await axios(reqConfig);
        return response;
    } catch (error) {
        return error;
    }
};
