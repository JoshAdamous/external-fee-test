import React, { useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader, Typography, Button, Icon, Stack, Post } from '../ui';
import { clampBuilder } from './utils';

const StyledFeed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-inline-size: 37.5rem;
  inline-size: 100%;
  margin-inline: auto;
  padding-bottom: 6rem;

  @media (max-width: 680px) {
    padding-bottom: 0.5rem;
  }
`;

const FeedHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 680px) {
    padding-left: 2rem;
    padding-right: 1.5rem;
    margin-bottom: 1.75rem;
  }
`;

const FeedSearch = styled.input`
  width: 100%;
  font-size: ${clampBuilder(400, 800, 1.5, 2.75)};
  line-height: ${clampBuilder(400, 800, 2.25, 3)};
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.white};
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 1rem;
  margin-bottom: 4rem;
  transition: all 0.33s cubic-bezier(0.075, 0.82, 0.165, 1);
  outline: none;

  &:is(:hover, :focus) {
    border-color: rgba(255, 255, 255, 0.4);
  }

  &:is(:active, :focus) {
    border-color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 680px) {
    width: calc(100% - 3.5rem);
    margin-left: 2rem;
    margin-right: 1.5rem;
    margin-bottom: 2.25rem;
  }
`;

const HeadingActions = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 680px) {
    gap: 0.75rem;
  }
`;

const searchInputVariants = {
  open: {
    opacity: 1,
    height: 'auto',
  },
  collapsed: { opacity: 0, height: 0 },
};

function Feed({ isLoading, fetchError, posts }) {
  const theme = useTheme();
  const searchRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');

  function handleToggleSearch() {
    !showSearch && searchRef.current.focus();
    setShowSearch(!showSearch);
  }

  return (
    <StyledFeed>
      <FeedHeading>
        <Typography heading1 bold as="h1">
          News
        </Typography>

        <HeadingActions>
          <Button primary lg circle>
            <Icon title="add" fill={theme.offBlack} />
          </Button>

          <Button outline lg circle onClick={handleToggleSearch}>
            <Icon title="search" />
          </Button>
        </HeadingActions>
      </FeedHeading>

      <motion.div
        variants={searchInputVariants}
        initial={showSearch ? 'open' : 'collapsed'}
        animate={showSearch ? 'open' : 'collapsed'}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <FeedSearch
            ref={searchRef}
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </motion.div>

      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 600 }}>
          <Loader />
        </div>
      )}
      {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
      <AnimatePresence>
        {!fetchError && !isLoading && (
          <motion.div initial={{ y: 96, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.44 }}>
            <Stack gap="sm3">
              {posts?.map((post, i) => (
                <Post key={i} post={post} />
              ))}
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledFeed>
  );
}

export default Feed;
