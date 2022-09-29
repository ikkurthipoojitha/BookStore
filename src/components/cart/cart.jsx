import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/material";
import Header from "../../header/header";
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarRateIcon from '@mui/icons-material/StarRate';
import CartOrder from "../cartorder/cartorder";
import Footer from "../footer/footer";
import OrderDetails from "../orderdetails/orderdetails";
import { deleteCartItem, getCartItem, addOrder } from "../../services/dataservice";
import { cartItemQuantity } from '../../services/dataservice';
import { Navigate, useNavigate } from "react-router-dom";



const useStyle = makeStyles({
    mycarttext: {
        width: '60%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',

        position: 'relative',
        left: '140px',
        top: '20px',
        backgroundColor: 'white',
        border: '0px solid blue',
    },
    mycartonefont: {
        fontSize: '15px'
    },
    locationbox: {
        width: '59vw',
        height: 'auto',
        border: '1px solid #DCDCDC',
        position: 'relative',
        left: '140px',
        top: '30px',
    },
    dropdownbox: {
        width: '90%',
        height: '15%',
        border: '0px solid red',
        position: 'relative',
        top: '8px',
        left: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    locationdropdown: {
        width: '35%',
        height: 'auto',
        border: '0px solid  orange',
        position: 'relative',
        top: '2px',
        display: 'flex',
    },
    locationdropdowniconstyle: {
        position: 'relative',
        top: '0px',
        fontSize: '12px',
        width: '100%',
        position: 'relative',
    },
    locationiconon: {
        width: '14px',
        height: '20px',
        position: 'relative',
        right: '20px',
    },
    arrowdropicon: {
        position: 'relative',
        left: '30px',
    },
    cartimage: {
        width: '90%',
        height: 'auto',
        border: '0px solid #E4E4E4',
        position: 'relative',
        top: '2px',
        left: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'space-evenly',
        marginBottom: '10px',
    },
    imgheight: {
        width: '15%',
        height: '120px',
        border: '0px solid blue',
        position: 'relative',
        top: '10px',
        left:'10px',
    },
    
    carttext: {
        width: '60%',
        height: 'auto',
        border: '0px solid orange',
        textAlign: 'left',
        position: 'relative',
        left: '40px',
    },
    carttextbookname: {
        font: ' 15px Arial, sans-serif',
        color: '#0A0102',
        border: '0px solid green',
        position: 'relative',
        top: '10px',
    },
    carttextauthor: {
        fontSize: '10px',
        border: '0px solid green',
        color: 'grey',
        position: 'relative', top: '4px',
    },
    carttextpricebox: {
        display: 'flex',
        flexDirection: 'row',
        font: '13px Arial, sans-serif',
        position: 'relative',
        top: '9px',
        border: '0px solid orange',
        height: '15%'
    },
    carttextsymbolbox: {
        width: '24px',
        height: '24px',
        border: '1px solid grey',
        left: '0px',
        borderRadius: '10px',
        position: 'relative',
        textAlign: 'center',
    },
    symbolboxcount: {
        width: '41px',
        height: '24px',
        border: '1px solid grey',
        left: '10px',
        borderRadius: '5px',
        position: 'relative',
        textAlign: 'center'
    },
    symbolboxincrement: {
        width: '24px',
        height: '24px',
        border: '1px solid grey',
        left: '20px',
        borderRadius: '10px',
        position: 'relative',
        textAlign: 'center'
    },
    symbolboxdelete: {
        border: '0px solid grey',
        left: '25px',
        borderRadius: '0px',
        position: 'relative',
        textAlign: 'center',
        fontSize: '12px !important',

    },
    symbolbox: {
        width: '100%',
        height: 'auto',
        border: '0px solid blue',
        position: 'relative',
        top: '15px',
    },
    placeorder: {
        width: '20%',
        height: 'auto',
        border: '0px solid yellow',
        position: 'relative',
        left: '600px',
        bottom: '3px',
        marginBottom: '10px',
    },
    placeorderhidden: {
        height: '27px',
        backgroundColor: '#3371B5',
        position: 'relative',
        left: '0px',
        top: '2px'
    },
    addressbox: {
        width: '805px',
        height: '60px',
        border: '1px  solid #DCDCDC',
        position: 'relative',
        left: '140px',
        top: '40px',
        textAlign: 'left',

    },
    addressboxspan: {
        position: 'relative',
        left: '20px', top: '20px'
    },
    orderbox: {
        width: '805px',
        height: '70px',
        border: '1px solid #DCDCDC',
        backgroundColor: 'white',
        position: 'relative',
        left: '140px',
        top: '60px',
        textAlign: 'left',

    },
    orderboxtwo: {
        width: '805px',
        height: 'auto',
        border: '1px solid #DCDCDC',
        position: 'relative',
        left: '140px',
        top: '80px',
        textAlign: 'left',

    },
    orderboxtwospan: {
        position: 'relative', left: '20px', top: '20px',
        fontSize:'18px'
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
    checkout: {
        width: '20%',
        height: '10%',
        border: '0px solid blue',
        position: 'relative',
        bottom: '-10px',
        left: '600px',
        marginBottom: '45px',
    },
    checkoutonclick: {
        width: '60%',
        position: 'relative', top: '25px',
        left: '35px',
        border: '0px solid green'
    },
    cartimagetwo: {
        width: '90%',
        height: '90px',
        border: '0px solid #E4E4E4',
        position: 'relative',
        top: '30px',
        left: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: '10px',
    },
    carttexttwo: {
        width: '60%',
        height: 'auto',
        border: '0px solid orange',
        textAlign: 'left',
        position: 'relative',
        left: '40px',
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        mycarttext: {
            width: '60%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'relative',
            left: '70px',
            top: '20px',
            backgroundColor: 'white',
            border: '0px solid blue',
        },
        locationbox: {
            width: '65vw',
            height: 'auto',
            border: '1px  solid #DCDCDC',
            position: 'relative',
            left: '70px',
            top: '30px',
        },
        mycartonefont: {
            fontSize: '12px'
        },
        locationdropdown: {
            display:'none',
        },
        cartimage: {
            width: '90%',
            height: 'auto',
            border: '0px solid #E4E4E4',
            position: 'relative',
            top: '2px',
            left: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'space-evenly',
            marginBottom: '10px',
        },
        imgheight: {
            width: '20%',
            height: '100px',
            border: '0px solid blue',
            position: 'relative',
            top: '7px',
        },
        carttext: {
            width: '65%',
            height: 'auto',
            border: '0px solid orange',
            textAlign: 'left',
            position: 'relative',
            left: '30px',
        },
        carttextbookname: {
            font: ' 12px Arial, sans-serif',
            border: '0px solid green',
            position: 'relative',
            top: '3px',
        },
        carttextauthor: {
            fontSize: '8px',
            border: '0px solid green',
            color: 'grey',
            position: 'relative', top: '0px',
        },
        carttextpricebox: {
            display: 'flex',
            flexDirection: 'row',
            font: '10px Arial, sans-serif',
            position: 'relative',
            top: '4px',
            border: '0px solid orange',
            height: '15%'
        },
        symbolbox: {
            width: '100%',
            height: 'auto',
            border: '0px solid blue',
            position: 'relative',
            top: '7px',
            diplay:'flex',
            flexDirection:'row',
            justifycontent:'space-evenly',
        },
        carttextsymbolbox: {
            width: '10%',
            height: '6%',
            border: '1px solid grey',
            left: '0px',
            borderRadius: '10px',
            position: 'relative',
            textAlign: 'center',
        },
        symbolboxcount: {
            width: '25px',
            height: '6%',
            border: '1px solid grey',
             left: '5px',
            borderRadius: '5px',
            position: 'relative',
            textAlign: 'center'
        },
        symbolboxincrement: {
            width: '10%',
            height: '6%',
            border: '1px solid grey',
            left: '10px',
            borderRadius: '10px',
            position: 'relative',
            textAlign: 'center'
        },
        symbolboxdelete: {
            border: '0px solid grey',
            left: '10%',
            top:'0px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            width:'55px',
            height:'20px',
            borderRadius: '0px',
            position: 'relative',
            textAlign: 'center',
            fontSize: '14px',
        },
        placeorder: {
            width: '35%',
            // height: '45px',
            border: '0px solid yellow',
           
             position: 'relative',
             left: '63%',
            bottom: '3px',
            marginBottom: '10px',
        },
        placeorderhidden: {
            height: '40px',
            backgroundColor: '#3371B5',
            position: 'relative',
            left: '0px',
            top: '2px'
        },
        addressbox: {
            width: '65vw',
            height: '60px',
            border: '1px  solid #DCDCDC',
            position: 'relative',
            left: '70px',
            top: '40px',
            textAlign: 'left',
    
        },
        addressboxspan: {
            position: 'relative',
            left: '20px', top: '20px'
        },
        orderbox: {
            width: '65vw',
            height: '60px',
            border: '1px solid #DCDCDC',
            backgroundColor: 'white',
            position: 'relative',
            left: '70px',
            top: '50px',
            textAlign: 'left',
    
        },
        orderboxtwo: {
            width: '65vw',
            height: 'auto',
            border: '1px solid #DCDCDC',
            position: 'relative',
            left: '70px',
            top: '70px',
            textAlign: 'left',
    
        },
        orderboxtwospan: {
            position: 'relative', left: '20px', top: '20px',
            fontSize:'12px'
        },
        cartimagetwo: {
            width: '90%',
            height: '20%',
            border: '0px solid #E4E4E4',
            position: 'relative',
            top: '30px',
            left: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: '10px',
        },
        carttexttwo: {
            width: '65%',
            height: 'auto',
            border: '0px solid orange',
            textAlign: 'left',
            position: 'relative',
            left: '30px',
            top:'20px',
        },
        checkout: {
            width: '35%',
            height: '10%',
            border: '0px solid blue',
            position: 'relative',
            bottom: '-10px',
            left: '63%',
            marginBottom: '45px',
        },
        checkoutonclick: {
            width:'100%',
            position: 'relative', top: '25px',
            left: '0px',
            border: '1px solid green'
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        mycarttext: {
            width: '60%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'relative',
            left: '100px',
            top: '20px',
            backgroundColor: 'white',
            border: '0px solid blue',
        },
        locationbox: {
            width: '65vw',
            height: 'auto',
            border: '1px  solid #DCDCDC',
            position: 'relative',
            left: '100px',
            top: '30px',
        },
        mycartonefont: {
            fontSize: '14px'
        },
        locationdropdown: {
            display:'none',
        },
        cartimage: {
            width: '90%',
            height: 'auto',
            border: '0px solid #E4E4E4',
            position: 'relative',
            top: '2px',
            left: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'space-evenly',
            marginBottom: '10px',
        },
        imgheight: {
            width: '25%',
            height: '120px',
            border: '0px solid blue',
            position: 'relative',
            top: '10px',
        },
        carttext: {
            width: '65%',
            height: 'auto',
            border: '0px solid orange',
            textAlign: 'left',
            position: 'relative',
            left: '40px',
        },
        carttextbookname: {
            font: ' 14px Arial, sans-serif',
            border: '0px solid green',
            position: 'relative',
            top: '5px',
        },
        carttextauthor: {
            fontSize: '10px',
            border: '0px solid green',
            color: 'grey',
            position: 'relative', top: '8px',
        },
        carttextpricebox: {
            display: 'flex',
            flexDirection: 'row',
            font: '12px Arial, sans-serif',
            position: 'relative',
            top: '14px',
            border: '0px solid orange',
            height: '15%'
        },
        symbolbox: {
            width: '100%',
            height: 'auto',
            border: '0px solid blue',
            position: 'relative',
            top: '20px',
            diplay:'flex',
            flexDirection:'row',
            justifycontent:'space-evenly',
        },
        carttextsymbolbox: {
            width: '10%',
            height: '6%',
            border: '1px solid grey',
            left: '0px',
            borderRadius: '10px',
            position: 'relative',
            textAlign: 'center',
        },
        symbolboxcount: {
            width: '20%',
            height: '6%',
            border: '1px solid grey',
             left: '5px',
            borderRadius: '5px',
            position: 'relative',
            textAlign: 'center'
        },
        symbolboxincrement: {
            width: '10%',
            height: '6%',
            border: '1px solid grey',
            left: '10px',
            borderRadius: '10px',
            position: 'relative',
            textAlign: 'center'
        },
        symbolboxdelete: {
            border: '0px solid grey',
            left: '10%',
            top:'0px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            width:'30%',
            height:'20px',
            borderRadius: '0px',
            position: 'relative',
            textAlign: 'center',
            fontSize: '14px',
        },
        placeorder: {
            width: '37%',
            // height: '45px',
            border: '0px solid yellow',
           
             position: 'relative',
             left: '62%',
            bottom: '3px',
            marginBottom: '10px',
        },
        placeorderhidden: {
            height: '40px',
            backgroundColor: '#3371B5',
            position: 'relative',
            left: '0px',
            top: '2px'
        },
        addressbox: {
            width: '65vw',
            height: '60px',
            border: '1px  solid #DCDCDC',
            position: 'relative',
            left: '100px',
            top: '40px',
            textAlign: 'left',
    
        },
        
        orderbox: {
            width: '65vw',
            height: '60px',
            border: '1px solid #DCDCDC',
            backgroundColor: 'white',
            position: 'relative',
            left: '100px',
            top: '50px',
            textAlign: 'left',
    
        },
        orderboxtwo: {
            width: '65vw',
            height: 'auto',
            border: '1px solid #DCDCDC',
            position: 'relative',
            left: '100px',
            top: '70px',
            textAlign: 'left',
    
        },
        orderboxtwospan: {
            position: 'relative', left: '20px', top: '20px',
            fontSize:'14px'
        },
        cartimagetwo: {
            width: '90%',
            height: '20%',
            border: '0px solid #E4E4E4',
            position: 'relative',
            top: '30px',
            left: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: '10px',
        },
        carttexttwo: {
            width: '65%',
            height: 'auto',
            border: '0px solid orange',
            textAlign: 'left',
            position: 'relative',
            left: '30px',
            top:'20px',
        },
        checkout: {
            width: '37%',
            height: '10%',
            border: '0px solid blue',
            position: 'relative',
            bottom: '-10px',
            left: '62%',
            marginBottom: '45px',
        },
        checkoutonclick: {
            width:'75%',
            position: 'relative', top: '25px',
            left: '0px',
            border: '1px solid green'
        },
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        mycarttext: {
            width: '60%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'relative',
            left: '120px',
            top: '20px',
            backgroundColor: 'white',
            border: '0px solid blue',
        },
        locationbox: {
            width: '65vw',
            height: 'auto',
            border: '1px  solid #DCDCDC',
            position: 'relative',
            left: '120px',
            top: '30px',
        },
        mycartonefont: {
            fontSize: '16px',
            border:'0px solid green',
        },
        locationdropdown: {
            width: '190px',
            height: '40px',
            border: '0px solid  orange',
            position: 'relative',
            top: '2px',
            display: 'flex',
            fontSize:'12px',
        },
        locationdropdowniconstyle: {
            position: 'relative',
            top: '0px',
            width: '100%',
            position: 'relative',
        },
        locationiconon: {
            width: '14px',
            height: '18px',
            position: 'relative',
            right: '20px',
            fontsize:'12px',
        },
        arrowdropicon: {
            position: 'relative',
            left: '0px',
        },
        cartimage: {
            width: '90%',
            height: 'auto',
            border: '0px solid #E4E4E4',
            position: 'relative',
            top: '2px',
            left: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'space-evenly',
            marginBottom: '10px',
        },
        imgheight: {
            width: '20%',
            height: '140px',
            border: '0px solid blue',
            position: 'relative',
            top: '10px',
        },
        carttext: {
            width: '70%',
            height: 'auto',
            border: '0px solid orange',
            textAlign: 'left',
            position: 'relative',
            left: '50px',
        },
        carttextbookname: {
            font: ' 16px Arial, sans-serif',
            border: '0px solid green',
            position: 'relative',
            top: '8px',
        },
        carttextauthor: {
            fontSize: '12px',
            border: '0px solid green',
            color: 'grey',
            position: 'relative', top: '12px',
        },
        carttextpricebox: {
            display: 'flex',
            flexDirection: 'row',
            font: '13px Arial, sans-serif',
            position: 'relative',
            top: '20px',
            border: '0px solid orange',
            height: '15%'
        },
        symbolbox: {
            width: '100%',
            height: 'auto',
            border: '0px solid blue',
            position: 'relative',
            top: '29px',
            diplay:'flex',
            flexDirection:'row',
            justifycontent:'space-evenly',
        },
        carttextsymbolbox: {
            width: '10%',
            height: '6%',
            border: '1px solid grey',
            left: '0px',
            borderRadius: '10px',
            position: 'relative',
            textAlign: 'center',
        },
        symbolboxcount: {
            width: '20%',
            height: '6%',
            border: '1px solid grey',
             left: '5px',
            borderRadius: '5px',
            position: 'relative',
            textAlign: 'center'
        },
        symbolboxincrement: {
            width: '10%',
            height: '6%',
            border: '1px solid grey',
            left: '10px',
            borderRadius: '10px',
            position: 'relative',
            textAlign: 'center'
        },
        symbolboxdelete: {
            border: '0px solid grey',
            left: '8%',
            top:'0px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            width:'30%',
            height:'20px',
            borderRadius: '0px',
            position: 'relative',
            textAlign: 'center',
            fontSize: '14px',
        },
        placeorder: {
            width: '30%',
            // height: '45px',
            border: '0px solid yellow',
           
             position: 'relative',
             left: '70%',
            bottom: '3px',
            marginBottom: '10px',
        },
        placeorderhidden: {
            height: '40px',
            backgroundColor: '#3371B5',
            position: 'relative',
            left: '0px',
            top: '2px'
        },
        addressbox: {
            width: '65vw',
            height: '60px',
            border: '1px  solid #DCDCDC',
            position: 'relative',
            left: '120px',
            top: '40px',
            textAlign: 'left',
    
        },
        
        orderbox: {
            width: '65vw',
            height: '60px',
            border: '1px solid #DCDCDC',
            backgroundColor: 'white',
            position: 'relative',
            left: '120px',
            top: '50px',
            textAlign: 'left',
    
        },
        orderboxtwo: {
            width: '65vw',
            height: 'auto',
            border: '1px solid #DCDCDC',
            position: 'relative',
            left: '120px',
            top: '70px',
            textAlign: 'left',
    
        },
        orderboxtwospan: {
            position: 'relative', left: '20px', top: '20px',
            fontSize:'16px'
        },
        cartimagetwo: {
            width: '90%',
            height: '20%',
            border: '0px solid #E4E4E4',
            position: 'relative',
            top: '30px',
            left: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: '10px',
        },
        carttexttwo: {
            width: '65%',
            height: 'auto',
            border: '0px solid orange',
            textAlign: 'left',
            position: 'relative',
            left: '30px',
            top:'20px',
        },
        checkout: {
            width: '30%',
            height: '10%',
            border: '0px solid blue',
            position: 'relative',
            bottom: '-10px',
            left: '70%',
            marginBottom: '45px',
        },
        checkoutonclick: {
            width:'75%',
            position: 'relative', top: '25px',
            left: '0px',
            border: '1px solid green'
        },
    },
})

function MyCart(props) {

    const classes = useStyle();
    const [count, setCount] = useState(1)
    const navigate = useNavigate()
    const [inputDetails, setInputDetails] = useState({})
    const [hidden, setHidden] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [orderToggle, setOrderToggle] = useState(false)
    const [cartList, setCartList] = useState([])
    const [orderId, setOrderId] = useState([])

    const handleDelete = (id) => {
        console.log(id)
        let ob = { cartItem_id: id }
        deleteCartItem(ob).then((response) => {
            console.log(response, "deleted from Cart")
        }).catch((error) => console.log(error))
    }

    const getCart = () => {
        console.log("cart items")
        getCartItem().then((response) => {
            console.log(response)
            setCartList(response.data.result)
        }).catch((error) => console.log(error))
    }

    function decrementCount(id) {

        if (count > 1) {
            setCount(count => count - 1)

            let cartItem = {
                cartItem_id: id,
            }
            let quantity = {
                quantityToBuy: count - 1
            }
            console.log('object', quantity)
            cartItemQuantity(cartItem, quantity).then((response) => {
                console.log(response, "decrement response")
            }).catch((error) => { console.log(error); })
        }
        else {
            setCount(1)
        }
    }

    function incrementCount(id) {
        console.log(id, "id in incremeet")
        setCount(count => count + 1)
        let cartItem = {
            cartItem_id: id,
        }
        let quantity = {
            quantityToBuy: count + 1
        }

        cartItemQuantity(cartItem, quantity).then((response) => {
            console.log(response, "increment response")
        }).catch((error) => { console.log(error); })
    }

    useEffect(() => {
        getCart()
    }, [])


    const placedOrderCheckout = () => {
        console.log(cartList, "list of books")
        let orderList = [];

        for (let i = 0; i < cartList.length; i++) {
            let inputObj = {
                product_id: cartList[i].product_id._id,
                product_name: cartList[i].product_id.bookName,
                product_quantity: cartList[i].quantityToBuy,
                product_price: cartList[i].product_id.discountPrice,
            }
            orderList.push(inputObj);
        }
        console.log(orderList, "printing ordered data")
        let orderObj = { orders: orderList }
        addOrder(orderObj).then((response) => {
            console.log(response)
        }).catch((error) => { console.log(error) })
        navigate('/shopping')
    }

    const autoRefresh = () => {
        getCart()
    }

    const openOrderSummary = () => {
        setHidden(true)
       setOrderToggle(true)
    }



    const openCustomer = () => {
        setToggle(true)
        setHidden(true)
    }

    return (
        <div>
            {/* <Header /> */}
            <Box className={classes.mycarttext}

            >Home/<b>My cart</b></Box>

            <div className={classes.locationbox}>
                <div className={classes.dropdownbox}>
                    <p className={classes.mycartonefont}> My cart (1)
                        {/* <span style={{ fontSize: '30px' }}>Books</span> */}
                    </p>
                    <div className={classes.locationdropdown}>
                        <Button style={{ backgroundColor: 'white', color: 'black', border: '1px solid lightgrey', }} className={classes.locationdropdowniconstyle}
                            id="demo-customized-button"
                            aria-haspopup="true"
                            variant="contained"
                            disableElevation
                        >
                            < LocationOnIcon className={classes.locationiconon} style={{ color: '#A03037', }} />
                            Use current location
                            <ArrowDropDownIcon className={classes.arrowdropicon} style={{ color: '#DCDCDC', }} />
                        </Button>
                    </div>
                </div>
                <Box sx={{ height: '2vh' }}></Box>
                {
                    cartList.map((list) =>
                        <div className={classes.cartimage}>
                            <div className={classes.imgheight}>
                                <img src={require("./cover.png")} alt="img" style={{
                                    width: '100%',
                                    height: '85%',
                                    position: 'relative',
                                    left: '0px',
                                    top: '0px',
                                    border: '0px solid red',
                                    padding: '2px',
                                }}
                                    

                                />
                            </div>

                            <div className={classes.carttext}>

                                <span className={classes.carttextbookname}>
                                    {list.product_id.bookName}<br /></span>

                                <span className={classes.carttextauthor}

                                >
                                    {/* by steve kurg  */}
                                    by {list.product_id.author}
                                </span>

                                <div
                                    className={classes.carttextpricebox}
                                ><b>Rs.{list.product_id.discountPrice}</b> &nbsp; &nbsp;
                                    <span style={{ textDecoration: 'line-through' }}>
                                        Rs.{list.product_id.price}

                                    </span>
                                </div>
                                <div className={classes.symbolbox}>
                                    <button className={classes.carttextsymbolbox}
                                        onClick={() => { decrementCount(list._id); }} >&nbsp;-&nbsp; </button>
                                    <button className={classes.symbolboxcount}

                                    >&nbsp;&nbsp;&nbsp;{count}&nbsp;&nbsp;&nbsp; </button>
                                    <button className={classes.symbolboxincrement}
                                        onClick={() => { incrementCount(list._id); }}> &nbsp;+&nbsp; </button>
                                    <Button className={classes.symbolboxdelete} variant="text" style={{color:'black'}}
                                        onClick={() => { handleDelete(list._id); }}> Remove </Button>
                                    {/* incrementCount(list.product_id.id)     */}
                                    {/* <Button variant="text">Text</Button> */}

                                </div>
                            </div>
                        </div>
                    )
                }
                <div className={classes.placeorder}>
                    {
                        hidden ? null :
                            <Button variant="contained" className={classes.placeorderhidden}
                                onClick={openCustomer}>
                                Place Order</Button>
                    }
                </div>
            </div>
            <div>
                {
                    toggle ? <CartOrder openOrderSummary={openOrderSummary} /> :
                        <div className={classes.addressbox}>
                            <span style={{ color: '#333232', }} className={classes.addressboxspan}> Address Details </span>
                        </div>
                }
            </div>
            <div>
                {
                    orderToggle ?
                        <Box>
                            {
                                <div className={classes.orderboxtwo}>
                                    <span style={{ color: '#333232', }} className={classes.orderboxtwospan}>
                                        Order Summary </span>
                                    {
                                        cartList.map((list) => (
                                            <div className={classes.cartimagetwo}>
                                                <div className={classes.imgheight}>
                                                <img src={require("./cover.png")} alt="img"
                                                    style={{
                                                        
                                                        width: '100%',
                                    height: '75%',
                                    position: 'relative',
                                    left: '0px',
                                    top: '5px',
                                    border: '0px solid red',
                                    padding: '2px',
                                                    }} />
                                                    </div>

                                                <div className={classes.carttexttwo}>
                                                    <span className={classes.carttextbookname}>
                                                        {list.product_id.bookName} <br /></span>

                                                    <span className={classes.carttextauthor}>
                                                        by  {list.product_id.author}

                                                    </span>

                                                    <div
                                                        className={classes.carttextpricebox}
                                                    ><b>Rs. {list.product_id.discountPrice}</b> &nbsp; &nbsp;
                                                        <span style={{ textDecoration: 'line-through' }}>
                                                            Rs. {list.product_id.price}
                                                        </span>
                                                    </div>

                                                </div>
                                            </div>
                                        ))}
                                    <div className={classes.checkout}>
                                        <Button variant="contained" onClick={placedOrderCheckout}
                                            className={classes.checkoutonclick}

                                        >checkOut</Button>
                                    </div>
                                </div>
                            }
                        </Box>
                        :

                        <div className={classes.orderbox}>
                            <span style={{ color: '#333232', position: 'relative', left: '20px', top: '20px' }}>
                                Order Summary </span>


                        </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default MyCart
