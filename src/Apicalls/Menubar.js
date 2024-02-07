import instance from "./Axiosinstance";


export const GetAllMenus = async()=>{
    try {
        const response = await instance.get('menu/get-menu')
        return response.data;
    } catch (error) {
        return error.response.data
    }
}