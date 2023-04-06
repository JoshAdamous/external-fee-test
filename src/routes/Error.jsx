import { Link, useRouteError } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Layout, PageWrapper, Spacer, Button, Typography, Icon } from '../ui';

function Error() {
  const error = useRouteError();
  const theme = useTheme();

  return (
    <Layout container>
      <PageWrapper>
        <Spacer gap="xl4" />

        <Typography heading1 bold style={{ textAlign: 'center' }}>
          {error.statusText || error.message}
        </Typography>

        <Spacer gap="lg5" />

        <Layout centered>
          <Button as={Link} primary circle lg to="/">
            <Icon title="home" fill={theme.offBlack} />
          </Button>

          <Spacer gap="xs5" />

          <Typography subtitle opacity="0.4">
            Back home
          </Typography>
        </Layout>

        <Spacer gap="xl1" />
      </PageWrapper>
    </Layout>
  );
}

export default Error;
