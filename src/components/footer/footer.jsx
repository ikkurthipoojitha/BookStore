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
})

function Footer(){
    const classes = useStyle();

    return(
        <div>
            <div className={classes.footercontainer}>
                <span style={{ position: 'relative',
        left: '130px', top:'20px',textAlign:'left',fontSize:'12px'}}>Copyright 2020, Bookstore Private Limited.All Rights Reserved</span>
            </div>

        </div>
    )
}

export default Footer