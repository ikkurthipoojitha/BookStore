import React,{useState} from "react";
import { makeStyles, propsToClassKey } from '@mui/styles';
import { Box } from "@mui/material";
import Header from "../../header/header";
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarRateIcon from '@mui/icons-material/StarRate';
import CartOrder from "../cartorder/cartorder";
import Footer from "../footer/footer";


const useStyle = makeStyles({
    locationbox: {
        width: '59vw',
        height: '45vh',
        border: '1px solid #707070',
        position: 'relative',
        left: '140px',
        top: '30px',

    },
    dropdownbox: {
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
    locationdropdown: {
        width: '35%',
        height: 'auto',
        border: '0px solid  orange',
        position: 'relative',
        top: '2px',
        display: 'flex',


    },
    cartimage: {
        width: '38%',
        height: '55%',
        border: '0px solid green',
        position: 'relative',
        top: '30px',
        left: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    carttext: {
        width: '60%',
        height: 'auto',
        border: '0px solid orange',
        textAlign: 'left',
        position: 'relative',
        left: '40px',
    },
    symbolbox:{
        width:'100%',
        height:'20%',
        border:'0px solid blue',
        position:'relative',
        top:'35px',
    },
    placeorder:{
        width:'20%',
        height:'auto',
        border:'0px solid yellow',
        position:'relative',
        left:'600px',
        top:'30px',
    },
    addressbox:{
        width:'805px',
        height:'60px',
        border:'1px solid #707070',
        position: 'relative',
        left: '140px',
        top: '50px',
        textAlign:'left',

    },
    orderbox:{
        width:'805px',
        height:'70px',
        border:'1px solid #707070',
        backgroundColor:'white',
        position: 'relative',
        left: '140px',
        top: '70px',
        textAlign:'left',

    },
})

function MyCart(props) {
    const [toggle,setToggle] = useState(false)
    const classes = useStyle();

    
    const openCustomer = ()=>{
        setToggle(true)
    }

    return (
        <div>
            {/* <Header /> */}
            <Box style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '70%',
                position: 'relative', left: '140px', top: '20px', backgroundColor: 'white', border: '0px solid blue',
            }}>Home/<b>My cart</b></Box>

            <div className={classes.locationbox}>
                <div className={classes.dropdownbox}>
                    <p style={{ fontSize: '15px' }}> My cart (1)
                        {/* <span style={{ fontSize: '30px' }}>Books</span> */}
                    </p>
                    <div className={classes.locationdropdown}>
                        <Button style={{
                            position: 'relative', top: '0px', color: 'black', backgroundColor: 'white',
                            border: '1px solid lightgrey', fontSize: '12px', width: '100%',position:'relative',
                        }}
                            id="demo-customized-button"
                            // aria-controls={open ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            // aria-expanded={open ? 'true' : undefined}
                            variant="contained"
                            disableElevation
                        // onClick={handleClick}
                        // endIcon={<KeyboardArrowDownIcon/>}
                        >
                            < LocationOnIcon style={{ color: '#A03037', width: '14px', height: '20px', position: 'relative', right: '20px' }} />
                            Use current location
                            <ArrowDropDownIcon style={{ color: '#DCDCDC', position: 'relative', left: '30px', }} />
                        </Button>
                    </div>
                </div>
                <div className={classes.cartimage}>
                    <img src={require("./cover.png")} alt="img"
                        style={{
                            width: '15%', height: '45%', position: 'relative',left:'10px',
                            top: '10px', border: '0px solid red', padding: '2px',
                        }} />

                    <div className={classes.carttext}>

                        <span style={{ font: ' 15px Arial, sans-serif', color: '#0A0102', 
                        border: '0px solid green',position:'relative',top:'5px' }}>
                            Don't Make Me Think <br /></span>

                        <span style={{ fontSize: '10px', border: '0px solid green', color: 'grey', 
                        position: 'relative', top: '8px', }}>
                            by steve kurg
                            {/* by {props.book.author} */}
                        </span>

                        <div
                            style={{
                                display: 'flex', flexDirection: 'row', font: '13px Arial, sans-serif',
                                 position: 'relative', top: '14px',
                                border: '0px solid orange', height: '18%'
                            }}
                        ><b>Rs.1500</b> &nbsp; &nbsp;
                            <span style={{ textDecoration: 'line-through' }}>
                                Rs.5000
                            </span>
                        </div>
                        <div className={classes.symbolbox}>
                            <span style={{width:'24px',height:'24px',border:'1px solid grey',left:'0px',
                            borderRadius:'10px',position:'relative',textAlign:'center'}}> &nbsp;-&nbsp; </span>
                            <span style={{width:'41px',height:'24px',border:'1px solid grey',left:'10px',
                            borderRadius:'5px',position:'relative',textAlign:'center'}}>&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp; </span>
                            <span style={{width:'24px',height:'24px',border:'1px solid grey',left:'20px',
                            borderRadius:'10px',position:'relative',textAlign:'center'}}> &nbsp;+&nbsp; </span>
                            <span style={{border:'0px solid grey',left:'45px',
                            borderRadius:'0px',position:'relative',textAlign:'center',fontSize:'14px'}}> Remove </span>
                                                        
                        </div>
                    </div>
                </div>
                <div className={classes.placeorder}>
                <Button variant="contained" style={{backgroundColor:'#3371B5',position:'relative',left:'0px'}} 
                onClick={openCustomer}>
                    Place Order</Button>

                </div>
            </div>
            <div>
                {
                    toggle ?<CartOrder />: 
                    <div className={classes.addressbox}>
                        <span style={{color:'#333232',position:'relative',left:'20px',top:'20px'}}> Address Details </span>
                    </div>
                    
                }
            </div>
            
            <div className={classes.orderbox}>
               <span style={{color:'#333232',position:'relative',left:'20px',top:'20px'}}> Order Summary </span>
            </div> 

<Footer />

        </div>
    )
}

export default MyCart
