import React, { useState, useEffect } from 'react';
import { Layout, PageWrapper, Spacer, Feed } from '../ui';

function Home() {
  const API_URL = 'http://localhost:3000/feed';
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async (url) => {
    try {
      const response = await fetch(url || API_URL);
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

  useEffect(() => {
    setTimeout(() => fetchPosts(), 2600);
  }, []);

  function handleSearchSubmit() {
    setSearchQuery(searchQuery.trim());
    if (searchQuery.length === 0) return;
    setIsLoading(true);
    const reqUrl = `${API_URL}/${'?q=' + searchQuery}`;
    setTimeout(() => fetchPosts(reqUrl), 140);
  }

  function handleReset() {
    setIsLoading(true);
    setSearchQuery('');
    setTimeout(() => fetchPosts(), 220);
  }

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 250);
  }, []);

  return (
    <Layout container>
      <PageWrapper>
        <Spacer gap="lg4" />

        <Feed
          posts={posts}
          setPosts={setPosts}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleReset={handleReset}
          handleSearchSubmit={handleSearchSubmit}
          isLoading={isLoading}
          fetchError={fetchError}
          setFetchError={setFetchError}
        />
      </PageWrapper>
    </Layout>
  );
}

export default Home;
