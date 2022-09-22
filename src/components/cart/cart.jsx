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
    locationbox: {
        width: '59vw',
        height: 'auto',
        border: '1px solid #707070',
        position: 'relative',
        left: '140px',
        top: '20px',
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
    cartimage: {
        width: '90%',
        height: 'auto',
        border: '1px solid #E4E4E4',
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
        width: '10%',
        height: '100px',
        border: '0px solid blue',
        position: 'relative',
        top: '12px',
    },
    carttext: {
        width: '60%',
        height: 'auto',
        border: '0px solid orange',
        textAlign: 'left',
        position: 'relative',
        left: '40px',
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
    addressbox: {
        width: '805px',
        height: '60px',
        border: '1px solid #707070',
        position: 'relative',
        left: '140px',
        top: '40px',
        textAlign: 'left',

    },
    orderbox: {
        width: '805px',
        height: '70px',
        border: '1px solid #707070',
        backgroundColor: 'white',
        position: 'relative',
        left: '140px',
        top: '60px',
        textAlign: 'left',

    },
    orderboxtwo: {
        width: '805px',
        height: 'auto',
        border: '1px solid #707070',
        position: 'relative',
        left: '140px',
        top: '80px',
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
        bottom:'-10px',
        left: '600px',
        marginBottom: '45px',
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
        marginBottom:'10px',
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

function MyCart(props) {

    const classes = useStyle();
    const [count, setCount] = useState(1)
    const navigate = useNavigate()
    const [inputDetails,setInputDetails] = useState({})
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
            setCount(count =>count - 1)

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
        console.log(id,"id in incremeet")
        setCount(count =>count + 1)
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


    // useEffect(() => {
    //     handleDelete()
    // }, [])


    //  const autoRefreshDelete=()=>{
    //     handleDelete()
    //      }


    const placedOrderCheckout = () => {
        console.log(cartList, "list of books")
        let orderList = [];

        for (let i = 0;i < cartList.length; i++) {
            let inputObj = {
                product_id: cartList[i].product_id._id,
                product_name: cartList[i].product_id.bookName,
                product_quantity: cartList[i].quantityToBuy,
                product_price: cartList[i].product_id.discountPrice,
            }
            orderList.push(inputObj);
        }
        console.log(orderList,"printing ordered data")
        let orderObj = {orders:orderList}
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

    // const openCheckout = ()=>{
    //     setOrderId(true)
    // }

    const openCustomer = () => {
        setToggle(true)
        setHidden(true)
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
                            border: '1px solid lightgrey', fontSize: '12px', width: '100%', position: 'relative',
                        }}
                            id="demo-customized-button"
                            aria-haspopup="true"
                            variant="contained"
                            disableElevation
                        >
                            < LocationOnIcon style={{ color: '#A03037', width: '14px', height: '20px', position: 'relative', right: '20px' }} />
                            Use current location
                            <ArrowDropDownIcon style={{ color: '#DCDCDC', position: 'relative', left: '30px', }} />
                        </Button>
                    </div>
                </div>
                <Box sx={{ height: '2vh' }}></Box>
                {
                    cartList.map((list) =>
                        <div className={classes.cartimage}>
                            <div className={classes.imgheight}>
                                <img src={require("./cover.png")} alt="img"
                                    style={{
                                        width: '100%', height: '70%', position: 'relative', left: '10px',
                                        top: '2px', border: '0px solid red', padding: '2px',
                                    }} />
                            </div>

                            <div className={classes.carttext}>

                                <span style={{
                                    font: ' 15px Arial, sans-serif', color: '#0A0102',
                                    border: '0px solid green', position: 'relative', top: '10px'
                                }}>
                                    {list.product_id.bookName}<br /></span>

                                <span style={{
                                    fontSize: '10px', border: '0px solid green', color: 'grey',
                                    position: 'relative', top: '4px',
                                }}>
                                    {/* by steve kurg  */}
                                    by {list.product_id.author}
                                </span>

                                <div
                                    style={{
                                        display: 'flex', flexDirection: 'row', font: '13px Arial, sans-serif',
                                        position: 'relative', top: '9px',
                                        border: '0px solid orange', height: '15%'
                                    }}
                                ><b>Rs.{list.product_id.discountPrice}</b> &nbsp; &nbsp;
                                    <span style={{ textDecoration: 'line-through' }}>
                                        Rs.{list.product_id.price}

                                    </span>
                                </div>
                                <div className={classes.symbolbox}>
                                    <button style={{
                                        width: '24px', height: '24px', border: '1px solid grey', left: '0px',
                                        borderRadius: '10px', position: 'relative', textAlign: 'center'
                                    }}
                                        onClick={()=>{decrementCount(list._id);}} >&nbsp;-&nbsp; </button>
                                    <button style={{
                                        width: '41px', height: '24px', border: '1px solid grey', left: '10px',
                                        borderRadius: '5px', position: 'relative', textAlign: 'center'
                                    }}>&nbsp;&nbsp;&nbsp;{count}&nbsp;&nbsp;&nbsp; </button>
                                    <button style={{
                                        width: '24px', height: '24px', border: '1px solid grey', left: '20px',
                                        borderRadius: '10px', position: 'relative', textAlign: 'center'
                                    }}
                                        onClick={()=>{incrementCount(list._id);}}> &nbsp;+&nbsp; </button>
                                    <button style={{
                                        border: '0px solid grey', left: '45px',
                                        borderRadius: '0px', position: 'relative', textAlign: 'center', fontSize: '14px'
                                    }}
                                        onClick={() => { handleDelete(list._id); }}> Remove </button>
                                    {/* incrementCount(list.product_id.id)     */}
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className={classes.placeorder}>
                    {
                        hidden ? null :
                            <Button variant="contained" style={{
                                height: '27px', backgroundColor: '#3371B5', position: 'relative',
                                left: '0px', top: '2px'
                            }}
                                onClick={openCustomer}>
                                Place Order</Button>
                    }
                </div>
            </div>
            <div>
                {
                    toggle ? <CartOrder openOrderSummary={openOrderSummary} /> :
                        <div className={classes.addressbox}>
                            <span style={{ color: '#333232', position: 'relative', left: '20px', top: '20px' }}> Address Details </span>
                        </div>
                }
            </div>
            <div>
                {
                    orderToggle ? 
                     <Box>
                        {
                        <div className={classes.orderboxtwo}>
                <span style={{ color: '#333232', position: 'relative', left: '20px', top: '20px' }}>
                     Order Summary </span> 
                     {
                     cartList.map((list) =>(
                <div className={classes.cartimagetwo}>
                    <img src={require("./cover.png")} alt="img"
                        style={{
                            width: '7%',height:'65px', position: 'relative', left: '10px',
                            top: '5px', border: '0px solid red', padding:'5px',
                        }} />

                    <div className={classes.carttexttwo}>
                         <span style={{
                            font: ' 15px Arial, sans-serif', color: '#0A0102',
                            border: '0px solid green', position: 'relative', top: '5px'
                        }}>
                             {list.product_id.bookName} <br /></span>

                        <span style={{
                            fontSize: '10px', border: '0px solid green', color: 'grey',
                            position: 'relative', top: '5px',
                        }}>
                            by  {list.product_id.author}
                         
                         </span>  

                        <div
                            style={{
                                display: 'flex', flexDirection: 'row', font: '13px Arial, sans-serif',
                                position: 'relative', top: '7px',
                                border: '0px solid orange', height: '18%'
                            }}
                        ><b>Rs. {list.product_id.discountPrice}</b> &nbsp; &nbsp;
                            <span style={{ textDecoration: 'line-through' }}>
                                Rs. {list.product_id.price}
                            </span>
                        </div> 

                     </div>
                </div> 
                )) }
                <div className={classes.checkout}>
                    <Button variant="contained" onClick = {placedOrderCheckout}
                     style={{ width: '150px',position:'relative',top:'25px',
                     border:'0px solid green' }}>checkOut</Button>
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
