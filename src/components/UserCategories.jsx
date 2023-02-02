import React, {useEffect, useState} from 'react';

import {FormatListBulletedRounded} from "@mui/icons-material";
import {ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {useFetching} from "../hooks/useFetching";
import CategoriesService from "../api/CategoriesService"



const UserCategories = () => {
    const [categories, setCategories] = useState([]);

    const [fetchCategories, isLoadingCategories, errorCategories] = useFetching(() => {
        const cat = CategoriesService.getUserCategories();
        setCategories([...cat]);
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <>
            {
                categories.map(category =>
                    <ListItem key={category.id}>
                        <ListItemButton onClick={()=> {
                            alert(category.id);
                        }}>
                            <FormatListBulletedRounded/>
                            <Typography>{category.name}</Typography>
                        </ListItemButton>
                    </ListItem>
                )
            }
        </>
    );
};

export default UserCategories;