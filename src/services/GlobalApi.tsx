import axios from "axios";

const BASE_URL='http://localhost:7010/api'; 


export const getPost = () => {
    return axios.get(BASE_URL+'/Blog');
}

export const getPostById = (id: any) => {
    return axios.get(BASE_URL+'/Blog/'+id+'');
}

export const createPost = (formData: FormData) => {
    return axios.post(`${BASE_URL}/Blog`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
});}
