import React from 'react';
import { Layout, PageWrapper, Spacer, PageHeading, Button, Icon } from '../ui';

function Discover() {
  return (
    <Layout container>
      <PageWrapper>
        <Spacer gap="lg4" />

        <PageHeading title="Discover">
          <Button outline lg circle>
            <Icon title="search" />
          </Button>
        </PageHeading>
      </PageWrapper>
    </Layout>
  );
}

export default Discover;
