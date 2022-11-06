import { Typography } from '@mui/material'
import React from 'react'
import { EcommerceLayout} from '../../components/layouts'

export default function Women() {
  const pageDesciption = 'Encuentra los mejores productos  de Mujeres aquí'
  return (
    <EcommerceLayout title={'Teslo Ecommerce - Mujeres'} pageDesciption={pageDesciption}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1}}>{pageDesciption}</Typography>
    </EcommerceLayout>
  )
}
