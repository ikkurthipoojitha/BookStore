import axios from "axios";

export const login = (loginObj)=>{
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login",loginObj)
    return response
    console.log("login in process")
}
export const sign = (signupObj)=>{
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",signupObj)
    return response
    console.log("login in process")
}