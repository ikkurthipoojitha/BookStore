import * as React from 'react';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { makeStyles } from '@mui/styles';
import Header from '../../header/header';
import StarRateIcon from '@mui/icons-material/StarRate';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Footer from '../footer/footer';
import { Box } from "@mui/material";
import { addToCart, getCartItem, getWishList } from '../../services/dataservice';
import { addWishList } from '../../services/dataservice';
import { useState } from 'react';
import { cartItemQuantity } from '../../services/dataservice';
import { useNavigate } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import { useEffect } from 'react';


const useStyle = makeStyles({
    detailmaincontainer: {
        width: '990px',
        height: 'auto',
        position: 'relative',
        // bottom: '5px',
        bottom: '35px',
        left: '75px',
        opacity: '1',
        border: '0px solid green',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    smallimages: {
        width: '5%',
        height: '20%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    bookimage: {
        width: '35%',
        height: '80%',
        position: 'relative',
        // left:'100px',
        border: '0px solid orange',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    imgborder: {
        width: '85%',
        height: '40%',
        border: '1px solid grey',
        position: 'relative',
        marginRight: '20px',
    },
    largesummarybook: {
        width: '90%',
        height: '90%',
        position: 'relative',
        top: '10px',
        left: '0px',
        border: '0px solid lightgrey',
        padding: '7px'
    },
    wishlistbutton: {
        width: '300px',
        height: '10%',
        border: '0px solid blue',
        position: 'relative',
        left: '2px',
        top: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailscontainer: {
        width: '55%',
        height: 'auto',
        position: 'relative',
        // left:'100px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    },
    line: {
        width: '95%',
        //height:'1px',
        border: '1px solid lightgrey',
        position: 'relative',
        top: '40px',
        left: '20px'
    },
    linetwo: {
        width: '95%',
        //height:'1px',
        border: '1px solid lightgrey',
        position: 'relative',
        top: '70px',
        left: '20px'
    },

    descriptionbook: {
        width: '95%',
        height: '180px',
        position: 'relative',
        top: '50px',
        left: '20px',
        border: '0px solid violet',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    feedback: {
        width: '95%',
        height: '25%',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'relative',
        left: '20px',
        top: '70px',
    },
    ratingcontainer: {
        width: '100%',
        height: '180px',
        border: '0px solid grey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#F5F5F5 ',
        position: 'relative',
        top: '10px',
    },
    reviewcontainer: {
        width: '100%',
        height: '160px',
        position: 'relative',
        top: '90px',
        left: '10px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'flex-start'
    },
    count: {
        width: '12vw',
        height: '5vh',
        border: '0px solid green',
        position: 'relative',
        top: '0px',
        left: '0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
    hometextbook: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'black', width: '80vw',
        height: '6%',
        position: 'relative',
        left: '0px',
        bottom: '48px',
        backgroundColor: 'white',
        border: '0px solid red',
    },
    imagebooksummary: {
        width: '90%',
        height: '50%',
        position: 'relative',

        top: '0px',

        padding: '2px',
    },
    
    addtobagbox: {
        width: '45%',
        height: '75%',
        color: 'white',

    },
    decrementwidth:{
        width: '14%'
    },
    incrementwidth:{
        width: '14%'
    },
    numberwidth:{
        width: '30%'
    },
    addtowishlistbookbox: {
        width: '45%',
        height: '75%',
        color: 'white',

    },
    addwishlistbox: {
        height: '20px'
    },
    addwishlistremove: {
        width: '45%',
        height: '75%',
        border: '1px solid lightgrey'
    },
    favoriteiconheight: {
        height: '20px'
    },
    booksummarydescription: {
        font: ' 25px Arial, sans-serif',
        fontWeight: '20px',
        color: 'black',
        border: '0px solid green',
        textAlign: 'left',
        position: 'relative',
        left: '20px',
        top: '0px'
    },
    booksummaryauthor: {
        fontSize: '15px',
        border: '0px solid green',
        color: 'grey',
        position: 'relative',
        top: '5px',
        left: '20px',
    },
    spanquantitybox: {
        width: '45%',
        height: '4%',
        border: '0px solid red',
        position: 'relative',
        top: '20px',
        left: '20px',
        borderRadius: '3px',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
    },
    spanbackgroundbox: {
        fontSize: '18px',
        backgroundColor: 'green', height: '24px',
    },
    spanstarrate: {
        color: 'white',
        backgroundColor: 'green',
        width: '20px',
        height: '24px',
        position: 'relative',
        top: '0px',
    },
    spanparafont: {
        fontSize: '9px'
    },
    divpricebox: {
        display: 'flex',
        flexDirection: 'row',
        font: '18px Arial, sans-serif',
        position: 'relative',
        border: '0px solid orange',
        height: '6%',

        top: '30px',
        left: '20px',
    },
    descriptionbooktitle: {
        fontSize: '20px',
        color: 'grey',
        textAlign: 'left',
    },
    descriptionbooktext: {
        fontSize: '18px',
        color: 'black',
        textAlign: 'left',
        position: 'relative',
        top: '5px',
        left: '10px',
    },
    feedbackfont: {
        fontSize: '20px',
        textAlign: 'left'
    },
    overallfeedbackbox: {
        fontSize: '15px',
        position: 'relative',
        top: '10px',
        left: '20px',
        textAlign: 'left',
    },
    feedbackrating: {
        position: 'relative', top: '15px', left: '20px'
    },
    feedbacktextfield: {
        width: '92%',
        color: 'lightgrey',
        backgroundColor: 'white',
        position: 'relative',
        top: '20px', left: '20px'
    },
    feedbacksubmitbutton: {
        width: '15%',
        height: '15%',
        border: '0px solid red',
        position: 'relative',
        left: '420px',
        top: '30px'
    },
    reviewParabox: {
        width: '30%',
        height: '15%',
        border: '0px solid green',
        left: '0px',
        position: 'relative',
        borderRadius: '0px',
    },
    reviewspannamebox: {
        border: '1px solid grey',
        borderRadius: '5px',
        position: 'relative',
    },
    reviewratingbox: {
        position: 'relative',
        bottom: '5px', left: '50px',
    },
    reviewdescriptionbox: {
        width: '85%',
        position: 'relative',
        bottom: '4px',
        left: '55px',
        textAlign: 'left',
        fontSize: '15px',
    },

    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        hometextbook: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            color: 'black', width: '100%',
            height: '3%',
            position: 'relative',
            left: '0px',
            bottom: '40px',
            backgroundColor: 'white',
            border: '0px solid red',
        },
        detailmaincontainer: {
            width: '320px',
            height: 'auto',
            position: 'relative',
            // bottom: '5px',
            bottom: '35px',
            left: '75px',
            opacity: '1',
            border: '0px solid green',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
    
        },
        smallimages: {
           display:'none',
        },
        bookimage: {
            width: '95%',
            height: '80%',
            position: 'relative',
            // left:'100px',
            border: '0px solid orange',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        imgborder: {
            width: '85%',
            height: '40%',
            border: '1px solid grey',
            position: 'relative',
            marginRight: '20px',
        },
        largesummarybook: {
            width: '90%',
            height: '90%',
            position: 'relative',
            top: '4px',
            left: '0px',
            border: '0px solid lightgrey',
            padding: '7px'
        },
        wishlistbutton: {
            width: '230px',
            height: '8%',
            border: '0px solid blue',
            position: 'relative',
            left: '5px',
            top: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        addtobagbox: {
            width: '99%',
            height: '25%',
            color: 'white',
            fontSize:'4px',
            position:'relative',
            left:'10px',
        },
       
        count: {
            width: '85%',
            height: '5vh',
            border: '0px solid green',
            position: 'relative',
            top: '0px',
            left: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'white',
        },
        decrementwidth:{
            width: '17px'
        },
        incrementwidth:{
            width: '17px'
        },
        numberwidth:{
            width: '35px'
        },
        addtowishlistbookbox: {
            width: '85%',
            height: '55%',
            color: 'white',
            position:'relative',
            top:'0px',
            left:'15px',
    
        },
        addwishlistbox: {
            height: '20px'
        },
        addwishlistremove: {
            width: '80%',
            height: '34px',
            border: '1px solid lightgrey',
            position:'relative',
            top:'0px',
            left:'15px',
        },
        favoriteiconheight: {
            height: '20px'
        },
        detailscontainer: {
            width: '88%',
            height: 'auto',
            position: 'relative',
             right:'25px',
            top:'35px',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        },
        line: {
            width: '95%',
            //height:'1px',
            border: '1px solid lightgrey',
            position: 'relative',
            top: '40px',
            left: '20px'
        },
        linetwo: {
            width: '95%',
            //height:'1px',
            border: '1px solid lightgrey',
            position: 'relative',
            top: '70px',
            left: '20px'
        },
    
        descriptionbook: {
            width: '95%',
            height: '140px',
            position: 'relative',
            top: '50px',
            left: '20px',
            border: '0px solid violet',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        booksummarydescription: {
            font: ' 22px Arial, sans-serif',
            fontWeight: '20px',
            color: 'black',
            border: '0px solid green',
            textAlign: 'left',
            position: 'relative',
            left: '20px',
            top: '0px'
        },
        booksummaryauthor: {
            fontSize: '13px',
            border: '0px solid green',
            color: 'grey',
            position: 'relative',
            top: '5px',
            left: '20px',
        },
        spanquantitybox: {
            width: '45%',
            height: '4%',
            border: '0px solid red',
            position: 'relative',
            top: '20px',
            left: '20px',
            borderRadius: '3px',
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
        },
        spanbackgroundbox: {
            fontSize: '18px',
            backgroundColor: 'green', height: '24px',
        },
        spanstarrate: {
            color: 'white',
            backgroundColor: 'green',
            width: '20px',
            height: '24px',
            position: 'relative',
            top: '0px',
        },
        spanparafont: {
            fontSize: '9px'
        },
        divpricebox: {
            display: 'flex',
            flexDirection: 'row',
            font: '15px Arial, sans-serif',
            position: 'relative',
            border: '0px solid orange',
            height: '6%',
    
            top: '30px',
            left: '20px',
        },
        descriptionbooktitle: {
            fontSize: '16px',
            color: 'grey',
            textAlign: 'left',
        },
        descriptionbooktext: {
            fontSize: '15px',
            color: 'black',
            textAlign: 'left',
            position: 'relative',
            top: '5px',
            left: '10px',
        },
        feedbackfont: {
            fontSize: '16px',
            textAlign: 'left'
        },
        overallfeedbackbox: {
            fontSize: '12px',
            position: 'relative',
            top: '10px',
            left: '20px',
            textAlign: 'left',
            border:'0px solid blue',
        },
        feedbackrating: {
            position: 'relative', top: '15px', left: '20px',
             border:'0px solid blue',
        },
        feedbacktextfield: {
            width: '85%',
            color: 'lightgrey',
            backgroundColor: 'white',
            position: 'relative',
            top: '20px', left: '20px'
        },
        feedbacksubmitbutton: {
            width: '15%',
            height: '15%',
            border: '0px solid red',
            position: 'relative',
            left: '150px',
            top: '30px'
        },
       
       
        feedback: {
            width: '95%',
            height: '25%',
            border: '0px solid black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            position: 'relative',
            left: '20px',
            top: '70px',
        },
        ratingcontainer: {
            width: '90%',
            height: '180px',
            border: '0px solid grey',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: '#F5F5F5 ',
            position: 'relative',
            top: '10px',
        },
        reviewcontainer: {
            width: '100%',
            height: '160px',
            position: 'relative',
            top: '69px',
            left: '0px',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        },
        reviewParabox: {
            width: '60%',
            height: '15%',
            border: '0px solid green',
            left: '10px',
            position: 'relative',
            borderRadius: '0px',
        },
        reviewspannamebox: {
            border: '1px solid grey',
            borderRadius: '5px',
            position: 'relative',
            width:'100%',
        },
        reviewratingbox: {
            position: 'relative',
            bottom: '11px', left: '50px',
        },
        reviewdescriptionbox: {
            width: '85%',
            position: 'relative',
            bottom: '15px',
            left: '48px',
            textAlign: 'left',
            fontSize: '15px',
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        hometextbook: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            color: 'black', width: '90vw',
            height: '5%',
            position: 'relative',
             left: '45px',
            right:'0px',
            bottom: '30px',
            backgroundColor: 'white',
            border: '0px solid red',
        },
        detailmaincontainer: {
            width: '80%',
            height: 'auto',
            position: 'relative',
            // bottom: '5px',
            bottom: '35px',
            left: '100px',
            opacity: '1',
            border: '0px solid green',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
    
        },
        smallimages: {
           display:'none',
        },
        bookimage: {
            width: '95%',
            height: '80%',
            position: 'relative',
            // left:'100px',
            border: '0px solid orange',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        imgborder: {
            width: '85%',
            height: '40%',
            border: '1px solid grey',
            position: 'relative',
            marginRight: '20px',
        },
        largesummarybook: {
            width: '90%',
            height: '90%',
            position: 'relative',
            top: '4px',
            left: '0px',
            border: '0px solid lightgrey',
            padding: '7px'
        },
        wishlistbutton: {
            width: '80%',
            height: '8%',
            border: '0px solid blue',
            position: 'relative',
            left: '15px',
            top: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        addtobagbox: {
            width: '85%',
            height: '55%',
            color: 'white',
            fontSize:'4px',
            position:'relative',
            left:'0px',
            border:'0px solid blue'
        },
       
        count: {
            width: '85%',
            height: '5vh',
            border: '0px solid green',
            position: 'relative',
            top: '0px',
            left: '0px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'white',
        },
        decrementwidth:{
            width: '20px'
        },
        incrementwidth:{
            width: '20px'
        },
        numberwidth:{
            width: '40px'
        },
        addtowishlistbookbox: {
            width: '85%',
            height: '55%',
            color: 'white',
            position:'relative',
            top:'0px',
            left:'10px',
    
        },
        addwishlistbox: {
            height: '20px'
        },
        addwishlistremove: {
            width: '75%',
            height: '34px',
            border: '1px solid lightgrey',
            position:'relative',
            top:'0px',
            left:'15px',
        },
        favoriteiconheight: {
            height: '20px'
        },
        detailscontainer: {
            width: '88%',
            height: 'auto',
            position: 'relative',
             right:'25px',
            top:'35px',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        },
        line: {
            width: '95%',
            //height:'1px',
            border: '1px solid lightgrey',
            position: 'relative',
            top: '40px',
            left: '20px'
        },
        linetwo: {
            width: '95%',
            //height:'1px',
            border: '1px solid lightgrey',
            position: 'relative',
            top: '70px',
            left: '20px'
        },
    
        descriptionbook: {
            width: '95%',
            height: '140px',
            position: 'relative',
            top: '50px',
            left: '20px',
            border: '0px solid violet',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        booksummarydescription: {
            font: ' 24px Arial, sans-serif',
            fontWeight: '21px',
            color: 'black',
            border: '0px solid green',
            textAlign: 'left',
            position: 'relative',
            left: '20px',
            top: '0px'
        },
        booksummaryauthor: {
            fontSize: '14px',
            border: '0px solid green',
            color: 'grey',
            position: 'relative',
            top: '5px',
            left: '20px',
        },
        spanquantitybox: {
            width: '45%',
            height: '4%',
            border: '0px solid red',
            position: 'relative',
            top: '20px',
            left: '20px',
            borderRadius: '3px',
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
        },
        spanbackgroundbox: {
            fontSize: '18px',
            backgroundColor: 'green', height: '24px',
        },
        spanstarrate: {
            color: 'white',
            backgroundColor: 'green',
            width: '20px',
            height: '24px',
            position: 'relative',
            top: '0px',
        },
        spanparafont: {
            fontSize: '10px'
        },
        divpricebox: {
            display: 'flex',
            flexDirection: 'row',
            font: '15px Arial, sans-serif',
            position: 'relative',
            border: '0px solid orange',
            height: '6%',
    
            top: '30px',
            left: '20px',
        },
        descriptionbooktitle: {
            fontSize: '18px',
            color: 'grey',
            textAlign: 'left',
        },
        descriptionbooktext: {
            fontSize: '16px',
            color: 'black',
            textAlign: 'left',
            position: 'relative',
            top: '5px',
            left: '10px',
        },
        feedbackfont: {
            fontSize: '18px',
            textAlign: 'left'
        },
        overallfeedbackbox: {
            fontSize: '14px',
            position: 'relative',
            top: '10px',
            left: '20px',
            textAlign: 'left',
            border:'0px solid blue',
        },
        feedbackrating: {
            position: 'relative', top: '15px', left: '20px',
             border:'0px solid blue',
        },
        feedbacktextfield: {
            width: '85%',
            color: 'lightgrey',
            backgroundColor: 'white',
            position: 'relative',
            top: '20px', left: '20px'
        },
        feedbacksubmitbutton: {
            width: '15%',
            height: '15%',
            border: '0px solid red',
            position: 'relative',
            left: '200px',
            top: '30px'
        },
       
       
        feedback: {
            width: '95%',
            height: '25%',
            border: '0px solid black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            position: 'relative',
            left: '20px',
            top: '70px',
        },
        ratingcontainer: {
            width: '90%',
            height: '180px',
            border: '0px solid grey',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: '#F5F5F5 ',
            position: 'relative',
            top: '10px',
        },
        reviewcontainer: {
            width: '90%',
            height: '160px',
            position: 'relative',
            top: '69px',
            left: '0px',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        },
        reviewParabox: {
            width: '50%',
            height: '15%',
            border: '0px solid green',
            right: '30px',
            position: 'relative',
            borderRadius: '0px',
        },
        reviewspannamebox: {
            border: '1px solid grey',
            borderRadius: '5px',
            position: 'relative',
            width:'100%',
        },
        reviewratingbox: {
            position: 'relative',
            bottom: '11px', left: '55px',
        },
        reviewdescriptionbox: {
            width: '80%',
            position: 'relative',
            bottom: '12px',
            left: '65px',
            textAlign: 'left',
            fontSize: '15px',
        },
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        hometextbook: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            color: 'black', width: '90vw',
            height: '7%',
            position: 'relative',
             left: '6px',
            right:'0px',
            bottom: '45px',
            backgroundColor: 'white',
            border: '0px solid red',
        },
        detailmaincontainer: {
            width: '80%',
            height: 'auto',
            position: 'relative',
            // bottom: '5px',
            bottom: '35px',
            left: '50px',
            opacity: '1',
            border: '0px solid green',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
    
        },
        smallimages: {
            width: '5%',
            height: '20%',
            border: '0px solid blue',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        bookimage: {
            width: '40%',
            height: '80%',
            position: 'relative',
            // left:'100px',
            border: '0px solid orange',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        imgborder: {
            width: '85%',
            height: '40%',
            border: '1px solid grey',
            position: 'relative',
            marginRight: '20px',
        },
        largesummarybook: {
            width: '90%',
            height: '90%',
            position: 'relative',
            top: '4px',
            left: '0px',
            border: '0px solid lightgrey',
            padding: '7px'
        },
        wishlistbutton: {
            width: '100%',
            height: '8%',
            border: '0px solid blue',
            position: 'relative',
             left:'-20px',
            top: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        },
        addtobagbox: {
            width: '90%',
             height: '20%',
            color: 'white',
            fontSize:'9px !important',
            position:'relative',
            left:'0px',
            border:'0px solid green',
        },
       
        count: {
            width: '85%',
            height: '5vh',
            border: '0px solid green',
            position: 'relative',
            top: '0px',
            left: '0px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'white',
        },
        decrementwidth:{
            width: '15px'
        },
        incrementwidth:{
            width: '15px'
        },
        numberwidth:{
            width: '25px'
        },
        addtowishlistbookbox: {
            width: '60%',
            height: '20%',
            color: 'white',
            position:'relative',
            top:'0px',
            left:'10px',
            fontSize:'9px !important',
            border:'0px solid red',
        },
        addwishlistbox: {
            width:'5px',
            height: '14px !important',
            border:'0px solid blue',
        },
        addwishlistremove: {
            width: '75%',
            height: '32px',
            border: '1px solid lightgrey',
            position:'relative',
            top:'0px',
            left:'15px',
        },
        favoriteiconheight: {
            height: '18px'
        },
        detailscontainer: {
            width: '60%',
            height: 'auto',
            position: 'relative',
         right:'5px',
            top:'5px',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        },
        line: {
            width: '95%',
            //height:'1px',
            border: '1px solid lightgrey',
            position: 'relative',
            top: '40px',
            left: '20px'
        },
        linetwo: {
            width: '95%',
            //height:'1px',
            border: '1px solid lightgrey',
            position: 'relative',
            top: '70px',
            left: '20px'
        },
    
        descriptionbook: {
            width: '95%',
            height: '140px',
            position: 'relative',
            top: '50px',
            left: '20px',
            border: '0px solid violet',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        booksummarydescription: {
            font: ' 24px Arial, sans-serif',
            fontWeight: '21px',
            color: 'black',
            border: '0px solid green',
            textAlign: 'left',
            position: 'relative',
            left: '20px',
            top: '0px'
        },
        booksummaryauthor: {
            fontSize: '14px',
            border: '0px solid green',
            color: 'grey',
            position: 'relative',
            top: '5px',
            left: '20px',
        },
        spanquantitybox: {
            width: '45%',
            height: '4%',
            border: '0px solid red',
            position: 'relative',
            top: '20px',
            left: '20px',
            borderRadius: '3px',
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
        },
        spanbackgroundbox: {
            fontSize: '18px',
            backgroundColor: 'green', height: '24px',
        },
        spanstarrate: {
            color: 'white',
            backgroundColor: 'green',
            width: '20px',
            height: '24px',
            position: 'relative',
            top: '0px',
        },
        spanparafont: {
            fontSize: '10px'
        },
        divpricebox: {
            display: 'flex',
            flexDirection: 'row',
            font: '15px Arial, sans-serif',
            position: 'relative',
            border: '0px solid orange',
            height: '6%',
    
            top: '30px',
            left: '20px',
        },
        descriptionbooktitle: {
            fontSize: '18px',
            color: 'grey',
            textAlign: 'left',
        },
        descriptionbooktext: {
            fontSize: '16px',
            color: 'black',
            textAlign: 'left',
            position: 'relative',
            top: '5px',
            left: '10px',
        },
        feedbackfont: {
            fontSize: '18px',
            textAlign: 'left'
        },
        overallfeedbackbox: {
            fontSize: '14px',
            position: 'relative',
            top: '10px',
            left: '20px',
            textAlign: 'left',
            border:'0px solid blue',
        },
        feedbackrating: {
            position: 'relative', top: '15px', left: '20px',
             border:'0px solid blue',
        },
        feedbacktextfield: {
            width: '85%',
            color: 'lightgrey',
            backgroundColor: 'white',
            position: 'relative',
            top: '20px', left: '20px'
        },
        feedbacksubmitbutton: {
            width: '20%',
            height: '15%',
            border: '1px solid red',
            position: 'relative',
            // display:'flex',
            // flexDirection:'row',
            // justifyContent:'flex-start',
            left: '190px',
            top: '25px'
        },
        feedback: {
            width: '95%',
            height: '25%',
            border: '0px solid black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            position: 'relative',
            left: '20px',
            top: '70px',
        },
        ratingcontainer: {
            width: '90%',
            height: '195px',
            border: '0px solid grey',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: '#F5F5F5 ',
            position: 'relative',
            top: '10px',
        },
        reviewcontainer: {
            width: '90%',
            height: '160px',
            position: 'relative',
            top: '69px',
            left: '0px',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        },
        reviewParabox: {
            width: '50%',
            height: '15%',
            border: '0px solid green',
            right: '30px',
            position: 'relative',
            borderRadius: '0px',
        },
        reviewspannamebox: {
            border: '1px solid grey',
            borderRadius: '5px',
            position: 'relative',
            width:'100%',
        },
        reviewratingbox: {
            position: 'relative',
            bottom: '11px', left: '55px',
        },
        reviewdescriptionbox: {
            width: '80%',
            position: 'relative',
            bottom: '12px',
            left: '65px',
            textAlign: 'left',
            fontSize: '15px',
        },

    },

})
function BookDetails(props) {
    const navigate = useNavigate();

    const classes = useStyle();
    const [wishIcon, setWishIcon] = useState(false)
    const [home, setHome] = useState();

    const [counterbtn, setCounterBtn] = useState(false)
    const [counterOne, setCounterOne] = useState(1)
    const [cartId, setCartId] = useState([])
    const [cartBookId, setCartBookId] = useState([])
    const [wishListId, setWishListId] = useState([])
    const [wishBookId, setWishBookId] = useState([])
    const handleCounter = (_id, counterOne) => {
        console.log("inside hanlde counter")
        cartItemQuantity(_id, counterOne).then((response) => {
            console.log(response, "increment response")
        }).catch((error) => { console.log(error); })
    }
    const increment = () => {
        setCounterOne(counterOne => counterOne + 1)
        let cartItem = {
            cartItem_id: props.id,
        }
        let quantity = {
            quantityToBuy: counterOne + 1
        }
        //console.log('object',quantity)
        cartItemQuantity(cartItem, quantity).then((response) => {
            console.log(response, "increment response")
        }).catch((error) => { console.log(error); })
    }

    const decrement = () => {
        if (counterOne > 1) {
            setCounterOne(counterOne => counterOne - 1)

            let cartItem = {
                cartItem_id: props.id,
            }
            let quantity = {
                quantityToBuy: counterOne - 1
            }
            console.log('object', quantity)
            cartItemQuantity(cartItem, quantity).then((response) => {
                console.log(response, "decrement response")
            }).catch((error) => { console.log(error); })
        }
        else {
            setCounterOne(1)
        }
    }
    const handleWishList = () => {

        let object = { product_id: props.id }
        addWishList(object).then((response) => {

            console.log(response, "added to wishlist")
        }).catch((error) => {
            console.log(error)
        })
        setWishIcon(true)
        // setWishIcon(prevState =>({
        //     ...prevState,
        //     wishIcon:true
        // }))
    }

    useEffect(() => {
        getCartItem().then((response) => {
            console.log(response)
            let idList = response.data.result.filter((cart) => {
                if (props.id === cart.product_id._id) {
                    setCounterOne(cart.quantityToBuy)
                    setCartId(cart._id)
                    console.log(cart._id, cart.quantityToBuy, "id")
                    return cart
                }
            })
            setCartBookId(idList)
        }).catch((error) => console.log(error))

        getWishList().then((response) => {
            console.log(response)
            let wishId = response.data.result.filter((cart) => {
                if (props.id === cart.product_id._id) {
                    // setCounterOne(cart.quantityToBuy)
                    setWishListId(cart._id)
                    console.log(cart._id, "id")
                    return cart
                }
            })
            setWishBookId(wishId)
        }).catch((error) => console.log(error))

    }, [])

    const handleCart = () => {
        //console.log(props.id)
        setCounterBtn(true)
        let object = { product_id: props.id }

        addToCart(object).then((response) => {

            console.log(response, "added to Cart")
        }).catch((error) => {
            console.log(error)
        })
    }

    const openDashBoardPage = () => {
        navigate('/dashboard')
    }
    const removeFromWishlist = () => {
        setWishIcon(false)
    }
    const listenToHome = () => {
        props.moveToHome()
    }

    return (
        <div>
            {/* <Header />  */}
            <Box className={classes.hometextbook} onClick={listenToHome}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home/<b>Book(01)</b></Box>
            <div className={classes.detailmaincontainer}>
                <div className={classes.smallimages}>
                    <img src={require("./cover.png")} alt="img" style={{
                        border: '1px solid red'
                    }}
                        className={classes.imagebooksummary}
                    />
                    <img src={require("./imgcover.png")} alt="img" className={classes.imagebooksummary}
                        style={{
                            border: '1px solid grey'
                        }} />


                </div>
                <div className={classes.bookimage}>
                    <div className={classes.imgborder}>
                        <img src={require("./cover.png")} alt="img"
                            className={classes.largesummarybook} />

                    </div>
                    <div className={classes.wishlistbutton}>
                        {
                            (cartId.length === 0) ? <Button variant="contained" onClick={handleCart} style={{ color: 'white', backgroundColor: '#A03037',border:'0px solid green' }}
                                className={classes.addtobagbox}>
                                Add To Bag</Button>
                                :

                                <div className={classes.count}>
                                    <button className={classes.decrementwidth} onClick={decrement}>-</button>
                                    {/* onClick={decrement(props.id,props.quantity)} */}
                                    <button className={classes.numberwidth}>{counterOne}</button>

                                    <button className={classes.incrementwidth} onClick={increment}>+</button>
                                </div>

                        }
                        {
                            (wishListId.length === 0) ?
                                <Button onClick={handleWishList} variant="contained" className={classes.addtowishlistbookbox} style={{ backgroundColor: '#333333', }}>

                                    < FavoriteIcon style={{ color: 'white' }} className={classes.addwishlistbox} /> wishlist
                                </Button>
                                :

                                <Button onClick={removeFromWishlist} className={classes.addwishlistremove} 
                                style={{ border: '1px solid lightgrey', color: 'white' }}>

                                    < FavoriteIcon style={{ color: 'red', }} className={classes.favoriteiconheight} /></Button>

                        }

                    </div>

                    {/* </div> */}

                </div>
                <div className={classes.detailscontainer}>
                    <span className={classes.booksummarydescription}>
                        {/*   {props.book.bookName} */}
                        {/* Don't Make Me Think  */}
                        {props.bookName}
                        <br /></span>
                    <span className={classes.booksummaryauthor}>
                        {/* by steve kurg */}
                        by {props.author}

                    </span>
                    <div className={classes.spanquantitybox}

                    >
                        <span className={classes.spanbackgroundbox}> &nbsp;&nbsp;4.1 &nbsp;</span>
                        < StarRateIcon size="small" className={classes.spanstarrate} />
                        <p style={{ color: 'black', }} className={classes.spanparafont}>&nbsp;&nbsp;({props.quantity})</p>
                    </div>
                    <div
                        className={classes.divpricebox}
                    ><b>Rs.{props.discountPrice}</b> &nbsp; &nbsp;
                        <span style={{ textDecoration: 'line-through' }}>
                            {/* Rs.2050 */}
                            Rs.{props.price}
                        </span>
                    </div>
                    <div className={classes.line}></div>
                    <div className={classes.descriptionbook}>
                        <span className={classes.descriptionbooktitle}> * Book Detail <br /></span>
                        <span className={classes.descriptionbooktext}>
                            A visually stunning and comprehensive guide to the hit BBC series, Sherlock.
                            This is Sherlock from the ground up from story and script development to casting, sets, costumes, props, music and more.
                        </span>
                    </div>
                    <div className={classes.linetwo}></div>
                    <div className={classes.feedback}>
                        <span className={classes.feedbackfont} >Customer Feedback<br /></span>
                        <div className={classes.ratingcontainer}>
                            <span className={classes.overallfeedbackbox}

                            >Overall rating<br /></span>
                            <Rating name="size-medium" spacing={2} defaultValue={0} className={classes.feedbackrating}
                            />
                            <TextField className={classes.feedbacktextfield}
                                id="standard-multiline-static"
                                label="  Write your review"
                                multiline
                                rows={2}
                                // defaultValue="write your review"
                                // placeholder="write your review"
                                variant="standard"
                            />
                            <Button variant="contained"
                                className={classes.feedbacksubmitbutton}>
                                Submit</Button>
                        </div>
                    </div>
                    <div className={classes.reviewcontainer}>
                        <p className={classes.reviewParabox}>
                            <span className={classes.reviewspannamebox}>AC &nbsp;</span>
                            &nbsp;&nbsp;&nbsp;Aniket Chile</p>
                        <Rating name="size-medium" spacing={2} defaultValue={3}
                            className={classes.reviewratingbox} />

                        <span className={classes.reviewdescriptionbox}>
                            Good Product. Chanakaya's neeti are thought
                            provoking and has wrote on  different topics and his writings are succint.
                        </span>

                    </div>
                    <div className={classes.reviewcontainer}>
                        <p className={classes.reviewParabox}>
                            <span className={classes.reviewspannamebox}>SB &nbsp;</span>
                            &nbsp;&nbsp;&nbsp;Shweta Bodkar</p>
                        <Rating name="size-medium" spacing={2} defaultValue={3}
                            className={classes.reviewratingbox} />


                        <span className={classes.reviewdescriptionbox}>
                            Good Product.Chanakaya's neeti are thought
                            provoking and has wrote on  different topics and his writings are succint.
                        </span>

                    </div>

                </div>

            </div>

            {/* <Footer/> */}
        </div>
    )
}

export default BookDetails
