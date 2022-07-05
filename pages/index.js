import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>    
      <Box borderRadius="lg" bg="red" p={3} mb={6} align='center'>
        Hello, I'm a college student at University of Information Technology - VNUHCM
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
	  <Heading as="h2" variant="page-title">
	    Twel Vu
      	  </Heading>
	  <p>Research Intern | Student </p>
	</Box>
      </Box>
    </Container>
  )
} 

export default Page
