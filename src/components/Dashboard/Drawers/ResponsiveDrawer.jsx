"use client"


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { HiInboxIn } from "react-icons/hi";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoMdMenu } from "react-icons/io";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import './drawerStyles.css'
import { usePathname } from 'next/navigation';
import { VscDashboard } from 'react-icons/vsc';
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { SlCalender, SlPeople } from "react-icons/sl";

const adminMenu = [
    { key: 'dashboard', menuText: 'Dashboard', path: '/admin/dashboard', icon: <VscDashboard /> },
    { key: 'manage-rooms', menuText: 'Manage Rooms', path: '/admin/manage-rooms', icon: <HiOutlineBuildingOffice /> },
    { key: 'reservations', menuText: 'Reservations', path: '/admin/reservations', icon: <SlCalender /> },
    { key: 'staff-section', menuText: 'Staff Section', path: '/admin/staff-section', icon: <SlPeople /> },
]

const drawerWidth = 240;

function ResponsiveDrawer({ children }) {
    const pathname = usePathname();

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);


    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <Toolbar >
                <p className='text-3xl'>Hotel Book</p>
            </Toolbar >

            <Divider />

            <List>
                {adminMenu.map((menuItem, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            style={{
                                boxShadow: pathname.split('/')[2] === menuItem?.key
                                    ? '0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)'
                                    : 'none'
                            }}
                            className="flex items-center"
                        >
                            <Link href={menuItem?.path} className="flex items-center">
                                <ListItemIcon>
                                    {menuItem?.icon}
                                </ListItemIcon>
                                <ListItemText primary={menuItem?.menuText} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider className='my-10'/>

            <List>
                <ListItem disablePadding>
                    <ListItemButton className="flex items-center">
                        <Link href='/' className="flex items-center">
                            <ListItemIcon>
                                <HiInboxIn />
                            </ListItemIcon>
                            <ListItemText primary='Landing Page' />
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <IoMdMenu />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {adminMenu.find(menuItem => menuItem?.key === pathname.split('/')[2])?.menuText}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                {children}
            </Box>
        </Box>
    );
}

export default ResponsiveDrawer;
