import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { bannerBtnStyles, bannerHeadingStyles, bannerImageBoxStyles, bannerStyles, bannerTextStyles } from './styles'

export const Banner = () => {
  return (
    <Flex {...bannerStyles}>
        <Box w={{ base: '100%', lg: '50%'}}>
          <Heading {...bannerHeadingStyles}>
            Online Shoping <br/> Made Easy
          </Heading>
          <Text  {...bannerTextStyles}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos temporibus fugiat libero architecto pariatur harum nam natus enim, aliquid distinctio itaque? Nisi soluta odit cupiditate id voluptatem temporibus dignissimos aspernatur!
          </Text>
          <Link href="/products">
          <Button {...bannerBtnStyles}>
            Shop Now
          </Button>
          </Link>
        </Box>
        <Box w={{ base: '100%', lg: '50%'}}>
          <Box {...bannerImageBoxStyles}/>
        </Box>
    </Flex>
  )
}
