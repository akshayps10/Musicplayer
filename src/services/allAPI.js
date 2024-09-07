import commonAPI from "./commonAPI";
import serverUrl from "./baseURL";
//upload video
export const uploadVideoAPI=async (uploadVideo)=>{
    return await commonAPI("POST",`${serverUrl}/allVideos`,uploadVideo)
}
// get all videos must called by view component
export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}/allVideos`,"")
}                          
// store watch history Api must called by Videocard
export const StoreHistoryAPI = async (videodetails)=>{
    return await commonAPI("POST",`${serverUrl}/history`,videodetails)
}
// get history api must called history component
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}/history`,"")
}
// remove history
export const removeHistoryAPI = async (historyId)=>{
    return await commonAPI("DELETE",`${serverUrl}/history/${historyId}`,{})
}
// remove video api called by videocard component
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${serverUrl}/allVideos/${videoId}`,{})
}
// add category
export const addCategoryAPI=async (categoryDetails)=>{
    return await commonAPI("POST",`${serverUrl}/categories`,categoryDetails)
}
// getallcategory
export const getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}/categories`,"")
}
// REMOVE API
export const removeCategoryAPI = async (categoryId) => {
    return await commonAPI("DELETE", `${serverUrl}/categories/${categoryId}`, {}); 
};
