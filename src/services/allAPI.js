// import{commonAPIs} from "../services/commonAPIs";
// import{baseUrl} from './baseUrl'
// export const registerAPI=async(users)=>{
//     return await commonAPIs("post",`${baseUrl}/register`,users,"")

// }
// services/registerAPI.js
import { commonAPIs } from "./commonAPIs";
import { baseUrl } from './baseUrl';

export const registerAPI = async (users) => {
    try {
        const response = await commonAPIs("post", `${baseUrl}/register`, users, "");
        return response;
    } catch (error) {
        return error;
    }
};

//login api
export const loginAPI=async(user)=>{
    try {
        const response=await commonAPIs("post",`${baseUrl}/login`,user,"")
        return response
    } 
    catch (error) 
    {
        return error
    }
}
export const AdminloginAPI=async(admin)=>{
    try {
         const response =await commonAPIs("post",`${baseUrl}/adminLogin`,admin,"")
         return response
    } catch (error) {
        return error
    }

}
export const addEventAPI=async(reqBody,reqHeader)=>{
    try {
        const response=await commonAPIs("post",`${baseUrl}/addEvent`,reqBody,reqHeader)
        return response
    } catch (error) {
        return error
    }
}
export const getMusicAPI=async()=>{
    try {
        const response=await commonAPIs("get",`${baseUrl}/getmusic`,"","")
        return response
    } catch (error) {
        return error
    }
}

export const getArtAPI=async()=>{
    try {
        const response=await commonAPIs("get",`${baseUrl}/getarts`,"","")
        return response
    } catch (error) {
        return error
    }
}


export const getAllEventAPI=async()=>{
try {
    const response=await commonAPIs("get",`${baseUrl}/getallEvent`,"","")
    return response
} catch (error) {
    return error
}
}

export const UpdateEventAPI=async(id,reqBody,reqHeader)=>{
 try {
    const response=await commonAPIs("put",`${baseUrl}/update/${id}`,reqBody,reqHeader)
    return response
 } catch (error) {
    return error
 }

}

export const deleteAPI=async(id,reqHeader)=>{
    try {
        const response=await commonAPIs("delete",`${baseUrl}/delete/${id}`,{},reqHeader)
        return response
    } catch (error) {
        return error
    }
}

export const getTicketAPI=async()=>{
    try {
        const  response=await commonAPIs("get",`${baseUrl}/allBookings`,"","")
        return response
    } catch (error) {
        return error
    }
}
export const bookAPI=async(id,reqBody,reqHeader)=>{
    try {
        const response=await commonAPIs("post",`${baseUrl}/bookTticket/${id}`,reqBody,reqHeader)
        return response
        
    } catch (error) {
        return error
        
    }

}
export const userBookingAPI=async(reqBody)=>{
    try {
       
        const response=await commonAPIs("get",`${baseUrl}/userbookings/${reqBody}`,"","")
        return response
    } catch (error) {
        return error
    }
}

export const paymentsuccessAPI=async(userId )=>{
    try {
        const response=await commonAPIs("post",`${baseUrl}/paymentsuccess`,userId ,"")
        return response
    } catch (error) {
        return error
    }
}