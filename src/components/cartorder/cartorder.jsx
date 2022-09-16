import React,{useState} from "react";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/material";
import Header from "../../header/header";
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import OrderDetails from "../orderdetails/orderdetails";
import {editUser} from "../../services/dataservice";

const fullNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const cityRegex = /^[A-Z]{1}[a-z]{2,}$/;
const stateRegex = /^[A-Z]{1}[a-z]{2,}$/;
const mobileNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const fullAddressRegex = /^[a-zA-Z0-9]+[\s]*[a-zA-Z0-9.\-\,\#]+[\s]*[a-zA-Z0-9.\-\,\#]+[a-zA-Z0-9\s.\-\,\#]*$/;

const useStyle = makeStyles({
    locationboxtwo: {
        width: '59vw',
        height: '45vh',
        border: '1px solid #707070',
        position: 'relative',
        left: '140px',
        top: '30px',

    },
    dropdownboxtwo: {
        width: '90%',
        height: '15%',
        border: '0px solid red',
        position: 'relative',
        top: '20px',
        left: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    locationdropdowntwo: {
        width: '35%',
        height: 'auto',
        border: '0px solid  orange',
        position: 'relative',
        top: '2px',
        display: 'flex',


    },
    cartimagetwo: {
        width: '38%',
        height: '50%',
        border: '0px solid green',
        position: 'relative',
        top: '40px',
        left: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    carttexttwo: {
        width: '60%',
        height: 'auto',
        border: '0px solid orange',
        textAlign: 'left',
        position: 'relative',
        left: '40px',
    },
    symbolboxtwo: {
        width: '100%',
        height: '20%',
        border: '0px solid blue',
        position: 'relative',
        top: '35px',
    },
    placeordertwo: {
        width: '20%',
        height: 'auto',
        border: '0px solid yellow',
        position: 'relative',
        left: '600px',
        top: '30px',
    },
    addressboxtwo: {
        width: '805px',
        height: '470px',
        border: '1px solid #707070',
        position: 'relative',
        left: '140px',
        top: '50px',
        textAlign: 'left',

    },
    orderboxtwo: {
        width: '805px',
        height: '240px',
        border: '1px solid #707070',
        position: 'relative',
        left: '140px',
        top: '60px',
        textAlign: 'left',

    },
    customer: {
        width: '90%',
        height: '10%',
        border: '0px solid green',
        position: 'relative',
        top: '20px',
        left: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nametextfield: {
        width: '65%',
        height: '12%',
        border: '0px solid red',
        position: 'relative',
        top: '50px',
        left: '35px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    address: {
        width: '65%',
        height: '99px',
        border: '0px solid red',
        position: 'relative',
        top: '70px',
        left: '35px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    radiotext: {
        width: '50%',
        height: '18%',
        border: '0px solid blue',
        position: 'relative',
        top: '50px',
        left: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    radiobuttons: {
        width: '100%',
        height: '50%',
        border: '0px solid orange',
        position: 'relative',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    continue: {
        width: '20%',
        height: '10%',
        border: '0px solid blue',
        position: 'relative',
        top: '60px',
        left: '610px',
    },
    checkout:{
        width: '20%',
        height: '10%',
        border: '0px solid blue',
        position: 'relative',
        top: '30px',
        left: '610px',
    },
    orderboxthree:{
        width:'805px',
        height:'60px',
        border:'1px solid #707070',
        position: 'relative',
        left: '140px',
        top: '140px',
        textAlign:'left',
        backgroundColor:'white',

    },

})

function CartOrder(props) {
    const classes = useStyle();
    const [toggle,setToggle] = useState(false)
    const [hide,setHide] = useState(false)

    const [regexObject, setRegexObject] = useState({
        fullNameHelper:"",fullNameBorder:false,
        cityBorder:false,cityHelper:"",
        stateBorder:false,stateHelper:"",
        mobileNumberBorder:false, mobileNumberHelper:"",
        fullAddressBorder:false,fullAddressHelper:"",
    })

    const [userInput, setUserInput] = useState({
        addressType: '', fullAddress: '', city: '', state: '',
    })
    const takingType = (event) => {
        setUserInput(previousState => ({ ...previousState, addressType: event.target.value }))
        console.log(event.target.value)


    }
    const takingFullAddress = (event) => {
        setUserInput(previousState => ({ ...previousState, fullAddress: event.target.value }))
        console.log(event.target.value)

    }
    const takingCity = (event) => {
        setUserInput(previousState => ({ ...previousState, city: event.target.value }))
        console.log(event.target.value)

    }
    const takingState = (event) => {
        setUserInput(previousState => ({ ...previousState, state: event.target.value }))
        console.log(event.target.value)
    }

    const openOrder = ()=>{
        props.openOrderSummary()
        setHide(true)
        let fullNameTest = fullNameRegex.test(userInput.fullName)
        let cityTest = fullNameRegex.test(userInput.fullName)
        let stateTest = fullNameRegex.test(userInput.fullName)
        let mobileNumberTest = mobileNumberRegex.test(userInput.phone)
        let fullAddressTest = fullAddressRegex.test(userInput.fullAddress)

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
        if (fullAddressTest === false) {
            setRegexObject(previousState => ({
                ...previousState,
                fullAddressBorder: true,
                fullAddressHelper: "enter correct address"
            }))
        }
        else if (fullAddressTest === true) {
            setRegexObject(previousState => ({
                ...previousState,
                fullAddressBorder: false,
                fullAddressHelper: ""
            }))
        }
        if (cityTest === false) {
            setRegexObject(previousState => ({
                ...previousState,
                cityBorder: true,
                cityHelper: "enter correct city"
            }))
        }
        else if (cityTest === true) {
            setRegexObject(previousState => ({
                ...previousState,
                cityBorder: false,
                cityHelper: ""
            }))
        }
        if (stateTest === false) {
            setRegexObject(previousState => ({
                ...previousState,
                stateBorder: true,
                stateHelper: "enter correct state"
            }))
        }
        else if (stateTest === true) {
            setRegexObject(previousState => ({
                ...previousState,
                stateBorder: false,
                stateHelper: ""
            }))
        }
    // if(fullAddressTest === true &&cityTest === true && stateTest === true){
            editUser(userInput).then((response) => {
             console.log(response, "edited user")
                 }).catch((error) => {
            console.log(error)})
       //  }
    }
    
    
    
    return (
        <div>
             
            <div className={classes.addressboxtwo}>
                <div className={classes.customer}>
                    <span style={{ color: '#333232', fontSize: '18px', position: 'relative', top: '5px' }}>Customer Details</span>
                    <Button variant="outlined" style={{ color: '#A03037', border: '1px solid #A03037' }}>Add New Address</Button>
                </div>
                <div className={classes.nametextfield}>
                    <TextField id="outlined-basic" label="FullName"  variant="outlined"
                    //onChange={takingFullName} 
                   //error={regexObject.fullNameBorder} helperText= {regexObject.fullNameHelper}
                     style={{ width: '250px', height: '30px' }} />
                    <TextField id="outlined-basic" label="MobileNumber"  variant="outlined"
                    //onChange={takingMobileNumber}
                    //error={regexObject.mobileNumberBorder} helperText= {regexObject.mobileNumberHelper}
                     style={{ width: '250px', height: '30px' }} />
                    {/* defaultValue="Poonam Yadav" defaultValue="6325897410" */}
                </div>
                <div className={classes.address}>
                    {/* <TextField id="outlined-basic" label="Address" variant="outlined" style={{width:'100%',height:'97%'}}/> */}
                    <TextField style={{ width: '100%', height: '90%' }}
                        id="outlined-multiline-flexible"
                        label="Address"
                        multiline
                        maxRows={2}
                        // value={value}
                        onChange={takingFullAddress}
                       //error={regexObject.fullAddressBorder} helperText= {regexObject.fullAddressHelper}
                      //  defaultValue="BridgeLabz Solutions LLP, No. 42, 14th Main,  Sector 4,Opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore"
                    />
                </div>
                <div className={classes.nametextfield}>
                    <TextField id="outlined-basic" label="city"  variant="outlined" 
                    // error={regexObject.cityBorder} helperText= {regexObject.cityHelper}
                    style={{ width: '250px', height: '30px' }} onChange={takingCity}/>
                    <TextField id="outlined-basic" label="state"  variant="outlined"
                  //  error={regexObject.stateBorder} helperText= {regexObject.stateHelper}
                     style={{ width: '250px', height: '30px' }} onChange={takingState} />
                </div>
                <div className={classes.radiotext}>
                    <p>Type</p>
                    <div className={classes.radiobuttons} 
                    onChange={takingType}
                    >
                        <div>
                            <input type="radio" value="Home" name="radio" />
                            <label>Home </label>
                        </div>
                        <div>
                            <input type="radio" name="radio" value="Work"  />
                            <label>Work </label>
                        </div>
                        <div>
                            <input type="radio" name="radio" value="Other" />
                            <label>Other </label>
                        </div>
                    </div>
                </div>
                <div className={classes.continue}>
                    {
                        hide ? <div></div>:               
                     <Button variant="contained" style={{ width: '150px' }} onClick={openOrder}>
                        Continue</Button>

                    }

                </div>
            </div>
        </div>
    )


}
export default CartOrder
