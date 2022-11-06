import { Box, Button } from '@mui/material'
import React from 'react'
import NextLink from 'next/link'
const links = [
    {
        label: 'Hombre',
        url: '/products/men'
    },
    {
        label: 'Mujeres',
        url: '/products/women'
    },
    {
        label: 'Niños',
        url: '/products/kids'
    }
]
export const Nav = () => {
  return (
    <Box sx={{ display: {xs: 'none', sm: 'block'}}}>
        {
            links.map(({label, url}) =>(
                <NextLink key={url} href={url}><Button>{label}</Button></NextLink>
            ))
        }
    </Box>
  )
}
