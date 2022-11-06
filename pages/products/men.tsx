import { Typography } from '@mui/material'
import React from 'react'
import { EcommerceLayout} from '../../components/layouts'

export default function Men() {
  return (
    <EcommerceLayout title={'Teslo Ecommerce - Hombres'} pageDesciption={'Encuentra los mejores productos de hombre de Teslo aquí'}>
      <Typography variant='h1' component='h1'>Tienda de hombre</Typography>
      <Typography variant='h2' sx={{ mb: 1}}>Encuentra los mejores productos de hombre de Teslo aquí</Typography>
    </EcommerceLayout>
  )
}
