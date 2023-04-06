import React from 'react';
import { Layout, PageWrapper, Spacer, PageHeading, Button, Icon } from '../ui';

function Profile() {
  return (
    <Layout container>
      <PageWrapper>
        <Spacer gap="lg4" />

        <PageHeading title="Profile">
          <Button outline lg circle>
            <Icon title="more" />
          </Button>
        </PageHeading>
      </PageWrapper>
    </Layout>
  );
}

export default Profile;
