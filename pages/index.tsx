import { Typography } from '@mui/material'
import { EcommerceLayout} from '../components/layouts'

export default function Home() {
  return (
    <EcommerceLayout title={'Teslo Ecommerce - Home'} pageDesciption={'Encuentra los mejores productos de Teslo aquí'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1}}>Tienda</Typography>
    </EcommerceLayout>
  )
}
