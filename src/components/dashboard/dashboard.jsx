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
import PaginationRounded from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationBox from "../paginationbox/paginationbox";
import { Grid } from "@mui/material";
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
        width: '75vw',
        height: '10vh',
        border: '0px solid green',
        position: 'relative',
        top: '10px',
        left: '120px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    bookpara: {
        fontSize: '15px'
    },
    spanpara: {
        fontSize: '30px'
    },
    booktext: {
        width: '19%',
        height: 'auto',
        border: '0px solid blue',
        position: 'relative',
        left: '0px',
    },
    dropdown: {
        width: '25%',
        height: 'auto',
        border: '0px solid  orange',
        position: 'relative',
        right: '0px',

    },
    sortbybox: {
        position: 'relative',
        top: '15px',
        fontSize: '7px',
    },
    bookbox: {
        width: '82vw',
        height: 'auto',
        border: '0px solid green',
        position: 'relative',
        left: '70px',
        top: '10px',
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'

    },
    footercontainer: {
        width: '100vw',
        height: '12vh',
        border: '0px solid green',
        backgroundColor: '#2E1D1E',
        color: '#FFFFFF',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        top: '20px',
        marginTop: '95px'
    },
    footerpara: {
        position: 'relative',
        left: '130px',
        top: '20px',
        textAlign: 'left',
        fontSize: '12px'
    },
    gridbox: {

        maxWidth: '75vw',
        marginLeft: '200px !important',
        border: '0px solid yellow',
        /* flexGrow:'1', */
        height: 'auto',
    },

    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        heading: {
            width: '62vw',
            height: '8vh',
            border: '0px solid green',
            position: 'relative',
            top: '10px',
            left: '130px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        booktext: {
            width: '30%',
            height: 'auto',
            border: '0px solid red',
            position: 'relative',
            // left: '90px',
            top: '10px,'
        },
        bookpara: {
            fontSize: '9px'
        },
        spanpara: {
            fontSize: '13px'
        },
        dropdown: {
            // width: '50%',
            // height: 'auto',
            // border: '0px solid  orange',
            // position: 'relative',
            // left:'13px',
            // right: '60px',
            display: 'none',
        },
        sortbybox: {
            position: 'relative',
            top: '0px',
            fontSize: '4px',
            height: '100%',
            width: '100%'
        },
        bookbox: {
            width: '82vw',
            height: 'auto',
            border: '0px solid green',
            position: 'relative',
            left: '29px',
            top: '10px',
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'

        },
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
            left: '100px',
            top: '15px',
            textAlign: 'left',
            fontSize: '12px'
        },



    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        heading: {
            width: '67vw',
            height: '7vh',
            border: '0px solid green',
            position: 'relative',
            top: '10px',
            left: '86px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        booktext: {
            width: '30%',
            height: 'auto',
            border: '0px solid red',
            position: 'relative',
            // left: '90px',
            top: '0px',
        },
        bookpara: {
            fontSize: '15px'
        },
        spanpara: {
            fontSize: '20px'
        },
        dropdown: {
            // width: '40%',
            // height: 'auto',
            // border: '0px solid  orange',
            // position: 'relative',
            // left:'13px',
            // right: '60px',
            display: 'none',
        },
        sortbybox: {
            position: 'relative',
            top: '0px',
            fontSize: '4px',
            height: '90%',
            width: '97%'
        },
        bookbox: {
            width: '83vw',
            height: 'auto',
            border: '0px solid green',
            position: 'relative',
            left: '30px',
            top: '10px',
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'

        },
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
            left: '90px',
            top: '20px',
            textAlign: 'left',
            fontSize: '12px'
        },


    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        heading: {
            width: '75vw',
            height: '8vh',
            border: '0px solid green',
            position: 'relative',
            top: '10px',
            left: '80px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        booktext: {
            width: '28%',
            height: 'auto',
            border: '0px solid red',
            // position: 'relative',
            //  left: '15px',

        },
        bookpara: {
            fontSize: '16px'
        },
        spanpara: {
            fontSize: '25px'
        },
        dropdown: {
            width: '35%',
            height: 'auto',
            border: '0px solid  orange',
            position: 'relative',
            // left:'13px',
            // right: '60px',
            top: '10px',
        },
        sortbybox: {
            position: 'relative',
            top: '0px',
            fontSize: '4px',
            height: '90%',
            width: '97%'
        },
        bookbox: {
            width: '83vw',
            height: 'auto',
            border: '0px solid green',
            position: 'relative',
            left: '40px',
            top: '20px',
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'

        },
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
            left: '90px',
            top: '20px',
            textAlign: 'left',
            fontSize: '12px'
        },
    },
})

function Dashboard(props) {

    const [booksList, setBooksList] = useState([])
    const [inputDetails, setInputDetails] = useState({})
    const [display, setDisplay] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [pageHide, setPageHide] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentItems = booksList.slice(firstPostIndex, lastPostIndex);
    console.log(currentItems, "pagination slice")


    const openSummary = (bookObj) => {
        console.log(bookObj, "this is  book details")
        setInputDetails(bookObj)
        setDisplay(true)
        console.log(inputDetails.bookName, "this is book data")
        setPageHide(true)

    }

    const getBook = () => {
        getBookList().then((response) => {
            setBooksList(response.data.result)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getBook()
    }, [])

    const autoRefresh = () => {
        getBook()
    }
    const moveToHome = () => {
        setDisplay(false)
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


    const [searchWord, setSearchWord] = React.useState('')
    const searchBook = (event) => {
        setSearchWord(event.target.value)
    }
    console.log(searchWord, "searching..")

    return (
        <div>
            <Header searchWord={searchWord} searchBook={searchBook} />
            <div className={classes.heading}>
                <div className={classes.booktext}>
                    <p className={classes.bookpara}>
                        <span className={classes.spanpara} >Books</span>
                        (30 items)
                    </p>
                </div>
                <div className={classes.dropdown}>
                    <Button className={classes.sortbybox}
                        sx={{
                            backgroundColor: 'white',
                            border: '1px solid lightgrey',

                        }}
                        size="small"
                        // style={{ backgroundColor: 'white',}}
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        color="inherit"
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

            <Box className={classes.bookbox}
            >

                {
                    display ?
                        <BookDetails moveToHome={moveToHome} bookName={inputDetails.bookName} author={inputDetails.author} id={inputDetails._id}
                            quantity={inputDetails.quantity} price={inputDetails.price} discountPrice={inputDetails.discountPrice} />
                        :
                        // <Grid container spacing={2} className={classes.gridbox} >
                            // {
                            booksList.
                            filter(book => book.bookName.toLowerCase().includes(searchWord.toLowerCase()))
                            .slice(firstPostIndex, lastPostIndex).map(

                                (book) => (
                            // <Grid item lg={2.3} md={5} sm={4} xs={12}
                            //     style={{ border: '0px solid black', width: '17vw', marginLeft: '0px' }}>
                                <Box onClick={() => openSummary(book)}>
                                    <Book book={book} key={book._id}
                                    // {search.length < 1 ? book : searchResults } term = {search}
                                    //  searchKeyword = {searchHandler}
                                    />
                                </Box>
                            // </Grid> 
                                )
                            )
                                // }
                        // </Grid> 
                               

           

            }
            </Box>
            {
                pageHide ? null :
                    <Box>
                        <PaginationBox totalPosts={booksList.length}
                            postPerPage={postPerPage}
                            setCurrentPage={setCurrentPage} />
                    </Box>
            }
            <div className={classes.footercontainer}>
                <span className={classes.footerpara}

                >Copyright 2020, Bookstore Private Limited.</span>
            </div>
        </div>)
}

export default Dashboard

{/* <Grid container spacing={2} className={classes.gridbox} >
<Grid item lg={2.3} md={5} sm={4} xs={12}
style = {{border:'0px solid black',width:'17vw',marginLeft:'70px'}}> */}