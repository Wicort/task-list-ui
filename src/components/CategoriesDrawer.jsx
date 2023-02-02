import React, {useState} from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import {Divider, Drawer, IconButton, List, ListItem, ListItemText} from "@mui/material";

import DefaultCategories from "./DefaultCategories";
import UserCategories from "./UserCategories";

const CategoriesDrawer = () => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <React.Fragment key={'left'}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => {
                    setIsOpened(true);
                }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={isOpened}
                onClose={()=>setIsOpened(false)}
            >
                <List>
                    <ListItem>
                        <ListItemText>Овчинников Виктор</ListItemText>
                    </ListItem>
                    <DefaultCategories/>
                    <Divider/>
                    <UserCategories/>
                </List>

            </Drawer>
        </React.Fragment>
    );
};

export default CategoriesDrawer;