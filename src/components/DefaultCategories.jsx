import React from 'react';
import {List, ListItem, ListItemButton, Typography} from "@mui/material";
import {CalendarMonthRounded, StarRateRounded, TaskAltRounded, TodayRounded} from "@mui/icons-material";

const DefaultCategories = () => {
    return (
        <>
            <ListItem>
                <ListItemButton>
                    <TodayRounded/>
                    <Typography>Сегодня</Typography>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <StarRateRounded/>
                    <Typography>Важно</Typography>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <CalendarMonthRounded/>
                    <Typography>Запланировано</Typography>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <TaskAltRounded/>
                    <Typography>Задачи</Typography>
                </ListItemButton>
            </ListItem>
        </>
    );
};

export default DefaultCategories;