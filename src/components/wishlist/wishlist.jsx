import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/material";
import Header from "../../header/header";
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import RouterOne from "../router/router";
import { deleteWishList, getWishList, addWishList } from "../../services/dataservice";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const useStyle = makeStyles({
    wishlistbox: {
        width: '68vw',
        height: 'auto',
        border: '0px solid #E4E4E4',

        position: 'relative',
        left: '150px',
        top: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
       
    },
    wishtext: {
        width: '100%',
        height: '70px',
        backgroundColor: '#F5F5F5',
        border: '1px solid #E4E4E4',

        position:'relative',
        top:'0px',
        borderRadius: '1px',
       // marginTop:'10px',
    },
    wishlistbookbox: {
        width: '100%',
        height: '150px',
        border: '1px solid #E4E4E4',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position:'relative',
        top:'0px',
        
    },
    listimageboxtext: {
        width: '90%',
        height: '100%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    deleteicon: {
        width: '20%',
        height: '100%',
        border: '0px solid green',
    },
   
    cartimagetwowish: {
        width: '48%',
        height: '150px',
        border: '0px solid green',
        position: 'relative',
        top: '30px',
        left: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent:'center',
       
    },
    carttexttwowish: {
        width: '60%',
        height: 'auto',
        border: '0px solid orange',
        textAlign: 'left',
        position: 'relative',
        left: '40px',
    },
})

function Wishlist(props) {

    const classes = useStyle();
    const navigate = useNavigate();
    const [wishList, setWishList] = useState([])
    const openHome = () => {
        navigate('/dashboard')
    }
   

    const onDeleteWishlist = (id) => {
        console.log(id)
        let obje ={ cartItem_id: id }
        console.log(obje)
        deleteWishList(obje).then((response) => {
            console.log(response, "deleted from wishlist")
        }).catch((error) => console.log(error))
    }
    useEffect(() => {
        getWishData()
    }, [])

    const getWishData = () => {
        getWishList().then((response) => {
            console.log(response)
            setWishList(response.data.result)
        }).catch((error) => console.log(error))
    }


    return (
        <div>
            {/* <Header /> */}
            <Box onClick={openHome} style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '70%',
                position: 'relative', left: '150px', top: '15px', backgroundColor: 'white', border: '0px solid blue',
            }}>Home/<b>Wishlist</b></Box>

            <Box className={classes.wishlistbox}>
                
                <Box className={classes.wishtext}>
                    <span style={{width:'100px', height:'100px',fontWeight: 'bold', 
                     position: 'relative', fontSize:'14px',top:'15px',
                    right: '400px' ,border:'0px solid green',}}>My Wishlist</span>
                </Box>
                {/* <Box sx={{ height: '2vh' }}></Box> */}
                <Box>
                    {
                        wishList.map((list) =>
                            <Box className={classes.wishlistbookbox}>
                                <Box className={classes.listimageboxtext}>

                                    <div className={classes.cartimagetwowish}>
                                        <img src={require("./cover.png")} alt="img"
                                            style={{
                                                width: '20%', height: '75px', position: 'relative', left: '10px',
                                                top: '5px', border: '0px solid red', 
                                            }} />

                                        <div className={classes.carttexttwowish}>
                                            <span style={{
                                                font: ' 15px Arial, sans-serif', color: '#0A0102',
                                                border: '0px solid green', position: 'relative', top: '8px'
                                            }}>
                                                {list.product_id.bookName}   <br /></span>

                                            <span style={{
                                                fontSize: '10px', border: '0px solid green', color: 'grey',
                                                position: 'relative', top: '7px',
                                            }}>
                                                by {list.product_id.author}

                                            </span>

                                            <div
                                                style={{
                                                    display: 'flex', flexDirection: 'row', font: '13px Arial, sans-serif',
                                                    position: 'relative', top: '17px',
                                                    border: '0px solid orange', height: '18%'
                                                }}
                                            ><b>Rs.{list.product_id.discountPrice}</b> &nbsp; &nbsp;
                                                <span style={{ textDecoration: 'line-through' }}>
                                                    Rs.{list.product_id.price}
                                                </span>
                                            </div>

                                        </div>
                                    </div>

                                </Box>
                                <Box className={classes.deleteicon}>
                                    < DeleteOutlinedIcon size="small"
                                     onClick={()=>{ onDeleteWishlist(list.product_id._id); }}
                                        style={{ width: '30px', height: '20px', position: 'relative', top: '45px', color: '#9D9D9D' }} />
                                </Box>
                            </Box>
                        )
                    }
                </Box>

            </Box>
        </div>

    )
}
export default Wishlist