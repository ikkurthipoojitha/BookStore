import React,{useState,useEffect} from "react";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import StarRateIcon from '@mui/icons-material/StarRate';


const useStyle = makeStyles({
    bookcontainer:{
        width:'16vw',
        height:'40vh',
        border:'1px solid grey',
        boxShadow:'2px',
        position:'relative',
        top:'10px',
        left:'70px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'flex-start',
        alignContent:'space-around',
        marginRight:'30px',
        marginBottom:'20px',
     },
    containerimage:{
        width:'100%',
        height:'59%',
        border:'0px solid green',
        backgroundColor:'#E2E2E2',
        
    },
    textcontainer:{
        width:'80%',
        height:'41%',
        border:'0px solid orange',
        textAlign:'left',
        position:'relative',
        left:'20px',
    },
})

function Book(props){
    const classes = useStyle();
    const [inputFields, setInputFields] = useState({ 
     bookName: '',discountPrice:'',
        quantity:'', price:''
    })


    return(
        <div>
            <div className={classes.bookcontainer}>
                <div className={classes.containerimage}>
                    <img src={require("./cover.png")} alt="img"
                    style={{ width: '50%', height: '85%',position:'relative',
                    top:'10px',border: '0px solid red' }} />
                </div>
                <div className={classes.textcontainer}>
                    <span style={{font:' 12px Arial, sans-serif',color:'black',border:'0px solid green'}}> 
                    {/*   {props.book.description} */}
                    {/* Don't Make Me Think */}
                    {props.book.bookName}<br/></span>
                    <span style={{fontSize:'9px',border:'0px solid green',color:'grey'}}>
                        {/* by steve kurg */}
                        by {props.book.author}
                        </span>
                    <div style= {{width:'55%',height:'15%',border:'0px solid red',fontSize:'10px',position:'relative',
                
                    borderRadius:'3px',color:'white',display:'flex',flexDirection:'row'}}>
                        <span style={{backgroundColor:'green'}}>4.1 &nbsp;</span>
                    < StarRateIcon size="small" style = {{color:'white',backgroundColor:'green',width:'8px',height:'15px'}}/> 
                    <p style={{color:'black',fontSize:'6px'}}>&nbsp;&nbsp;({props.book.quantity})</p> 
                    </div>
                
                    <div 
                    style={{display:'flex',flexDirection:'row',font:'10px Arial, sans-serif',position:'relative',top:'5px',
                    border:'0px solid orange',height:'18%'}}
                    ><b>Rs.{props.book.discountPrice}</b> &nbsp; &nbsp;
                     <span style={{textDecoration: 'line-through'}}> 
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