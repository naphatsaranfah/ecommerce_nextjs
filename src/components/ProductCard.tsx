import React from 'react'
import { Card, CardHeader, CardBody, Text, CardFooter, Stack, Image, Heading, Button, ButtonGroup, Divider, Flex } from '@chakra-ui/react'
import { Rating } from './Rating'
import { AddToCardButton } from './AddToCardButton'
import { IProduct } from '@src/model';


interface IProductCardProps {
    product: IProduct;
}


export const ProductCard = ({ product }: IProductCardProps) => {
    return (
        <Card w='sx' pos="relative" m="0.5rem">
            <CardBody>
                <Image
                    src={product.mainImage}
                    alt={product.name}
                    borderRadius="lg"
                />
                <Stack mt='6' spacing='3'>

                    <Flex justify="space-between" align="center">
                        <Heading size='md'>{product.name}</Heading>
                        <Flex color="brand.primaryDark" fontWeight="bold">
                            <Text fontSize="sm">$</Text>
                            <Text fontSize="lg">{product.price}</Text>
                        </Flex>
                    </Flex>

                    <Text>
                        {product.description}
                    </Text>
                    <Rating rating={product.rating} />
                    <AddToCardButton />
                </Stack>
            </CardBody>
            <Divider />
        </Card>
    )
}
