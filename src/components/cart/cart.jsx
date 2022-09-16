import React,{useState, useEffect} from "react";
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
import { deleteCartItem, getCartItem } from "../../services/dataservice";
import {cartItemQuantity} from '../../services/dataservice';



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
        alignItems:'space-evenly',
        marginBottom:'10px',
    },
    imgheight: {
        width: '10%',
        height: '100px',
        border: '0px solid blue',
        position:'relative',
        top:'12px',
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
        height:'auto',
        border:'0px solid blue',
        position:'relative',
        top:'15px',
    },
    placeorder:{
        width:'20%',
        height:'auto',
        border:'0px solid yellow',
        position:'relative',
        left:'600px',
        bottom:'3px',
        marginBottom:'10px',
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

    const classes = useStyle();
    const [count, setCount] = useState(1)

    const [hidden,setHidden] = useState(false)
    const [toggle,setToggle] = useState(false)
    const [orderToggle, setOrderToggle] = useState(false)
    const [cartList, setCartList] = useState([])
    
    const handleDelete = (id) =>{
        console.log(id)
        let ob = {cartItem_id:id}
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

    const decrementCount = () =>{
        if(count<2){
            setCount(1)
        }
        else{
            setCount(count -  1 )
        }
        // let obje =  {cartItem_id:id,quantityToBuy:count-1}
        // console.log(obje)
        // cartItemQuantity(obje).then((response) =>{
        //     console.log(response,"decrement value")
        // }).catch((error)=>console.log(error))

     }

    const incrementCount = () =>{
        setCount(count +  1 )
        // let obje =  {cartItem_id:id,quantityToBuy:count + 1}
        // console.log(obje)
        // cartItemQuantity(obje).then((response) =>{
        //     console.log(response,"decrement value")
        // }).catch((error)=>console.log(error))

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

    const autoRefresh = () =>{
        getCart()
    }

    const openOrderSummary = ()=>{
        setOrderToggle(true)
        setHidden(true)
    }
    
  
    const openCustomer = ()=>{
        setToggle(true)
    }

    return (
        <div>
            {/* <Header /> */}
            <Box  style={{
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
                <Box sx={{height:'2vh'}}></Box>
                {
                    cartList.map((list)=>
                <div className={classes.cartimage}>
                    <div className={classes.imgheight}>
                    <img src={require("./cover.png")} alt="img"
                        style={{
                            width: '100%', height: '70%', position: 'relative',left:'10px',
                            top: '2px', border: '0px solid red', padding: '2px',
                        }} />
                    </div>

                    <div className={classes.carttext}>

                        <span style={{ font: ' 15px Arial, sans-serif', color: '#0A0102', 
                        border: '0px solid green',position:'relative',top:'10px' }}>
                     {list.product_id.bookName}<br /></span>

                        <span style={{ fontSize: '10px', border: '0px solid green', color: 'grey', 
                        position: 'relative', top: '4px', }}>
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
                            <button style={{width:'24px',height:'24px',border:'1px solid grey',left:'0px',
                            borderRadius:'10px',position:'relative',textAlign:'center'}} 
                            onClick={decrementCount} >&nbsp;-&nbsp; </button>
                            <button style={{width:'41px',height:'24px',border:'1px solid grey',left:'10px',
                            borderRadius:'5px',position:'relative',textAlign:'center'}}>&nbsp;&nbsp;&nbsp;{count}&nbsp;&nbsp;&nbsp; </button>
                            <button style={{width:'24px',height:'24px',border:'1px solid grey',left:'20px',
                            borderRadius:'10px',position:'relative',textAlign:'center'}} 
                            onClick={incrementCount}> &nbsp;+&nbsp; </button>
                            <button style={{border:'0px solid grey',left:'45px',
                            borderRadius:'0px',position:'relative',textAlign:'center',fontSize:'14px'}} 
                            onClick={()=>{handleDelete(list._id); }}> Remove </button>
                                                    {/* incrementCount(list.product_id.id)     */}
                        </div>
                    </div>
                </div>
                )
                }
                <div className={classes.placeorder}>
                    {
                        hidden ? <div></div>:
                <Button variant="contained" style={{height:'27px',backgroundColor:'#3371B5',position:'relative',
                left:'0px',top:'2px'}} 
                onClick={openCustomer}>
                    Place Order</Button>
                    }   
                </div>
            </div>
            <div>
                {
                    toggle ?<CartOrder openOrderSummary = {openOrderSummary}/>: 
                    <div className={classes.addressbox}>
                        <span style={{color:'#333232',position:'relative',left:'20px',top:'20px'}}> Address Details </span>
                    </div>
                    
                }
            </div>
            <div>
                {
                    orderToggle ? <OrderDetails/>:
                    <div className={classes.orderbox}>
                    <span style={{color:'#333232',position:'relative',left:'20px',top:'20px'}}> Order Summary </span>
                 </div> 
                }
            </div>
            
            

<Footer />

        </div>
    )
}

export default MyCart
