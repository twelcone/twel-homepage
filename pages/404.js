import NextLink from 'next/link'
import { Box, Text, Heading, Container, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not Found</Heading>
            <Text>The page you are looking for was not found.</Text>
            <Divider my={6} />
            <Box>
                <NextLink href="/">
                    <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound