import React, { useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader, PageHeading, Typography, Button, Icon, Stack, Post } from '../ui';
import { clampBuilder, apiRequest } from './utils';

const FeedForm = styled.form`
  position: relative;
`;

const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
  width: 4rem;
  height: 4rem;
  background-color: transparent;
  border-radius: 50%;
  border: 0;
  transition: all 0.33s cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 0.65;
  cursor: pointer;
  z-index: 2;

  &:is(:hover, :focus) {
    background-color: rgba(255, 255, 255, 0.12);
    scale: 1.05;
    opacity: 1;
  }

  &:is(:active) {
    scale: 0.96;
  }

  &.reset-button {
    right: 104px;
  }

  &.search-button {
    right: 8px;
  }

  @media (max-width: 680px) {
    width: 3rem;
    height: 3rem;
    top: -4px;

    &.reset-button {
      right: 124px;
    }

    &.search-button {
      right: 32px;
    }
  }

  @media (max-width: 480px) {
    top: -8px;
    &.reset-button {
      right: 96px;
    }

    &.search-button {
      right: 24px;
    }
  }
`;

const FeedSearch = styled.input`
  width: 100%;
  font-size: ${clampBuilder(400, 800, 1.5, 2.75)};
  line-height: 1;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.white};
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: 0;
  padding-right: 12rem;
  padding-bottom: 1rem;
  margin-bottom: 4rem;
  transition: all 0.33s cubic-bezier(0.075, 0.82, 0.165, 1);
  outline: none;

  &:is(:hover, :focus) {
    border-color: rgba(255, 255, 255, 0.4);
  }

  &:is(:active, :focus) {
    border-color: ${({ theme }) => theme.brand};
  }

  @media (max-width: 680px) {
    width: calc(100% - 2rem);
    padding-right: 11rem;
    margin-inline: 1rem;
    margin-bottom: 2.25rem;
  }

  @media (max-width: 480px) {
    padding-right: 9rem;
  }
`;

const searchInputVariants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: { type: 'spring', stiffness: 80 },
  },
  collapsed: { opacity: 0, height: 0, transition: { type: 'spring', stiffness: 36 } },
};

function Feed({
  posts,
  setPosts,
  searchQuery,
  setSearchQuery,
  handleReset,
  handleSearchSubmit,
  isLoading,
  fetchError,
  setFetchError,
}) {
  const API_URL = 'https://mock-social-media.herokuapp.com/feed';
  const theme = useTheme();
  const searchRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);

  function handleToggleSearch() {
    !showSearch && searchRef.current.focus();
    setShowSearch(!showSearch);
  }

  const handleLike = async (id) => {
    const postItems = posts.map((post) => (post.id === id ? { ...post, liked: !post.liked } : post));
    setPosts(postItems);

    const myPost = postItems.filter((post) => post.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ liked: myPost[0].liked }),
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);

    if (result) setFetchError(result);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleSearchSubmit();
  }

  return (
    <>
      <PageHeading title="Newest">
        <Button primary lg circle>
          <Icon title="add" fill={theme.offBlack} />
        </Button>

        <Button outline lg circle onClick={handleToggleSearch}>
          <Icon title={showSearch ? 'close' : 'search'} />
        </Button>
      </PageHeading>

      <motion.div
        variants={searchInputVariants}
        initial={showSearch ? 'open' : 'collapsed'}
        animate={showSearch ? 'open' : 'collapsed'}
      >
        <FeedForm onSubmit={handleSubmit}>
          <FeedSearch
            ref={searchRef}
            placeholder="Search..."
            type="text"
            role="searchbox"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {searchQuery.length >= 1 ? (
            <FormButton as="div" className="reset-button" onClick={handleReset}>
              <Icon title="reset" />
            </FormButton>
          ) : null}

          <FormButton type="submit" className="search-button">
            <Icon title="arrowRight" />
          </FormButton>
        </FeedForm>
      </motion.div>

      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 600 }}>
          <Loader />
        </div>
      )}

      {fetchError && (
        <Typography label="true" semibold as="p" style={{ color: 'red' }}>{`Error: ${fetchError}`}</Typography>
      )}

      <AnimatePresence>
        {!fetchError && !isLoading && (
          <motion.div
            initial={{ y: 96, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.44, type: 'spring', stiffness: 65 }}
          >
            <Stack gap="sm3">
              {posts?.map((post, i) => (
                <Post key={i} post={post} handleLike={handleLike} />
              ))}

              {!posts || posts.length === 0 ? (
                <Typography paragraph medium opacity="0.5">
                  No posts, try again.
                </Typography>
              ) : null}
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Feed;
