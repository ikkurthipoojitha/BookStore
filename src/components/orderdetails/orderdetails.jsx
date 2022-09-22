import React,{useState} from "react";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/material";
import Header from "../../header/header";
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputLabel from '@mui/material/InputLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';




const useStyle = makeStyles({
    orderboxtwo3: {
        width: '805px',
        height: 'auto',
        border: '1px solid #707070',
        position: 'relative',
        left: '140px',
        top: '50px',
        textAlign: 'left',

    },
    customer: {
        width: '90%',
        height: '10%',
        border: '1px solid green',
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
    cartimagetwo: {
        width: '38%',
        height: '50%',
        border: '1px solid green',
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
})

function OrderDetails(props) {
    const [toggle,setToggle] = useState(false)

    const classes = useStyle();
    function listenToOrder(props){
        setToggle(true)
    }
    
    return (
        <div>
             <div className={classes.orderboxtwo3}>
                <span style={{ color: '#333232', position: 'relative', left: '20px', top: '20px' }}>
                     Order Summary </span> 
                <div className={classes.cartimagetwo}>
                    <img src={require("./cover.png")} alt="img"
                        style={{
                            width: '15%', height: '50%', position: 'relative', left: '10px',
                            top: '20px', border: '0px solid red', padding: '2px',
                        }} />

                    <div className={classes.carttexttwo}> 

                         <span style={{
                            font: ' 15px Arial, sans-serif', color: '#0A0102',
                            border: '0px solid green', position: 'relative', top: '15px'
                        }}>
                            Don't Make Me Think <br /></span>

                        <span style={{
                            fontSize: '10px', border: '0px solid green', color: 'grey',
                            position: 'relative', top: '12px',
                        }}>
                            by steve kurg
                         
                         </span>  

                        <div
                            style={{
                                display: 'flex', flexDirection: 'row', font: '13px Arial, sans-serif',
                                position: 'relative', top: '19px',
                                border: '0px solid orange', height: '18%'
                            }}
                        ><b>Rs.1500</b> &nbsp; &nbsp;
                            <span style={{ textDecoration: 'line-through' }}>
                                Rs.5000
                            </span>
                        </div> 

                     </div>
                </div> 
                <div className={classes.checkout}>
                    <Button variant="contained" style={{ width: '150px',top:'0px',border:'0px solid green' }}>checkOut</Button>

                </div> 
            </div> 
            
        </div>
    )
}
export default OrderDetails