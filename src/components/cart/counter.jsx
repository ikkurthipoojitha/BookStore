import React,{useState,useMemo} from "react";
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
    count:{
        width:'12vw',
        height:'4vh',
        border:'1px solid green',
        position:'relative',
        top:'20px',
        left:'20px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'red',
    },
})

function Counter(){
    const classes = useStyle();

    const [counterOne, setCounterOne] = useState(1)

    const increment = () =>{
        setCounterOne(counterOne + 1 )
    }
    const decrement = () =>{
        setCounterOne(counterOne -  1 )
    }

    

    return(
        <div>
            <div className={classes.count}>
            <button  style={{width:'10%'}} onClick ={decrement}>-</button>
        
            <button style={{width:'25%'}}>{counterOne}</button>
        
            <button  style={{width:'10%'}} onClick ={increment}>+</button>
            </div>
        </div>
    )
}
export default Counter