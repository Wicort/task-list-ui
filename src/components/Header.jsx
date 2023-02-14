import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem} from '@mui/material';
import {useState} from "react";
import CategoriesDrawer from "./CategoriesDrawer";
import UserMenu from "./UserMenu";

const Header = () => {
    const [auth, setAuth] = useState(true);


    const login = () => {
        setAuth(true);
    }

    const logout = () => {
        setAuth(false);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {auth && <CategoriesDrawer/>}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Task List - Планирование задач
                    </Typography>
                    <UserMenu
                        auth={auth}
                        login={login}
                        logout={logout}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;