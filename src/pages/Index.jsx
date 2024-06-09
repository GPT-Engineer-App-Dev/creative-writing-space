import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, Button, Spacer, useColorMode, IconButton, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram, FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import React from "react";

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
  const [posts, setPosts] = useState([
    { id: 1, title: "Post Title 1", excerpt: "This is a brief excerpt of the blog post..." },
    { id: 2, title: "Post Title 2", excerpt: "This is a brief excerpt of the blog post..." },
    { id: 3, title: "Post Title 3", excerpt: "This is a brief excerpt of the blog post..." },
  ]);
  const [postToDelete, setPostToDelete] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleDelete = (post) => {
    setPostToDelete(post);
    onOpen();
  };

  const confirmDelete = () => {
    setPosts(posts.filter(post => post.id !== postToDelete.id));
    onClose();
  };

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
          {posts.map(post => (
            <Box key={post.id} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.excerpt}</Text>
              <Button mt={4} colorScheme="teal">Read More</Button>
              <Button mt={4} colorScheme="red" onClick={() => handleDelete(post)}>Delete</Button>
            </Box>
          ))}
        </VStack>
      </Container>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Post
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this post? This action cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={confirmDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

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