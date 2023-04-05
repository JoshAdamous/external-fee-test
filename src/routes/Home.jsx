import React, { useState, useEffect } from 'react';
import { Layout, Spacer, Feed } from '../ui';

function Home() {
  const API_URL = 'http://localhost:3000/feed';
  const [posts, setPosts] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const feedPosts = await response.json();
        setPosts(feedPosts);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // To simulate server speed delay
    setTimeout(() => fetchItems(), 1600);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 250);
  }, []);

  return (
    <Layout container>
      <Spacer gap="lg4" />

      <Feed posts={posts} isLoading={isLoading} fetchError={fetchError} />
    </Layout>
  );
}

export default Home;
