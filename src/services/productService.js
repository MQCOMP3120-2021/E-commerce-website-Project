import axios from 'axios'
const baseURL = "http://localhost:3001/api/"


const getAll = () => {
    return axios.get(baseURL + "products")
                .then(response => response.data)
}

const getCart = () => {
    return axios.get(baseURL + "cart")
                .then(response => response.data)
}
const addtoCart = (newItem) => {
    return axios.post(baseURL + "cart", newItem)
                .then((response) => response.data)
}

const updateCart = (thing) => {
    return axios.put(baseURL + "cart" + thing.id, thing)
                .then((response) => response.data)
}

const removeCart = (thing) => {
    return axios.delete(baseURL + "cart" + thing.id)
                .then((response) => response.data)
}

const login = ({username, password}) => {
    return axios.post(baseURL + 'login', {username, password})
    .then(response => response.data)
}

const productService = {getAll, getCart, addtoCart, updateCart, removeCart, login}

export default productService;


