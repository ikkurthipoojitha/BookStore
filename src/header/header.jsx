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
import MoreIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


const useStyle = makeStyles({
    bookdiv: {
        width: '70%',
        height: '80%',
        position: 'relative',
    },
    bookstoreimage: {
        width: '100%',
        height: 'auto',
        borderRadius: '100',
        border: '0px solid green',
    },
    bookstoretext: {
        color: 'white',
        fontSize: '20px'
    },
    emptyboxbookstore: {
        width: '10%',
        height: 'auto',
        border: '0px solid white',
    },
    cartwishlisticon: {
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid black',
        justifyContent: 'space-between',
        position: 'relative',
        right: '230px',
        width: '180px',
        height: 'auto'
    },
    profileiconbox: {
        border: '0px solid black',
        borderRadius: '0',
        width: '20%',
        display: 'flex',
        flexDirection: 'column'
    },
    profileicontext: {
        fontSize: '8px',
        color: 'white',
    },
    wishlisticonbox: {
        border: '0px solid black',
        borderRadius: '0',
        width: '20%',
        display: 'flex',
        flexDirection: 'column'
    },
    wishlisticonboxtext: {
        fontSize: '9px',
        color: 'white'
    },
    mycarticonbox: {
        border: '0px solid black',
        borderRadius: '0',
        width: '20%',
        display: 'flex',
        flexDirection: 'column'
    },
    mycarticontext: {
        fontSize: '8px',
        color: 'white',
    },
    ['@media only screen and (min-width :880px) and (max-width :1030px)']: {
        cartwishlisticon: {
            display: 'flex',
            flexDirection: 'row',
            border: '0px solid black',
            justifyContent: 'space-between',
            position: 'relative',
            right: '160px',
            width: '180px',
            height: 'auto'
        },
    },
})
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
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
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '58ch',
        },
        ['@media only screen and (min-width :880px) and (max-width :1030px)']: {
            width:'20ch'
        },
    },
}));

function Header({ searchBook, searchWord }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const navigate = useNavigate()

    const openMyCart = () => {
        navigate('/mycart')
    }
    const openWishlist = () => {
        navigate('/wishlist')
    }
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    
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



    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={openWishlist}>
                <IconButton size="large" color="inherit">
                    <Badge color="error">
                       <FavoriteBorderIcon/>
                    </Badge>
                </IconButton>
                <p>Wishlist</p>
            </MenuItem>
            <MenuItem  onClick={openMyCart}>
                <IconButton
                    size="large"
                    
                    color="inherit"
                >
                    <Badge  color="error">
                        < ShoppingCartOutlinedIcon/>
                    </Badge>
                </IconButton>
                <p>MyCart</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Badge  color="error">
                        < AccountCircle/>
                    </Badge>
                   
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#A03037', border: '0px solid green' }} color="default">
                <Toolbar>
                    <Box className={classes.emptyboxbookstore} />

                    <IconButton
                        size="large"
                        edge="start"
                        color="default"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <img className={classes.bookdiv} src={require("./booklogo.png")} alt="img"
                            style={{}} />
                        <span className={classes.bookstoretext}>BookStore</span>

                    </IconButton>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon style={{ color: 'default' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            type="text"
                            inpurProps={{ 'aria-label': 'search' }}
                            placeholder="Search…"
                            value={searchWord}
                            onChange={searchBook}

                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />


                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Box className={classes.cartwishlisticon} sx={{ display: { xs: 'none', md: 'flex' }, }}>
                            <IconButton size="medium"
                             aria-controls={menuId}
                             aria-haspopup="true"
                             onClick={handleProfileMenuOpen}
                                className={classes.profileiconbox}
                                color="inherit">
                                <Badge sx={{ border: '0px solid black' }}>
                                    < PermIdentityOutlinedIcon size="medium" style={{ color: 'white' }} />
                                </Badge>

                                <Box className={classes.profileicontext}> Profile</Box>

                            </IconButton>
                            <IconButton onClick={openWishlist}
                                size="medium"
                                color="inherit"
                                aria-controls={menuId}
                                aria-haspopup="true"
                               // onClick={handleProfileMenuOpen}
                                className={classes.wishlisticonbox}
                            >
                                <Badge sx={{ border: '0px solid black' }}>
                                    < FavoriteBorderIcon size="medium" style={{ color: 'white' }} />
                                </Badge>

                                <Box className={classes.wishlisticonboxtext} >wishlist</Box>
                            </IconButton>
                            <IconButton onClick={openMyCart}
                                size="medium"
                                color="inherit"
                                aria-controls={menuId}
                                aria-haspopup="true"
                              //  onClick={handleProfileMenuOpen}
                                className={classes.mycarticonbox}
                            >
                                <Badge sx={{ border: '0px solid black' }}>
                                    < ShoppingCartOutlinedIcon size="medium" style={{ color: 'white' }} />
                                </Badge>

                                <Box className={classes.mycarticontext} >Cart</Box>
                            </IconButton>
                        </Box>

                    </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="show more"
                         aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                        <MoreIcon style={{ color: 'white' }} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        {renderMobileMenu}
      {renderMenu}
        </Box >
    );
}

export default Header