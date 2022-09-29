import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import StarRateIcon from '@mui/icons-material/StarRate';


const useStyle = makeStyles({
    bookcontainer: {
        width: '16vw',
        height: '40vh',
        border: '1px solid grey',
        boxShadow: '2px',
        position: 'relative',
        top: '10px',
        left: '70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        alignContent: 'space-around',
        marginRight: '30px',
        marginBottom: '20px',
    },
    containerimage: {
        width: '100%',
        height: '59%',
        border: '0px solid green',
        backgroundColor: '#E2E2E2',

    },
    textcontainer: {
        width: '80%',
        height: '41%',
        border: '0px solid orange',
        textAlign: 'left',
        position: 'relative',
        left: '20px',
    },
    descriptiontextbook: {
        font: ' 12px Arial, sans-serif',
        color: 'black',
        border: '0px solid green',
    },
    authortextbook: {
        fontSize: '9px',
        border: '0px solid green',
        color: 'grey',
    },
    ratingbox: {
        width: '55%',
        height: '15%',
        border: '0px solid red',
        fontSize: '10px',
        position: 'relative',
        borderRadius: '3px',
        color: 'white',
        display: 'flex',
        flexDirection: 'row'
    },
    ratingtext: {
        backgroundColor: 'green',
        width: '18px',
        height: '15px',
    },
    ratingicon: {
        color: 'white',
        backgroundColor: 'green',
        // width: '4px',
        // height: '2px',
    },
    quantitytextbox: {
        color: 'black',
        fontSize: '6px',
    },
    pricebox: {
        display: 'flex',
        flexDirection: 'row',
        font: '10px Arial, sans-serif',
        position: 'relative',
        top: '5px',
        border: '0px solid orange',
        height: '18%',
        width: '100%',
    },
    pricetext: {
        textDecoration: 'line-through'
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        bookcontainer: {
            width: '35vw',
            height: '40vh',
            border: '1px solid grey',
            boxShadow: '2px',
            position: 'relative',
            top: '10px',
            left: '90px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            alignContent: 'space-around',
            marginRight: '30px',
            marginBottom: '20px',
        },
        containerimage: {
            width: '100%',
            height: '50%',
            border: '0px solid green',
            backgroundColor: '#E2E2E2',

        },
        textcontainer: {
            width: '100%',
            height: '50%',
            border: '0px solid orange',
            textAlign: 'left',
            position: 'relative',
            left: '10px',
        },
        descriptiontextbook: {
            font: ' 10px Arial, sans-serif',
            color: 'black',
            border: '0px solid green',
        },
        authortextbook: {
            fontSize: '8px',
            border: '0px solid green',
            color: 'grey',
        },
        ratingbox: {
            width: '55%',
            height: '15%',
            border: '0px solid red',
            fontSize: '10px',
            position: 'relative',
            borderRadius: '3px',
            color: 'white',
            display: 'flex',
            flexDirection: 'row'
        },
        ratingtext: {
            backgroundColor: 'green',
            width: '18px',
            height: '15px',
        },
        ratingicon: {
            color: 'white',
             backgroundColor: 'green',
            width: '8px',
            height: '18px',
        },
        quantitytextbox: {
            color: 'black',
            fontSize: '6px',
        },
        pricebox: {
            display: 'flex',
            flexDirection: 'row',
            font: '9px Arial, sans-serif',
            position: 'relative',
            top: '5px',
            border: '0px solid orange',
            height: '18%',
            width: '100%',
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {

        bookcontainer: {
            width: '30vw',
            height: '42vh',
            border: '1px solid grey',
            boxShadow: '2px',
            position: 'relative',
            top: '10px',
            left: '65px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            alignContent: 'space-around',
            marginRight: '30px',
            marginBottom: '20px',
        },
        containerimage: {
            width: '100%',
            height: '50%',
            border: '0px solid green',
            backgroundColor: '#E2E2E2',

        },
        textcontainer: {
            width: '100%',
            height: '50%',
            border: '0px solid orange',
            textAlign: 'left',
            position: 'relative',
            left: '10px',
        },
        descriptiontextbook: {
            font: ' 11px Arial, sans-serif',
            color: 'black',
            border: '0px solid green',
        },
        authortextbook: {
            fontSize: '9px',
            border: '0px solid green',
            color: 'grey',
        },
        ratingbox: {
            width: '55%',
            height: '15%',
            border: '0px solid red',
            fontSize: '10px',
            position: 'relative',
            borderRadius: '3px',
            color: 'white',
            display: 'flex',
            flexDirection: 'row'
        },
        ratingtext: {
            backgroundColor: 'green',
            width: '18px',
            height: '15px',
        },
        ratingicon: {
            color: 'white',
             backgroundColor: 'green',
            width: '8px',
            height: '18px',
        },
        quantitytextbox: {
            color: 'black',
            fontSize: '6px',
        },
        pricebox: {
            display: 'flex',
            flexDirection: 'row',
            font: '10px Arial, sans-serif',
            position: 'relative',
            top: '5px',
            border: '0px solid orange',
            height: '18%',
            width: '100%',
        },
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        bookcontainer: {
            width: '22vw',
            height: '45vh',
            border: '1px solid grey',
            boxShadow: '2px grey',
            position: 'relative',
            top: '10px',
            left: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            alignContent: 'space-around',
            marginRight: '30px',
            marginBottom: '20px',
        },
        containerimage: {
            width: '100%',
            height: '50%',
            border: '0px solid green',
            backgroundColor: '#E2E2E2',

        },
        textcontainer: {
            width: '100%',
            height: '50%',
            border: '0px solid orange',
            textAlign: 'left',
            position: 'relative',
            left: '10px',
        },
        descriptiontextbook: {
            font: ' 12px Arial, sans-serif',
            color: 'black',
            border: '0px solid green',
        },
        authortextbook: {
            fontSize: '9px',
            border: '0px solid green',
            color: 'grey',
        },
        ratingbox: {
            width: '55%',
            height: '15%',
            border: '0px solid red',
            fontSize: '10px',
            position: 'relative',
            borderRadius: '3px',
            color: 'white',
            display: 'flex',
            flexDirection: 'row'
        },
        ratingtext: {
            backgroundColor: 'green',
            width: '18px',
            height: '15px',
            fontSize:'10px',
        },
        ratingicon: {
            color: 'white',
             backgroundColor: 'green',
            width: '8px',
            height: '18px',
        },
        quantitytextbox: {
            color: 'black',
            fontSize: '6px',
        },
        pricebox: {
            display: 'flex',
            flexDirection: 'row',
            font: '10px Arial, sans-serif',
            position: 'relative',
            top: '5px',
            border: '0px solid orange',
            height: '18%',
            width: '100%',
        },
        
    },
})

function Book(props) {
    const classes = useStyle();
    const [inputFields, setInputFields] = useState({
        bookName: '', discountPrice: '',
        quantity: '', price: ''
    })


    return (
        <div>
            <div className={classes.bookcontainer}>
                <div className={classes.containerimage}>
                    <img src={require("./cover.png")} alt="img"
                        style={{
                            width: '50%', height: '85%', position: 'relative',
                            top: '10px', border: '0px solid red'
                        }} />
                </div>
                <div className={classes.textcontainer}>
                    <span className={classes.descriptiontextbook}>
                     
                        {/* Don't Make Me Think */}
                         {props.book.bookName} 
                        <br /></span>
                    <span className={classes.authortextbook}>
                        {/* by steve kurg */}
                        by {props.book.author}
                    </span>
                    <div className={classes.ratingbox}>
                        <span className={classes.ratingtext}>4.1 &nbsp;</span>
                        < StarRateIcon size="small" style={{width:'8px',height:'15px'}}
                            className={classes.ratingicon} />
                        <p className={classes.quantitytextbox}>&nbsp;&nbsp;(
                            {props.book.quantity}
                            )</p>
                    </div>

                    <div
                        className={classes.pricebox}
                    ><b> Rs.{props.book.discountPrice} 
                        </b> &nbsp; &nbsp;
                        <span className={classes.pricetext} >
                            {/* Rs.2050 */}
                             Rs.{props.book.price} 
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Book