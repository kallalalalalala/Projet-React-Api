
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box, Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react';




const Userlists = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


return (
  <Box p={5} bg="gray.50" borderRadius="md" shadow="md">
    <Heading as="h1" size="xl" mb={4} textAlign="center">
      Posts
    </Heading>
    <UnorderedList spacing={3}>
      {data.map((post) => (
        <ListItem key={post.id} p={3} borderWidth="1px" borderRadius="md" bg="white" boxShadow="sm">
          <Heading as="h2" size="lg" mb={2}>
            {post.title}
          </Heading>
          <Text>{post.body}</Text>
        </ListItem>
      ))}
    </UnorderedList>
  </Box>
);

}  
export default Userlists;