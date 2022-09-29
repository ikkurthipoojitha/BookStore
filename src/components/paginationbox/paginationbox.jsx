import { Box } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ClassNames } from "@emotion/react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    pagenumber:{
        width:'350px',
        height:'40px',
        border:'0px solid blue',
        position:'relative',
        left:'450px',
        top:'70px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        aliginContent:'center',
        

    },
    
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        pagenumber:{
            width:'350px',
            height:'40px',
            border:'0px solid blue',
            position:'relative',
            left:'45px',
            top:'70px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            aliginContent:'center',
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        pagenumber:{
            width:'350px',
            height:'40px',
            border:'0px solid blue',
            position:'relative',
            left:'120px',
            top:'70px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            aliginContent:'center',
            
    
        },
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        pagenumber:{
            width:'350px',
            height:'40px',
            border:'0px solid blue',
            position:'relative',
            left:'250px',
            top:'70px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            aliginContent:'center',
            alignItems:'center',
            
    
        },
    },
})

const PaginationBox = ({totalPosts,postPerPage,setCurrentPage})=>{
    const classes = useStyle();

    let pages = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i)
    }
    return (
        // <Box>
        // // <Box sx={{display:'flex'}}>
        // //     {
                
        // //         pages.map((page,index)=>{
        // //             <ArrowBackIosIcon/>
        // //             return (
        // //             <Box
        // //             style= {{width:'39px',height:'30px',display:'flex',border:'1px solid green'}}
        // //             key = {index} onClick={()=>setCurrentPage(page)} > {page}
        // //             </Box>
        //             );
        //         })
        //     }
        // </Box>
        <Box>
            < Pagination className={classes.pagenumber} count={4}
            onChange={(e,value)=> setCurrentPage(value)}/>
        </Box>
    )
}
export default PaginationBox