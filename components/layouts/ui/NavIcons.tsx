import { ShoppingCartOutlined } from '@mui/icons-material'
import { SearchOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { IconButton, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export const NavIcons = () => {
  return (
    <>
        <IconButton><SearchOutlined/></IconButton>
        <Link href='/cart'>
            <IconButton>
                <Badge badgeContent={2} color='secondary'>
                    <ShoppingCartOutlined/>
                </Badge>
            </IconButton>
        </Link>
        <Button>Menu</Button>
    </>
  )
}
