import Head from 'next/head'
import React, {FC} from 'react'
import { LayoutProps } from '../../interfaces'


export const EcommerceLayout: FC <LayoutProps> = ({children, title, pageDesciption, imageFullUrl}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="or:title" content={pageDesciption} />
            <meta name="or:description" content={title} />
            {
                imageFullUrl &&(
                    <meta name="or:description" content={imageFullUrl} />
                )
            }
        
        </Head>
        <nav>
            {/** TODO: Navbar */}
        </nav>
        {/** TODO: SideMenu */}
        <main style={{
            margin: '80px auto',
            maxWidth: '1200px',
            padding: '0 30px'
        }}>{children}</main>
        {/** Footer */}
        <footer>
            {/** TODO: mi custom footer */}
        </footer>
    </>
  )
}
