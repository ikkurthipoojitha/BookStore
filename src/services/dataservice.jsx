import axios from "axios";

const headerConfig = {
    headers : {'x-access-token':localStorage.getItem('token')}
}
export const getBookList = () =>{
    let response = 
    axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",headerConfig)
    return response
}

export const addWishList = (id) =>{
    let response = 
    axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id.product_id}`, 
    id,
    headerConfig)
    return response
}
export const getWishList = () =>{
    let response = 
    axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items`, 
    headerConfig)
    return response
}
export const deleteWishList = (obje) =>{
    let response = 
    axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${obje.cartItem_id}`, 
     headerConfig)
    return response
}
export const addToCart = (id) =>{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id.product_id}`, 
    id,
    headerConfig)
    return response
}
export const cartItemQuantity = (id,quantity) =>{
    let response = 
    axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`, 
 quantity,
    headerConfig)
    return response
}

export const getCartItem = () =>{
    let response = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items",

    headerConfig)
    return response
}

export const deleteCartItem = (ob) =>{
    let response = 
    axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${ob.cartItem_id}`,
    headerConfig)
    return response
}

export const editUser = (userObj) =>{
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`,
    userObj,
    headerConfig)
    return response
}
export const addOrder = (inputobj) =>{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`,
    inputobj,headerConfig)
    return response
}