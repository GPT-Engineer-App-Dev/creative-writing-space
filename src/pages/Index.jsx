import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, Button, Spacer, useColorMode, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram, FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
      variant="ghost"
    />
  );
};

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justify="space-between" align="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/add-post">Add Post</Link>
          <ColorModeSwitcher />
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.700" color="white" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to My Blog</Heading>
        <Text fontSize="xl">A place to share knowledge and ideas</Text>
      </Box>

      {/* Recent Blog Posts */}
      <Container maxW="container.md" py={10}>
        <Heading as="h3" size="xl" mb={6}>Recent Posts</Heading>
        <VStack spacing={8} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Post Title 1</Heading>
            <Text mt={4}>This is a brief excerpt of the blog post...</Text>
            <Button mt={4} colorScheme="teal">Read More</Button>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Post Title 2</Heading>
            <Text mt={4}>This is a brief excerpt of the blog post...</Text>
            <Button mt={4} colorScheme="teal">Read More</Button>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Post Title 3</Heading>
            <Text mt={4}>This is a brief excerpt of the blog post...</Text>
            <Button mt={4} colorScheme="teal">Read More</Button>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10}>
        <Container maxW="container.md">
          <Flex justify="space-between" align="center">
            <Text>© 2023 My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
              <Link href="https://facebook.com" isExternal><FaFacebook /></Link>
              <Link href="https://instagram.com" isExternal><FaInstagram /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;