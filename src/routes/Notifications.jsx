import React from 'react';
import { Layout, PageWrapper, Spacer, PageHeading, Button, Icon } from '../ui';

function Notifications() {
  return (
    <Layout container>
      <PageWrapper>
        <Spacer gap="lg4" />

        <PageHeading title="Notifications">
          <Button outline lg circle>
            <Icon title="more" />
          </Button>
        </PageHeading>
      </PageWrapper>
    </Layout>
  );
}

export default Notifications;
