import React from 'react';
import { Layout, PageWrapper, Spacer, PageHeading, Button, Icon } from '../ui';

function Menu() {
  return (
    <Layout container>
      <PageWrapper>
        <Spacer gap="lg4" />

        <PageHeading title="Menu">
          <Button outline lg circle>
            <Icon title="more" />
          </Button>
        </PageHeading>
      </PageWrapper>
    </Layout>
  );
}

export default Menu;
