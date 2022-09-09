import React,{useState} from "react";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/material";
import Header from "../../header/header";
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputLabel from '@mui/material/InputLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import OrderDetails from "../orderdetails/orderdetails";




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
        top: '60px',
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
    const [toggle,setToggle] = useState(false)
    const classes = useStyle();

    
    const openOrder = ()=>{
        setToggle(true)
    }
    
    return (
        <div>
            
              
            <div className={classes.addressboxtwo}>
                <div className={classes.customer}>
                    <span style={{ color: '#333232', fontSize: '18px', position: 'relative', top: '5px' }}>Customer Details</span>
                    <Button variant="outlined" style={{ color: '#A03037', border: '1px solid #A03037' }}>Add New Address</Button>
                </div>
                <div className={classes.nametextfield}>
                    <TextField id="outlined-basic" label="Full Name" defaultValue="Poonam Yadav" variant="outlined" style={{ width: '250px', height: '30px' }} />
                    <TextField id="outlined-basic" label="Mobile Number" defaultValue="6325897410" variant="outlined" style={{ width: '250px', height: '30px' }} />

                </div>
                <div className={classes.address}>
                    {/* <TextField id="outlined-basic" label="Address" variant="outlined" style={{width:'100%',height:'97%'}}/> */}
                    <TextField style={{ width: '100%', height: '90%' }}
                        id="outlined-multiline-flexible"
                        label="Address"
                        multiline
                        maxRows={2}
                        // value={value}
                        //onChange={handleChange}
                        defaultValue="BridgeLabz Solutions LLP, No. 42, 14th Main,  Sector 4,Opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore"

                    />
                </div>
                <div className={classes.nametextfield}>
                    <TextField id="outlined-basic" label="CityTown" defaultValue="Bengaluru" variant="outlined" style={{ width: '250px', height: '30px' }} />
                    <TextField id="outlined-basic" label="state" defaultValue="Karnataka" variant="outlined" style={{ width: '250px', height: '30px' }} />
                </div>
                <div className={classes.radiotext}>
                    <p>Type</p>
                    <div className={classes.radiobuttons}>
                        <div>
                            <input type="radio" name="radio" />
                            <label>Home </label>
                        </div>
                        <div>
                            <input type="radio" name="radio" color="red" checked />
                            <label>Work </label>
                        </div>
                        <div>
                            <input type="radio" name="radio" />
                            <label>Other </label>
                        </div>

                    </div>
                </div>
                <div className={classes.continue}>
                    <Button variant="contained" style={{ width: '150px' }} onClick={openOrder}>Continue</Button>

                </div>


            </div>
            
            {/* <div className={classes.orderboxtwo}> */}
                {/* <span style={{ color: '#333232', position: 'relative', left: '20px', top: '20px' }}>
                     Order Summary </span> */}
                {/* <div className={classes.cartimagetwo}>
                    <img src={require("./cover.png")} alt="img"
                        style={{
                            width: '15%', height: '50%', position: 'relative', left: '10px',
                            top: '20px', border: '0px solid red', padding: '2px',
                        }} />

                    <div className={classes.carttexttwo}> */}

                        {/* <span style={{
                            font: ' 15px Arial, sans-serif', color: '#0A0102',
                            border: '0px solid green', position: 'relative', top: '15px'
                        }}>
                            Don't Make Me Think <br /></span>

                        <span style={{
                            fontSize: '10px', border: '0px solid green', color: 'grey',
                            position: 'relative', top: '12px',
                        }}>
                            by steve kurg
                            {/* by {props.book.author} */}
                        {/* </span>  */}

                        {/* <div
                            style={{
                                display: 'flex', flexDirection: 'row', font: '13px Arial, sans-serif',
                                position: 'relative', top: '19px',
                                border: '0px solid orange', height: '18%'
                            }}
                        ><b>Rs.1500</b> &nbsp; &nbsp;
                            <span style={{ textDecoration: 'line-through' }}>
                                Rs.5000
                            </span>
                        </div> */}

                    {/* </div>
                </div> */}
                {/* <div className={classes.checkout}>
                    <Button variant="contained" style={{ width: '150px',top:'0px' }}>checkOut</Button>

                </div> */}
            {/* </div> */}
            <div>
                {
                    toggle ? <OrderDetails />: <MyCart />
            //         <div className={classes.orderboxthree}>
            //    <span style={{color:'#333232',position:'relative',left:'20px',top:'20px'}}> Order Summary </span>
            // </div>

                }
            </div>
            
        </div>
    )


}
export default CartOrder
