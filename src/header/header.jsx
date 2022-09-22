import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    // '&:hover': {
    //     backgroundColor: alpha(theme.palette.common.white, 0.25),
    // },
    backgroundColor: 'white',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
const useStyle = makeStyles({
    bookdiv: {
        width: '70%',
        height: '80%',
        position: 'relative',
    },
})

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    color: 'grey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'default',
    border: '0px solid red',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '58ch',
        },
    },
}));

function Header({searchBook,searchWord}) {
    const navigate = useNavigate()
    
    const [search,setSearch] = React.useState('')
    const [searchResults,setSearchResults] = [];
  

    const openMyCart =()=>{
        navigate('/mycart')
    }
    const openWishlist = ()=>{
        navigate('/wishlist')
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const classes = useStyle();
    const input = React.useRef('')
    

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    // const searchItems = (event) =>{
    //     setSearch(event.target.value)
    // }
    // console.log(search,"search...")

    // const searchHandler = (search)=>{
    //     console.log(search)
    //     setSearch(search)
    //     if(search !== ''){
    //         const newBookList = props.booksList.filter(book=>book.bookName).map((filteredbook)=>(
    //         (filteredbook.book)))
    //         //   return  Object.values(book)
    //         //     .join('')
    //         //     .toLowerCase()
    //         //     .includes(search.toLowerCase());
        
    //         setSearchResults(newBookList)
    //     }
    //     else{
    //         setSearchResults(props.booksList)
    //     }
    // }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#A03037', border: '0px solid green' }} color="default">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="default"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>

                    <IconButton
                        size="large"
                        edge="start"
                        color="default"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="default"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="default"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                 

                    <IconButton
                        size="large"
                        edge="start"
                        color="default"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <img className={classes.bookdiv} src={require("./booklogo.png")} alt="img"
                            style={{ width: '100%', height: 'auto', borderRadius: '100%', border: '0px solid green' }} />
                        <span style={{ color: 'white',fontSize:'20px' }}>BookStore</span>

                    </IconButton>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon style={{ color: 'default' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            type="text"
                            inpurProps={{'aria-label':'search'}}
                            placeholder="Search…"
                            value = {searchWord}
                            onChange={searchBook}
                           
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' }, flexDirection: 'row',
                        border: '0px solid black', justifyContent: 'center',
                        position:'relative',right:'90px', width: '45%', height: 'auto'
                    }}>
                        <IconButton size="medium"
                            sx={{
                                border: '0px solid black', borderRadius: '0', width: '20%',
                                display: 'flex', flexDirection: 'column'
                            }}
                            color="inherit">
                            <Badge sx={{ border: '0px solid black' }}>
                                < PermIdentityOutlinedIcon size="medium" style={{ color: 'white' }} />

                            </Badge>
                            <Box style={{ fontSize: '8px', color: 'white' }}> Profile</Box>

                        </IconButton>
                        <IconButton onClick={openWishlist}
                            size="medium"
                            color="inherit"
                            sx={{
                                border: '0px solid black', borderRadius: '0', width: '20%',
                                display: 'flex', flexDirection: 'column'
                            }}
                        >
                            <Badge sx={{ border: '0px solid black' }}>
                                < FavoriteBorderIcon size="medium" style={{ color: 'white' }} />

                            </Badge>
                            <Box style={{ fontSize: '9px', color: 'white' }} >wishlist</Box>
                        </IconButton>
                        <IconButton onClick={openMyCart}
                            size="medium"
                            color="inherit"
                            sx={{
                                border: '0px solid black', borderRadius: '0', width: '20%',
                                display: 'flex', flexDirection: 'column'
                            }}
                        >
                            <Badge sx={{ border: '0px solid black' }}>
                                < ShoppingCartOutlinedIcon size="medium" style={{ color: 'white' }} />

                            </Badge>
                            <Box style={{ fontSize: '8px', color: 'white' }} >Cart</Box>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header