import React, {useState} from 'react';
import {Button, IconButton, Menu, MenuItem} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";

const UserMenu = (props) => {
    const {
        auth,
        login,
        logout
    } = props

    const [anchorE1, setAnchorE1] = useState(null);

    const openMenu = (event) => {
        setAnchorE1(event.currentTarget);
    }

    const closeUserMenu = () => {
        setAnchorE1(null);
    }

    return (
        <>
            {auth
                ?
                <>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={openMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="userMenu"
                        anchorEl={anchorE1}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorE1)}
                        onClose={closeUserMenu}
                    >
                        <MenuItem onClick={() => {
                            alert('Profile');
                            closeUserMenu();
                        }}>Profile</MenuItem>
                        <MenuItem onClick={ ()=> {
                            logout();
                            closeUserMenu();
                        }}>Logout</MenuItem>
                    </Menu>
                </>
                :
                <Button
                    color="inherit"
                    onClick={login}
                >
                    Login
                </Button>
            }
        </>
    );
};

export default UserMenu;