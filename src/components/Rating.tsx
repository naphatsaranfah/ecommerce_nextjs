import { Flex, Text} from '@chakra-ui/react'
import { colors } from '@src/app/theme'
import { IRating } from '@src/model';
import React from 'react'
import ReactStars from 'react-stars'


interface IRatingProps {
    rating: IRating;
}

export const Rating = ({rating}: IRatingProps) => {
  return (
    <Flex>
        <ReactStars  count={5} value={3.5} half={true} size={18} color2={colors.brand.primary} edit={false}/>
        <Text>({200})</Text>
    </Flex>
  )
}
