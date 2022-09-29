
import React,{useState} from "react";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { login } from "../services/userservice";
import Dashboard from "../components/dashboard/dashboard";
import { useNavigate } from "react-router-dom";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle = makeStyles({
       
    logincontainer: {
        width: '300px',
        height: '350px',
        // marginTop: '0px',
        // top: '125px',
        // marginLeft: '600px',
        // border: '1px solid green',
        position: 'absolute',
        top:'130px',
        left:'600px',
        boxShadow:' 2px 1px 2px 1px grey',
        borderRadius:'20px',
        backgroundColor: 'white',
        zIndex:'50',
    },
    buttoncontainer: {
        width: '100%',
        height: '70px',
        //border: '1px solid  blue',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textfieldcontainer:{
        width: '100%',
        height:'60px',
        //border:'1px solid black',

    },
    emailtext:{
        color:'black',
    },
    loginbutton:{
        width:'68%',
        height:'50px',
        position:'relative',
       // top:'2px',
        left:'45px',
       // textAlign:'center',
        display:'flex',
        //border:'1px solid black',
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:'10px',
         
    },
    orclass:{
        width:'100%',
        height:'50px',
        position:'relative',
        top:'2px',
        //border:'1px solid black',
    },
    mediabutton:{
        width:'100%',
        height:'35px',
        display:'flex',
        flexDirection:'row',
        //border: '1px solid  blue',
        position:'relative',
        top:'15px',
        justifyContent: 'space-evenly',
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        logincontainer:{
            width: '220px',
            height: '300px',
            position: 'absolute',
            top:'70px',
            left:'120px',
            boxShadow:' 2px 1px 2px 1px grey',
            borderRadius:'20px',
            backgroundColor: 'white',         
            zIndex:'50',
        },
        buttoncontainer: {
            width: '100%',
            height: '55px',
            border: '0px solid  blue',
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        },
        textfieldcontainer:{
            width: '90%',
            height:'60px',
            position:'relative',
            top:'0px',
            left:'10px',
            border:'0px solid black',
    
        },
        emailtext:{
            color:'black',
        },
        loginbutton:{
            width:'55%',
            height:'40px',
            position:'relative',
           top:'2px',
            left:'45px',
           // textAlign:'center',
            display:'flex',
            border:'0px solid black',
            flexDirection:'row',
            justifyContent:'center',
            marginBottom:'10px',
             
        },
        orclass:{
            width:'90%',
            height:'40px',
            position:'relative',
            top:'2px',
            border:'0px solid black',
        },
        mediabutton:{
            width:'90%',
            height:'25px',
            display:'flex',
            flexDirection:'row',
            border: '0px solid  blue',
            position:'relative',
            top:'10px',
            left:'5px',
            justifyContent: 'space-evenly',
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        logincontainer:{
            width: '250px',
            height: '320px',
            position: 'absolute',
            top:'70px',
            left:'170px',
            boxShadow:' 2px 1px 2px 1px grey',
            borderRadius:'20px',
            backgroundColor: 'white',
            zIndex:'50',
        },
        buttoncontainer: {
            width: '100%',
            height: '55px',
            border: '0px solid  blue',
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        },
        textfieldcontainer:{
            width: '90%',
            height:'60px',
            position:'relative',
            top:'0px',
            left:'10px',
            border:'0px solid black',
    
        },
        emailtext:{
            color:'black',
        },
        loginbutton:{
            width:'55%',
            height:'40px',
            position:'relative',
           top:'2px',
            left:'50px',
           // textAlign:'center',
            display:'flex',
            border:'0px solid black',
            flexDirection:'row',
            justifyContent:'center',
            marginBottom:'10px',
             
        },
        orclass:{
            width:'90%',
            height:'40px',
            position:'relative',
            top:'2px',
            border:'0px solid black',
        },
        mediabutton:{
            width:'90%',
            height:'25px',
            display:'flex',
            flexDirection:'row',
            border: '0px solid  blue',
            position:'relative',
            top:'10px',
            left:'5px',
            justifyContent: 'space-evenly',
        },
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        logincontainer:{
            width: '280px',
            height: '340px',
            position: 'absolute',
            top:'100px',
            left:'420px',
            boxShadow:' 2px 1px 2px 1px grey',
            borderRadius:'20px',
            backgroundColor: 'white',
            zIndex:'50',
        },
        buttoncontainer: {
            width: '100%',
            height: '55px',
            border: '0px solid  blue',
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        },
        textfieldcontainer:{
            width: '90%',
            height:'60px',
            position:'relative',
            top:'0px',
            left:'10px',
            border:'0px solid black',
    
        },
        emailtext:{
            color:'black',
        },
        loginbutton:{
            width:'55%',
            height:'40px',
            position:'relative',
           top:'2px',
            left:'50px',
           // textAlign:'center',
            display:'flex',
            border:'0px solid black',
            flexDirection:'row',
            justifyContent:'center',
            marginBottom:'10px',
             
        },
        orclass:{
            width:'90%',
            height:'40px',
            position:'relative',
            top:'2px',
            border:'0px solid black',
        },
        mediabutton:{
            width:'90%',
            height:'25px',
            display:'flex',
            flexDirection:'row',
            border: '0px solid  blue',
            position:'relative',
            top:'10px',
            left:'5px',
            justifyContent: 'space-evenly',
        },
    },
})

function Login(props) {
    const navigate = useNavigate()
    const openSignup = () =>{
        props.listenToLogin()
    }

    const [userDetails, setUserDetails] = useState({ email: '', password: '' })
    const [regexObj, setRegexObj] = useState({
        emailBorder: false, emailHelper: "", 
        passwordBorder: false, passwordHelper: "",
    })
    const takeEmail = (event) => {

        setUserDetails(previousState => ({
            ...previousState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {

        setUserDetails(previousState => ({
            ...previousState,
            password: event.target.value
        }))
        console.log(event.target.value)

    }


    
    const classes = useStyle();
    const submit = () =>{
        let emailTest = emailRegex.test(userDetails.email)
        let passwordTest = passwordRegex.test(userDetails.password)
        if (emailTest === false) {
            setRegexObj(previousState => ({
                ...previousState,
                emailBorder: true,
                emailHelper: "enter correct mail"
            }))
        }
        else if (emailTest === true) {
            setRegexObj(previousState => ({
                ...previousState,
                emailBorder: false,
                emailHelper: ""
            }))
        }
        if (passwordTest === false) {
            setRegexObj(previousState => ({
                ...previousState,
                passwordBorder: true,
                passwordHelper: "enter correct password"
            }))
        }
        else if (passwordTest === true) {
            setRegexObj(previousState => ({
                ...previousState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }
        if (emailTest === true && passwordTest === true) {
            login(userDetails).then((response) => {
                console.log(response);
                localStorage.setItem("token", response.data.result.accessToken)
                navigate('/Dashboard')
            })

            console.log("login successful")
        }

    }

    return (
        <div>
            <Card>
                <div className={classes.logincontainer}>
                    <div className={classes.buttoncontainer}>
                        <Button color="inherit" variant="text">LOGIN</Button>
                        <Button color="inherit" variant="text" onClick = {openSignup}>SIGNUP</Button>
                    </div>
                    <div className={classes.textfieldcontainer}>
                    <TextField  label="Email" size="small" variant="outlined"
                    onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} />
                    </div>
                    <div className={classes.textfieldcontainer}>
                    <TextField label="Password" size="small" variant="outlined"
                    onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}
                                        />
                    </div>
                    <div className={classes.loginbutton}>
                    <Button variant="contained" color="error" fullWidth="true" onClick = {submit}> Login</Button>

                    </div>
                    <span className={classes.orclass}>-------OR--------</span>
                    <div className={classes.mediabutton}>
                    <Button variant="contained" style={{width:'7 ch'}} size="small">FACEBOOK</Button>
                    <Button variant="outlined" color="inherit" size="small">GOOGLE</Button>
   
                    </div>  
                </div>
            
                </Card>

        </div>
    )
}
export default Login

        