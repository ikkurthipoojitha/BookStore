import React,{useState} from "react";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { login } from "../../services/userservice";
import { sign } from "../../services/userservice";


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const fullNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const mobileNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const useStyle = makeStyles({
    containerup: {
        width: '23vw',
        height: '68vh',
        backgroundColor:'white',
        boxShadow:'2px 2px 2px 2px grey',
        position:'relative',
        bottom:'510px',
        left:'590px',
        borderRadius:'20px',
        border: '0px solid blue',

        
    },
    signupbutton: {
        width: '100%',
        height: '20%',
        //border: '1px solid blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textfieldup: {
        width: '100%',
        height: '16%',

    },
    signupfull: {
        width: '68%',
        height: '14%',
        position:'relative',
        left: '50px',
        border: '0px solid blue',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        containerup: {
            width: '60vw',
            height: '69vh',
            backgroundColor:'white',
            boxShadow:'2px 2px 2px 2px grey',
            position:'relative',
            bottom:'470px',
            left:'110px',
            borderRadius:'20px',
            border: '0px solid black',
        },
        signupbutton: {
            width: '100%',
            height: '18%',
            border: '0px solid blue',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },
        textfieldup: {
            width: '100%',
            height: '16%',
            border: '0px solid blue',
    
        },
        signupfull: {
            width: '65%',
            height: '12%',
            position:'relative',
            left: '16%',
            border: '0px solid blue',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
        },
        
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        containerup: {
            width: '48vw',
            height: '69vh',
            backgroundColor:'white',
            boxShadow:'2px 2px 2px 2px grey',
            position:'relative',
            bottom:'470px',
            left:'170px',
            borderRadius:'20px',
            border: '0px solid black',
        },
        signupbutton: {
            width: '100%',
            height: '18%',
            border: '0px solid green',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },
        textfieldup: {
            width: '100%',
            height: '16%',
            border: '0px solid red',
    
        },
        signupfull: {
            width: '60%',
            height: '14%',
            position:'relative',
            left: '20%',
            border: '0px solid blue',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
        },
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        containerup: {
            width: '280px',
            height: '370px',
            backgroundColor:'white',
            boxShadow:'2px 2px 2px 2px grey',
            position:'relative',
            bottom:'455px',
            left:'420px',
            borderRadius:'20px',
            border: '0px solid black',
        },
        signupbutton: {
            width: '100%',
            height: '15%',
            border: '0px solid green',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },
        textfieldup: {
            width: '100%',
            height: '16%',
            border: '0px solid red',
    
        },
        signupfull: {
            width: '68%',
            height: '14%',
            position:'relative',
            left: '50px',
            border: '0px solid blue',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
        },
    },
})

function Signup(props) {

    const openLogin = ()=>{
        props.listenToSignup()
    }
    const classes = useStyle();
    

    const [userInput, setUserInput] = useState({ email: '', password: '',fullName:'',phone:'' })
    const [regexObject, setRegexObject] = useState({
        fullNameHelper:"",fullNameBorder:false,
        emailBorder: false, emailHelper: "", 
        passwordBorder: false, passwordHelper: "",
        mobileNumberBorder:false, mobileNumberHelper:"" })

        const takeFullName = (event) => {

            setUserInput(prevState => ({
                ...prevState,
                fullName: event.target.value
            }))
            console.log(event.target.value)
        }
        const takeEmail = (event) => {

            setUserInput(previousState => ({
                ...previousState,
                email: event.target.value
            }))
            console.log(event.target.value)
        }
        const takePassword = (event) => {
   
            setUserInput(previousState => ({
                ...previousState,
                password: event.target.value
            }))
            console.log(event.target.value)
    
        }

        const takeMobileNumber = (event) => {    
            setUserInput(previousState => ({
                ...previousState,
                phone: event.target.value
            }))
            console.log(event.target.value)
        }
        const submitEvent = () => {
            let emailTest = emailRegex.test(userInput.email)
            let passwordTest = passwordRegex.test(userInput.password)
            let fullNameTest = fullNameRegex.test(userInput.fullName)
            let mobileNumberTest = mobileNumberRegex.test(userInput.phone)
            if (fullNameTest === false) {
                setRegexObject(prevState => ({
                    ...prevState,
                    fullNameBorder: true,
                    fullNameHelper: "Enter correct full name"
                }))
            }
            else if (fullNameTest === true) {
                setRegexObject(prevState => ({
                    ...prevState,
                    fullNameBorder: false,
                    fullNameHelper: ""
                }))
            }
            if (emailTest === false) {
                setRegexObject(previousState => ({
                    ...previousState,
                    emailBorder: true,
                    emailHelper: "enter correct mail"
                }))
            }
            else if (emailTest === true) {
                setRegexObject(previousState => ({
                    ...previousState,
                    emailBorder: false,
                    emailHelper: ""
                }))
            }
            if (passwordTest === false) {
                setRegexObject(previousState => ({
                    ...previousState,
                    passwordBorder: true,
                    passwordHelper: "enter correct password"
                }))
            }
            else if (passwordTest === true) {
                setRegexObject(previousState => ({
                    ...previousState,
                    passwordBorder: false,
                    passwordHelper: ""
                }))
            }
            
            if (mobileNumberTest === false) {
                setRegexObject(previousState => ({
                    ...previousState,
                    mobileNumberBorder: true,
                    mobileNumberHelper: "enter correct mobile number"
                }))
            }
            else if (mobileNumberTest === true) {
                setRegexObject(previousState => ({
                    ...previousState,
                    mobileNumberBorder: false,
                    mobileNumberHelper: ""
                }))
            }
            if (emailTest === true && passwordTest === true && fullNameTest === true && mobileNumberTest === true ) {
                sign(userInput).then((response) => { console.log(response) })
            }
            console.log("signup successful")
        }    


    return (
        <div>  
            <div className={classes.containerup}>
                <div className={classes.signupbutton}>
                <Button color="inherit" variant="text" onClick = {openLogin}>LOGIN</Button>
                <Button color="inherit" variant="text">SIGNUP</Button>
                </div>
                <div className={classes.textfieldup}>
                    <TextField label="Full Name" size="small" variant="outlined" 
                    onChange={takeFullName} error={regexObject.fullNameBorder} helperText= {regexObject.fullNameHelper}/>
                </div>
                <div className={classes.textfieldup}>
                    <TextField label="Email" size="small"
                     onChange={takeEmail} error={regexObject.emailBorder} helperText={regexObject.emailHelper} variant="outlined" />
                </div>
                <div className={classes.textfieldup}>
                    <TextField label="Password" size="small" variant="outlined"
                    onChange={takePassword} error={regexObject.passwordBorder} helperText={regexObject.passwordHelper} />
                </div>
                <div className={classes.textfieldup}>
                    <TextField label="Mobile Number" size="small" variant="outlined"
                    onChange={takeMobileNumber} error={regexObject.mobileNumberBorder} helperText={regexObject.mobileNumberHelper} />
                </div>
                <div className={classes.signupfull}>
                    <Button variant="contained" color="error" fullWidth="true"
                    onClick={submitEvent}> Signup</Button>

                </div>
            </div>        
        </div>
    )
}
export default Signup
  