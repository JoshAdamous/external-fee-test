import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Avatar, Typography, Button, Icon, ParallaxContent } from '../ui';
import { timeAgo } from './utils';

const PostMedia = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(19, 21, 23, 0), rgba(19, 21, 23, 0.65));
    z-index: 1;
  }

  img {
    width: 100%;
    height: 120%;
    object-fit: cover;
    border-radius: 4.5rem;
    transition: all 1.2s cubic-bezier(0.075, 0.82, 0.165, 1);

    @media (max-width: 680px) {
      border-radius: 4rem;
    }
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border-radius: 4.5rem;
  aspect-ratio: 1;
  transition: all 0.65s cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow: hidden;
  cursor: pointer;

  &:is(:hover, :focus) {
    scale: 1.015;

    ${PostMedia} {
      img {
        scale: 1.075;
      }
    }
  }

  /* &:is(:active) {
    scale: 0.96;
  } */

  @media (min-width: 681px) {
    &:is(:hover, :focus) {
      ${Button} {
        &:nth-child(1) {
          bottom: 13.25rem;
        }

        &:nth-child(2) {
          bottom: 7.5rem;
        }

        &:nth-child(1),
        &:nth-child(2) {
          opacity: 1;
          transition: all 0.33s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      }
    }
  }

  @media (max-width: 680px) {
    aspect-ratio: 4/5;
    border-radius: 4rem;
  }

  @media (max-width: 480px) {
    aspect-ratio: 2/3;
  }
`;

const PostHeading = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  background-color: rgba(19, 21, 23, 0.5);
  /* backdrop-filter: blur(12px); */
  padding: 10px;
  padding-right: 28px;
  margin: 28px;
  border-radius: 48px;
  overflow: hidden;
  z-index: 2;
`;

const PostBody = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1.75rem;
  padding: 3rem;
  padding-right: 1rem;

  @media (max-width: 680px) {
    gap: 1.5rem;
    padding: 2.5rem 0.5rem 2.5rem 2.25rem;
  }
`;

const Tags = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const PostActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.75rem;
  justify-content: end;

  ${Button} {
    transition-duration: 0.88s;

    &:nth-child(3) {
      transition-duration: 0.44s;
    }
  }

  @media (min-width: 681px) {
    ${Button} {
      &:nth-child(1),
      &:nth-child(2) {
        position: absolute;
        bottom: 1.75rem;
        opacity: 0;
      }

      &:nth-child(3) {
        position: relative;
      }
    }
  }

  @media (max-width: 680px) {
    gap: 0.5rem;
    padding: 1rem;

    ${Button} {
      width: 6.5rem;
      height: 6.5rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    padding: 1.75rem;

    ${Button} {
      width: 5rem;
      height: 5rem;
    }
  }
`;

function Post({ post, handleLike }) {
  const { id, created, liked, text, image, tags, author } = post;
  const theme = useTheme();

  return (
    <PostWrapper>
      <PostMedia>
        <ParallaxContent>
          <img src={image} alt="" />
        </ParallaxContent>
      </PostMedia>

      <div>
        <PostHeading>
          <Avatar lg>
            <img src={author?.avatar} alt="" />
          </Avatar>

          <div>
            <Typography paragraph semibold as="h4">
              {author?.displayName}
            </Typography>
            <Typography subtitle opacity="0.65" as="p">
              {timeAgo(created)}
            </Typography>
          </div>
        </PostHeading>
      </div>

      <PostBody>
        <PostContent>
          <Typography lead as="p">
            {text}
          </Typography>

          <Tags>
            {tags?.map((tag, i) => (
              <Typography key={tag + i} label="true" semibold opacity="0.65" as="p">
                {'#' + tag}
              </Typography>
            ))}
          </Tags>
        </PostContent>

        <PostActions>
          <Button dkTransparent lg circle>
            <Icon title="share" />
          </Button>

          <Button dkTransparent lg circle>
            <Icon title="comment" />
          </Button>

          {liked ? (
            <Button red lg circle onClick={() => handleLike(id)}>
              <Icon title="heartFilled" fill={theme.white} />
            </Button>
          ) : (
            <Button white lg circle onClick={() => handleLike(id)}>
              <Icon title="heart" fill={theme.offBlack} />
            </Button>
          )}
        </PostActions>
      </PostBody>
    </PostWrapper>
  );
}

export default Post;
