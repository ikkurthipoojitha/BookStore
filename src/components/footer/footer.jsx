import * as React from 'react';

import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    footercontainer:{
        width:'100vw',
        height:'12vh',
        border:'0px solid green',
        backgroundColor:'#2E1D1E',
        color:'#FFFFFF',
        position: 'relative',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        top:'20px',
        marginTop:'195px'
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {

    footercontainer: {
        width: '100vw',
        height: '8vh',
        border: '0px solid green',
        backgroundColor: '#2E1D1E',
        color: '#FFFFFF',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        top: '14px',
        marginTop: '95px'
    },
    footerpara: {
        position: 'relative',
        left: '70px',
        top: '15px',
        textAlign: 'left',
        fontSize: '12px'
    },
},


    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        footercontainer: {
            width: '100vw',
            height: '9vh',
            border: '0px solid green',
            backgroundColor: '#2E1D1E',
            color: '#FFFFFF',
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            top: '12px',
            marginTop: '95px'
        },
        footerpara: {
            position: 'relative',
            left: '60px',
            top: '20px',
            textAlign: 'left',
            fontSize: '12px'
        },


    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        footercontainer: {
            width: '100vw',
            height: '9vh',
            border: '0px solid green',
            backgroundColor: '#2E1D1E',
            color: '#FFFFFF',
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            top: '10px',
            marginTop: '95px'
        },
        footerpara: {
            position: 'relative',
            left: '60px',
            top: '20px',
            textAlign: 'left',
            fontSize: '12px'
        },
    },

})

function Footer(){
    const classes = useStyle();

    return(
        <div>
            <div className={classes.footercontainer}>
                <span style={{ position: 'relative',
        left: '130px', top:'20px',textAlign:'left',fontSize:'12px'}}>Copyright 2020, Bookstore Private Limited.</span>
            </div>

        </div>
    )
}

export default Footer