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
    homewishlist: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '70%',
        position: 'relative',
        left: '150px', top: '15px',
        backgroundColor: 'white',
        border: '0px solid blue',
    },
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

        position: 'relative',
        top: '0px',
        borderRadius: '1px',
        // marginTop:'10px',
    },
    mywish: {
        width: '100px',
        height: '100px',
        fontWeight: 'bold',
        position: 'relative',
        fontSize: '14px',
        top: '15px',
        right: '400px',
        border: '0px solid green',
    },
    wishlistbookbox: {
        width: '100%',
        height: '150px',
        border: '1px solid #E4E4E4',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        top: '0px',

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
    deleteiconstyle: {
        width: '30px', height: '20px', position: 'relative', top: '45px',
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
        alignContent: 'center',

    },
    carttexttwowish: {
        width: '60%',
        height: 'auto',
        border: '0px solid orange',
        textAlign: 'left',
        position: 'relative',
        left: '40px',
    },
    carttextwishbookname: {
        font: ' 15px Arial, sans-serif', 
        color: '#0A0102',
        border: '0px solid green', 
        position: 'relative', top: '8px'
    },
    carttextwishauthor: {
        fontSize: '10px', border: '0px solid green', color: 'grey',
        position: 'relative', top: '7px',
    },
    carttextwishprice: {
        display: 'flex', flexDirection: 'row', font: '13px Arial, sans-serif',
        position: 'relative', top: '17px',
        border: '0px solid orange', height: '18%'
    },

    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        homewishlist: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '70%',
            position: 'relative',
            left: '60px', top: '15px',
            backgroundColor: 'white',
            border: '0px solid blue',
        },
        wishlistbox: {
            width: '68vw',
            height: 'auto',
            border: '0px solid #E4E4E4',
    
            position: 'relative',
            left: '60px',
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
    
            position: 'relative',
            top: '0px',
            borderRadius: '1px',
            // marginTop:'10px',
        },
        mywish: {
            width: '30%',
            height: '100px',
            fontWeight: 'bold',
            position: 'relative',
            fontSize: '14px',
            top: '15px',
            right: '30%',
            border: '0px solid green',
        },
        wishlistbookbox: {
            width: '100%',
            height: '150px',
            border: '1px solid #E4E4E4',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'relative',
            top: '0px',
    
        },
        listimageboxtext: {
            width: '61vw',
            height: '90%',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
        },
        cartimagetwowish: {
            width: '140px',
            height: '110px',
            border: '0px solid green',
            position: 'relative',
            top: '20px',
            left: '0px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center',
    
        },
        carttexttwowish: {
            width: '220px',
            height: 'auto',
            border: '0px solid orange',
            textAlign: 'left',
            position: 'relative',
            left: '30px',
        },
        carttextwishbookname: {
            font: ' 12px Arial, sans-serif', 
            color: '#0A0102',
            border: '0px solid green', 
            position: 'relative', top: '8px'
        },
        carttextwishauthor: {
            fontSize: '9px', border: '0px solid green', color: 'grey',
            position: 'relative', top: '7px',
        },
        carttextwishprice: {
            display: 'flex', flexDirection: 'row', font: '10px Arial, sans-serif',
            position: 'relative', top: '17px',
            border: '0px solid orange', height: '18%'
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        homewishlist: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '70%',
            position: 'relative',
            left: '90px', top: '15px',
            backgroundColor: 'white',
            border: '0px solid blue',
        },
        wishlistbox: {
            width: '68vw',
            height: 'auto',
            border: '0px solid #E4E4E4',
    
            position: 'relative',
            left: '90px',
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
    
            position: 'relative',
            top: '0px',
            borderRadius: '1px',
            // marginTop:'10px',
        },
        mywish: {
            width: '30%',
            height: '100px',
            fontWeight: 'bold',
            position: 'relative',
            fontSize: '14px',
            top: '15px',
            right: '35%',
            border: '0px solid green',
        },
        wishlistbookbox: {
            width: '68vw',
            height: '150px',
            border: '1px solid #E4E4E4',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'relative',
            top: '0px',
    
        },
        listimageboxtext: {
            width: '60vw',
            height: '90%',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        cartimagetwowish: {
            width: '200px',
            height: '110px',
            border: '0px solid green',
            position: 'relative',
            top: '20px',
            left: '0px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
    
        },
        carttexttwowish: {
            width: '350px',
            height: 'auto',
            border: '0px solid orange',
            textAlign: 'left',
            position: 'relative',
            left: '60px',
        },
        carttextwishbookname: {
            font: ' 14px Arial, sans-serif', 
            color: '#0A0102',
            border: '0px solid green', 
            position: 'relative', top: '8px',
            width:'20%',
            height:'18%',
        },
        carttextwishauthor: {
            fontSize: '10px', border: '0px solid green', color: 'grey',
            position: 'relative', top: '7px',
        },
        carttextwishprice: {
            display: 'flex', flexDirection: 'row', font: '12px Arial, sans-serif',
            position: 'relative', top: '17px',
            border: '0px solid orange', height: '18%'
        },
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        homewishlist: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '70%',
            position: 'relative',
            left: '120px', top: '15px',
            backgroundColor: 'white',
            border: '0px solid blue',
        },
        wishlistbox: {
            width: '68vw',
            height: 'auto',
            border: '0px solid #E4E4E4',
    
            position: 'relative',
            left: '120px',
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
    
            position: 'relative',
            top: '0px',
            
            borderRadius: '1px',
            // marginTop:'10px',
        },
        mywish: {
            width: '30%',
            height: '100px',
            fontWeight: 'bold',
            position: 'relative',
            fontSize: '14px',
            top: '15px',
            right: '38%',
            border: '0px solid green',
        },
        wishlistbookbox: {
            width: '100%',
            height: '150px',
            border: '1px solid #E4E4E4',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'relative',
            top: '0px',
    
        },
        listimageboxtext: {
            width: '60vw',
            height: '100%',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent:'center'
        },
        deleteicon: {
            width: '20%',
            height: '100%',
            border: '0px solid green',
        },
        deleteiconstyle: {
            width: '30px', height: '20px', position: 'relative', top: '45px',
        },
    
        cartimagetwowish: {
            width: '200px',
            height: '120px',
            border: '0px solid green',
            position: 'relative',
            top: '30px',
            left: '20px',
            display: 'flex',
            
    
        },
        carttexttwowish: {
            width: '350px',
            height: 'auto',
            border: '0px solid orange',
            textAlign: 'left',
            position: 'relative',
            left: '80px',
        },
        carttextwishbookname: {
            font: ' 15px Arial, sans-serif', 
            color: '#0A0102',
            border: '0px solid green', 
            position: 'relative', top: '8px'
        },
        carttextwishauthor: {
            fontSize: '10px', border: '0px solid green', color: 'grey',
            position: 'relative', top: '7px',
        },
        carttextwishprice: {
            display: 'flex', flexDirection: 'row', font: '13px Arial, sans-serif',
            position: 'relative', top: '17px',
            border: '0px solid orange', height: '18%'
        },
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
        let obje = { cartItem_id: id }
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
            <Box onClick={openHome} className={classes.homewishlist}
            >Home/<b>Wishlist</b></Box>

            <Box className={classes.wishlistbox}>

                <Box className={classes.wishtext}>
                    <span className={classes.mywish}>My Wishlist</span>
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
                                                width: '100%', height: '80%', position: 'relative', left: '10px',
                                                top: '5px', border: '0px solid red',
                                            }} />

                                        <div className={classes.carttexttwowish}>
                                            <span className={classes.carttextwishbookname}>
                                                {list.product_id.bookName}   <br /></span>

                                            <span
                                                className={classes.carttextwishauthor}>
                                                by {list.product_id.author}

                                            </span>

                                            <div className={classes.carttextwishprice}

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
                                        onClick={() => { onDeleteWishlist(list.product_id._id); }}
                                        style={{ color: '#9D9D9D' }} className={classes.deleteiconstyle} />
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