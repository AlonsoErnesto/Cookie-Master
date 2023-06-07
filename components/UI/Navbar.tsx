import React from 'react'
import { AppBar, IconButton,Typography, Toolbar } from '@mui/material';
import  {Link as Url}  from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar>
            <IconButton size='large' edge="start">
                <MenuOutlined/>
            </IconButton>
            <NextLink href="/" passHref>
                <Url>
                    <Typography variant='h6' color="white">Cookie Master</Typography>
                </Url>
            </NextLink>
            <div style={{flex:1}}/>
            <NextLink href="/theme-changer" passHref>
                <Url>
                    <Typography variant='h6' color="white">Cambiar tema</Typography>
                </Url>
            </NextLink>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;