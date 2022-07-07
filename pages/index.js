import { Container, Button, Box, Link, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Container>
      <Box 
        borderRadius="lg" 
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
        p={3} 
        mb={6} 
        align="center"
      >
        Hello, I'm a developer lived in Vietnam
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Twel Vu
          </Heading>
          <p>Developer | Research Intern | Senior Student </p>
        </Box>

        <Box 
          flexShrink={0} 
          mt={{base: 4, md: 0}} 
          ml={{md: 6}} 
          align="center"
        >
          <Image 
            borderColor="whiteAlpha.800" 
            borderWidth={2} 
            borderStyle="solid" 
            maxWidth="100px"
            display="inline-block" 
            borderRadius="full"
            src="/images/twel.jpg"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          My passion as a developer comes from a life-long obsession with computer. 
          I'm lucky because of having the first laptop at the age of twelve. 
          After a long time in contact with the computer, I find myself love coding at the bottom of my heart.
          Now I'm a Junior Computer Science student at {' '}
          <NextLink href="https://en.uit.edu.vn/overview-vnuhcm-university-information-technology">
            <Link>University of Information Technology - VNUHCM</Link>
          </NextLink>
          . I chose Computer Vision (CV) and Deep Learning (DL) as my specialized because I found that 
          DL and CV will greatly help people's lives in the "Digital Age - 4IR".
        </Paragraph>
        
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Page
