import { Typography } from '@mui/material'
import React from 'react'
import { EcommerceLayout} from '../../components/layouts'

export default function Kids() {
  const pageDesciption = 'Encuentra los mejores productos  de Niños aquí'
  return (
    <EcommerceLayout title={'Teslo Ecommerce - Niño'} pageDesciption={pageDesciption}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1}}>{pageDesciption}</Typography>
    </EcommerceLayout>
  )
}
