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

const useStyle = makeStyles({
    detailmaincontainer: {
        width: '990px',
        height: '590px',
        position: 'relative',
        // bottom: '5px',
        bottom:'35px',
        left: '75px',
        opacity: '1',
        border: '0px solid green',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        
    },
    smallimages:{
        width:'5%',
        height:'20%',
        border:'0px solid blue',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    bookimage: {
        width: '35%',
        height: '75%',
        position: 'relative',
        // left:'100px',
        border: '0px solid orange',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    imgborder:{
        width:'85%',
        height:'78%',
        border:'1px solid grey',
        position:'relative',
        marginRight:'20px',
    },
    wishlistbutton: {
        width: '300px',
        height: '10%',
        border: '0px solid blue',
        position: 'relative',
        left: '2px',
        top: '30px',
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
        left:'20px'
    },
    linetwo: {
        width: '95%',
        //height:'1px',
        border: '1px solid lightgrey',
        position: 'relative',
        top: '70px',
        left:'20px'
    },
    
    descriptionbook: {
        width: '95%',
        height: '280px',
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
        height: '40%',
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
    reviewcontainer:{
        width:'100%',
        height:'300px',
        position: 'relative',
        top:'80px',
        left:'10px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'flex-start'
    }

})
function BookDetails(props) {
    const classes = useStyle();
    const handleAdd=(e)=>{
        console.log('you clicked add to cart')
    }

    return (
        <div>
            {/* <Header />  */}
            <Box style={{display:'flex',flexDirection:'row',justifyContent:'flex-start', width:'100%',height:'6%',
            position:'relative',left:'70px',bottom:'48px',backgroundColor:'white',border:'0px solid red'}}>Home/<b>Book(01)</b></Box>
            <div className={classes.detailmaincontainer}>
                <div className={classes.smallimages}>
                <img src={require("./cover.png")} alt="img"
                        style={{
                            width: '90%', height: '50%', position: 'relative',
                            top: '0px', border: '1px solid red', padding: '2px',
                        }} />
                <img src={require("./imgcover.png")} alt="img"
                        style={{
                            width: '90%', height: '50%', position: 'relative',
                            top: '0px', border: '1px solid grey', padding: '2px',
                        }} />
                
                    
                </div>
                <div className={classes.bookimage}>
                    <div className={classes.imgborder}>
                    <img src={require("./cover.png")} alt="img"
                        style={{
                            width: '90%', height: '90%', position: 'relative',
                            top: '10px',left:'0px', border: '0px solid lightgrey',padding:'10px'
                        }} />
                    
                    </div>
                    <div className={classes.wishlistbutton}> 
                        <Button variant="contained" onClick={handleAdd}
                        style={{ width: '45%', height: '75%', color: 'white', backgroundColor: '#A03037' }}>
                            Add To Cart</Button>
                        <Button variant="contained" style={{ width: '45%', height: '75%', color: 'white', backgroundColor: '#333333' }}>
                            < FavoriteIcon style={{ color: 'white', height: '20px' }} /> &nbsp;
                            Wishlist</Button>

                    </div>

                    {/* </div> */}

                </div>
                <div className={classes.detailscontainer}>
                    <span style={{
                        font: ' 25px Arial, sans-serif', fontWeight: '20px', color: 'black', border: '0px solid green',
                        textAlign: 'left', position: 'relative', left: '20px', top: '0px'
                    }}>
                        {/*   {props.book.bookName} */}
                        {/* Don't Make Me Think  */}
                        {props.bookName}
                        <br /></span>
                    <span style={{
                        fontSize: '15px', border: '0px solid green', color: 'grey', position: 'relative',
                        top: '5px', left: '20px'
                    }}>
                        {/* by steve kurg */}
                        by {props.author}

                    </span>
                    <div style={{
                        width: '45%', height: '4%', border: '0px solid red',
                        position: 'relative', top: '20px', left: '20px',
                        borderRadius: '3px', color: 'white', display: 'flex', flexDirection: 'row'
                    }}>
                        <span style={{ fontSize: '18px', backgroundColor: 'green' }}> &nbsp;&nbsp;4.1 &nbsp;</span>
                        < StarRateIcon size="small" style={{
                            color: 'white', backgroundColor: 'green', width: '20px', height: '24px',
                            position: 'relative', top: '0px'
                        }} />
                        <p style={{ color: 'black', fontSize: '9px' }}>&nbsp;&nbsp;(20)</p>
                    </div>
                    <div
                        style={{
                            display: 'flex', flexDirection: 'row', font: '18px Arial, sans-serif', position: 'relative', 
                            border: '0px solid orange', height: '6%', top: '30px', left: '20px'
                        }}
                    ><b>Rs.1500</b> &nbsp; &nbsp;
                        <span style={{ textDecoration: 'line-through',font: '14px Arial, sans-serif', }}>
                            {/* Rs.2050 */}
                            Rs.2050
                        </span>
                    </div>
                    <div className={classes.line}></div>
                    <div className={classes.descriptionbook}>
                        <span style={{ fontSize: '20px', color: 'grey', textAlign: 'left' }}> * Book Detail <br /></span>
                        <span style={{ fontSize: '18px', color: 'black', textAlign: 'left', position: 'relative', top: '5px',left:'10px' }}>
                            A visually stunning and comprehensive guide to the hit BBC series, Sherlock.
                            This is Sherlock from the ground up from story and script development to casting, sets, costumes, props, music and more.
                        </span>
                    </div>
                    <div className={classes.linetwo}></div>
                    <div className={classes.feedback}>
                        <span style={{ fontSize: '20px', textAlign: 'left' }}>Customer Feedback<br /></span>
                        <div className={classes.ratingcontainer}>
                            <span style={{
                                fontSize: '15px', position: 'relative', top: '10px', left: '20px',
                                textAlign: 'left'
                            }}>Overall rating<br /></span>
                            <Rating name="size-medium" spacing={2} defaultValue={0} style={{ position: 'relative', top: '15px', left: '20px' }} />
                            <TextField style={{ width: '92%', color: 'lightgrey', backgroundColor: 'white', position: 'relative', top: '20px', left: '20px' }}
                                id="standard-multiline-static"
                                label="  Write your review"
                                multiline
                                rows={2}
                                // defaultValue="write your review"
                                // placeholder="write your review"
                                variant="standard"
                            />
                            <Button variant="contained"
                                style={{ width: '15%', height: '15%',border:'0px solid red', 
                                position: 'relative', left: '420px', top: '30px' }}>
                                Submit</Button>
                        </div>
                    </div>
                    <div className = {classes.reviewcontainer}>
                        <p style={{ width:'30%',height:'15%',border:'0px solid green',left:'0px',
                        position:'relative',borderRadius:'0px'}}>
                            <span style={{border:'1px solid grey',borderRadius:'5px',position:'relative',}}>AC &nbsp;</span>
                            &nbsp;&nbsp;&nbsp;Aniket Chile</p>
                            <Rating name="size-medium" spacing={2} defaultValue={3} 
                            style={{ position: 'relative', bottom: '5px', left: '50px' }} />

                        <span style={{width:'85%',position:'relative',bottom:'4px',left:'55px',textAlign:'left',fontSize:'15px'}}>
                            Good Product. Even Though the translation could have been better. Chanakaya's neeti are thought
                            provoking and has wrote on  different topics and his writings are succint.
                        </span>
                            
                    </div>
                    <div className = {classes.reviewcontainer}>
                        <p style={{ width:'30%',height:'15%',border:'0px solid green', left:'10px',
                        position:'relative',borderRadius:'0px'}}>
                            <span style={{border:'1px solid grey',borderRadius:'5px',position:'relative',}}>SB &nbsp;</span>
                            &nbsp;&nbsp;&nbsp;Shweta Bodkar</p>
                            <Rating name="size-medium" spacing={2} defaultValue={3} 
                            style={{ position: 'relative', bottom: '5px', left: '50px' }} />

                        <span style={{width:'85%',position:'relative',bottom:'5px',left:'55px',textAlign:'left',fontSize:'15px'}}>
                            Good Product. Even Though the translation could have been better. Chanakaya's neeti are thought
                            provoking and has wrote on  different topics and his writings are succint.
                        </span>
                            
                    </div>
                     {/* <div className = {classes.reviewcontainer}>
                        <p style={{ width:'30%',height:'15%',border:'0px solid green',
                        position:'relative',borderRadius:'0px'}}>
                            <span style={{border:'1px solid grey',borderRadius:'5px',position:'relative',}}>SB &nbsp;</span>
                            &nbsp;&nbsp;&nbsp;Shweta Bodkar</p>
                            <Rating name="size-medium" spacing={2} defaultValue={4} 
                            style={{ position: 'relative', top: '0px', left: '45px' }} />

                        <span style={{position:'relative',top:'5px',left:'45px',textAlign:'left',fontSize:'15px'}}>
                            Good Product. Even Though the translation could have been better.chanakaya's neeti are thought
                            provoking and has written different topics and his writings are succint.
                        </span>
                            
                    </div>  */}
                </div>

            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default BookDetails