'use client';

import 'swiper/css';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from './theme'
import { Navbar } from '@src/components/Navbar/Navbar';
import { Footer } from '@src/components/Footer';


export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>MS BUY</title>
      <meta title='description' content="Buy anything online"></meta>
      <link rel="icon" type="image/png" sizes='32x32' href="shopping_cart"/>
      </head>
   <body>
   <CacheProvider>
        <ChakraProvider theme={theme}>
          <Navbar/>
          {children}
          <Footer/>
        </ChakraProvider>
      </CacheProvider>
   </body>
    </html>
  )
}