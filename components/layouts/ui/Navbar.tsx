import { AppBar, Link, Toolbar, Typography, Box } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'
import {Nav} from './Nav'
import { NavIcons } from './NavIcons'
export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/'>
                <Link display='flex' alignItems='center'>
                    <Typography variant='h6'>Teslo |</Typography>
                    <Typography sx={{ ml: .5}}>Ecommerce</Typography>
                </Link>
            </NextLink>
            <Box flex={1} />
              <Nav />
            <Box flex={1} />
            <NavIcons/>
        </Toolbar>
    </AppBar>
  )
}
