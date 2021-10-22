import axios from 'axios'
const baseURL = "/api/"

const getAll = () => {
    return axios.get(baseURL + "products")
                .then(response => response.data)
}
const getProduct = (id) => {
    return axios.get("/api/products/" + id)
                .then(response => response.data)
                .then(data => console.log("got it!", data))
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

const signUp = ({username, password, name}) => {
    return axios.post(baseURL + 'sign-up', {username, password, name})
    .then(response => response.data)
}

const logout = () => {
    return axios.get("/api/logout")
                .then(response => console.log("logged out!"))
}

const getCurrentUser = () => {
    return axios.get("/api/getUser")
                .then(response => response.data)
}
const productService = {getAll, getProduct, getCart, addtoCart, updateCart, removeCart, login, signUp, logout, getCurrentUser}

export default productService;


