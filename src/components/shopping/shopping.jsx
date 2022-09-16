import React,{useState, useEffect} from "react";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/material";
import Header from "../../header/header";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
    orderimagecontainer:{
        width:'30vw',
        height:'52vh',
        border:'0px solid blue',
        position:'relative',
        left:'470px',
        top:'20px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    orderplacedimage:{
        width:'100%',
        height:'72%',
        border:'0px solid orange',
        position:'relative',
        top:'0px',
      
    },
    orderplacedtext:{
        width:'100%',
        height:'25%',
        border:'0px solid pink',
        position:'relative',
        top:'0px',
    },
    contactus:{
        width:'52vw',
        height:'17vh',
        border:'0px solid #DCDCDC',
        position:'relative',
        left:'300px',
        top:'30px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    emailusbox:{
        width:'100%',
        height:'60px',
        border:'1px solid #DCDCDC',
        backgroundColor:'#FAFAFA',
        position:'relative',
        top:'0px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
    },
    emailustextbox:{
        width:'100%',
        height:'150px',
        border:'1px solid #DCDCDC',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    emailtext:{
        width:'33.3%',
        height:'auto',
        border:'1px solid #DCDCDC',
        position:'relative',
    },
    shoppingbutton:{
        width:'14vw',
        height:'5vh',
        border:'0px solid blue',
        position:'relative',
        top:'40px',
        left:'610px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    },
    footercontainershopping:{
        width:'100vw',
        height:'12vh',
        border:'0px solid green',
        backgroundColor:'#2E1D1E',
        color:'#FFFFFF',
        position: 'relative',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        top:'0px',
        marginTop:'50px'
    },

})

function Shopping(props) {

    const classes = useStyle();
    const navigate = useNavigate();
    const openDashboard=()=>{
        navigate('/dashboard')
    }
    return(
        <div>
            <Header />
            <Box className={classes.orderimagecontainer}>
                <Box className={classes.orderplacedimage}>
                    <img src={require("./orderplaced.jpeg")} alt="img"
                    style={{width:'90%',height:'100%',border:'0px solid green',position:'relative',  left:'10px',}}/>
                </Box>
                {/* <Box className={classes.orderplacedtext}> */}
                    <p style={{textAlign:'center'}}>
                        hurray!!! your order is confirmed <br/>
                           the order id is #123456 save the order id for <br/>
                        further communication...
                    </p>
                {/* </Box> */}
            </Box>
            <Box className={classes.contactus}>
                <Box className={classes.emailusbox}>
                    <span style={{textAlign:'center',position:'relative',left:'80px'}}>Email us</span>
                    <span style={{textAlign:'center'}}>Contact us</span>
                    <span style={{textAlign:'center',position:'relative',right:'90px'}}>Address</span>
                </Box>
                <Box className={classes.emailustextbox}>
                    <Box className={classes.emailtext}>
                        <span style={{textAlign:'center',position:'relative',top:'9px'}}>admin@bookstore.com</span>
                    </Box>
                    <Box className={classes.emailtext}>
                    <span style={{textAlign:'center',position:'relative',top:'9px'}}>+918901234567</span>

                    </Box>
                    <Box className={classes.emailtext}>
                    <span style={{textAlign:'center',position:'relative',top:'7px'}}>14th Main,15th cross,HSR layout,Bangalore-560004</span>

                    </Box>

                </Box>
            </Box>
            <Box className={classes.shoppingbutton}>
            <Button variant="contained" label="" style={{width:'100%',height:'100%',color:'white'}} onClick={openDashboard} >
            continue shopping
            </Button>
            </Box>
            <Box className={classes.footercontainershopping}>
                <span style={{ position: 'relative',
        left: '130px', top:'20px',textAlign:'left',fontSize:'12px'}}>Copyright 2020, Bookstore Private Limited.All Rights Reserved</span>
            </Box>


        </div>
    )
}
export default Shopping