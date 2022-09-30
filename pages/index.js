import { Container, Button, Box, Link, SimpleGrid, Heading, Image, Icon, useColorModeValue, List, ListItem } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoFacebook } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
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
            <p>Machine Learning | Computer Vision | AI Engineer</p>
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

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Ho Chi Minh City, Vietnam.
          </BioSection>
        </Section>
        
        <Section delay={0.3}>
          <Heading as="h3" variant={"selection-title"}>
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/twelcone" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                  @twelcone
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://facebook.com/dangvu2k1" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoFacebook} />}>
                  Đăng Vũ
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
