import React,{useState} from "react";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Signup from "../signup/signup";
import Login from "../../login/login";


const useStyle = makeStyles({
    container: {
        width: '100vw',
        height: '100vh',
        border: '1px solid grey',
        backgroundColor: 'grey',
        position: 'relative',

    },
    logocontainer: {
        width: '250px',
        height: '295px',
        position:'relative',
        top: '150px',
        left: '350px',
        border: '1px solid green',
        backgroundColor: 'white',
        borderRadius:'20px 0px 0px 20px',
    },
    logodiv: {
        width: '80%',
        height: '80%',
        marginLeft: '25px',
        marginTop:'10px',

       //border: '1px solid red',
        // position:'absolute',
    },
    imgdiv: {
        width: '70%',
        height: '80%',
        position: 'relative',
    },
    textspan: {
        fontSize: '15px',
        fontWeight: 'stronger',
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        logocontainer:{
            display:'none',
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        logocontainer:{
            display:'none',
        },
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        logocontainer: {
            width: '250px',
            height: '285px',
            position:'relative',
            top: '120px',
            left: '180px',
            border: '1px solid grey',
            backgroundColor: 'white',
            borderRadius:'20px 0px 0px 20px',
        },
        logodiv: {
            width: '80%',
            height: '80%',
            marginLeft: '25px',
            marginTop:'10px',
    
           //border: '1px solid red',
            // position:'absolute',
        },
        imgdiv: {
            width: '70%',
            height: '80%',
            position: 'relative',
        },
        textspan: {
            fontSize: '15px',
            fontWeight: 'stronger',
        },
    },


})

function Lander() {
    const [toggle,setToggle] = useState(false)
    const classes = useStyle();

    const listenToLogin = () =>{
        setToggle(true)
    }
    const listenToSignup = () =>{
        setToggle(false)
    }

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.logocontainer}>
                    <div className={classes.logodiv}>
                    <img className={classes.imgdiv} src={require("../bslogo.png")} alt="img" style={{width:'95%',height:'auto',borderRadius:'50%',top:'25px'}}/>
                      
                    </div>
                    <span className={classes.textspan}>ONLINE BOOK SHOPPING</span>
                </div>
            </div>
            <div>
                {
                    toggle ?<Signup listenToSignup = {listenToSignup}/> : 
                    <Login listenToLogin = {listenToLogin}/>
                }
            </div>
        </div>

    )
}
export default Lander