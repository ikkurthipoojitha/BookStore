import React, { useEffect } from "react";
import { useState } from "react";
import Book from "../books/books";
import { makeStyles } from '@mui/styles';
import Header from "../../header/header";
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from "@mui/material";
import { getBookList } from "../../services/dataservice";
import Footer from "../footer/footer";
import BookDetails from "../bookdetails/bookdetails";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


const useStyle = makeStyles({
    heading: {
        width: '100vw',
        height: '10vh',
        border: '0px solid green',
        position: 'relative',
        top: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    booktext: {
        width: '20%',
        height: 'auto',
        border: '0px solid red',
        position: 'relative',
        left: '80px',
    },
    dropdown: {
        width: '16%',
        height: 'auto',
        border: '0px solid  orange',
        position: 'relative',
        right: '240px',
    }
})

function Dashboard(props) {
    const [booksList, setBooksList] = useState([])
    const [inputDetails,setInputDetails] = useState({})
    const [display,setDisplay] = useState(false)

    const openSummary = (bookObj) =>{
        console.log(bookObj,"this is  book details")
        setInputDetails(bookObj)
        setDisplay(true)
        console.log(inputDetails.bookName,"this is book data")
    }

    const getBook = () => {
        getBookList().then((response) => {
            setBooksList(response.data.result)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getBook()
    }, [])

    const autoRefresh = () =>{
        getBook()
    }

    
    const classes = useStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Header />
            <div className={classes.heading}>
                <div className={classes.booktext}>
                    <p style={{ fontSize: '15px' }}>
                        <span style={{ fontSize: '30px' }}>Books</span>
                        (30 items)
                    </p>
                </div>
                <div className={classes.dropdown}>
                    <Button style={{
                        position: 'relative', top: '15px', color: 'black', backgroundColor: 'white',
                        border: '1px solid lightgrey', fontSize: '12px'
                    }}
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Sort by relevance
                    </Button>
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} disableRipple>
                            <EditIcon />
                            Edit
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <FileCopyIcon />
                            Duplicate
                        </MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        <MenuItem onClick={handleClose} disableRipple>
                            <ArchiveIcon />
                            Archive
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <MoreHorizIcon />
                            More
                        </MenuItem>
                    </StyledMenu>
                </div>
            </div>
            {/* <Box sx={{ width:'82vw', height:'auto',border:'0px solid green',position:'relative',left:'70px', top:'10px',display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                {
                    booksList.map(
                        (book) => (<Book book={book}
                            //  onClick={handleDetails}
                        />)
                    )
                }

            </Box> */}
            <Box sx={{ width:'82vw', height:'auto',border:'0px solid green',
            position:'relative',left:'70px', top:'10px',display: 'flex', justifyContent: 'flex-start',
             flexWrap: 'wrap' }}>

            {
                display ?
                <BookDetails bookName = {inputDetails.bookName} author = {inputDetails.author} id={inputDetails._id}
                quantity={inputDetails.quantity} price = {inputDetails.price} discountPrice={inputDetails.discountPrice} />
                :
                    booksList.map(
                        (book) => (<Box onClick = {()=>openSummary(book)}>
                            <Book key = {book._id} book = {book} autoRefresh = {autoRefresh} />
                        </Box>)
                    )
            }
            </Box>
            <Footer /> 
        </div>
    )
}

export default Dashboard