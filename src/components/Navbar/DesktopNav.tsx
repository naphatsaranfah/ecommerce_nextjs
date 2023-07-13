import { Box, Flex, Link, Stack } from '@chakra-ui/react'
import React from 'react'
import { cartSectionStyles, desktopNavStyles, logoSectionStyles } from './style'
import { AppLogo } from '../AppLogo'
import { navItems } from '../../helpers'
import { Search } from '../Search/Search'


export const DesktopNav = () => {
    return (
        <Flex {...desktopNavStyles}>
            <Stack {...logoSectionStyles}>
                <Box>
                    <AppLogo />
                </Box>
                {
                    navItems.map(navItem => <Box key={navItem.label}>
                        <Link href={navItem.href}>{navItem.label}</Link>
                    </Box>)
                }
                <Box ><Search/></Box>
            </Stack>

            <Stack {...cartSectionStyles}>
                <Box>wishlist</Box>
                <Box>cart</Box>
            </Stack>
        </Flex>
    )
}
