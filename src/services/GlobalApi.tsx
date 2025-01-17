import axios from "axios";


// const BASE_URL='http://localhost:1337/api';
const BASE_URL='http://localhost:7010/api'; 

const getPost = () => axios.get(BASE_URL + '/Blog');
const getPostById= (id: any)  => axios.get(BASE_URL+'/Blog/'+id+'');

export default{
    getPost,
    getPostById
}