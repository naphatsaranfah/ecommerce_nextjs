import React from 'react'
import { Text, Flex, Stack, Link } from '@chakra-ui/react'


export const AppLogo = () => {
    return (
        <Link href="/">
         <Text color="gray.800" fontWeight={800}>
            MS
            <Text as="span" color="brand.primary">BUY</Text>
        </Text>
        </Link>
       
    )
}
