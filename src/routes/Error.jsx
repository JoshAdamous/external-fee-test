import { useRouteError } from 'react-router-dom';
import { Layout, Spacer, Button, Typography } from '../ui';

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Layout container>
        <Spacer gap="xl4" />

        <div>{/* <SectionHeading medium subtitle="Oops!" title={'Something‘s\nnot right'} pullLeft /> */}</div>

        <Spacer gap="lg3" />

        <Typography paragraph>{error.statusText || error.message}</Typography>

        <Spacer gap="lg5" />

        <Layout centered>
          <Button text="back home" pathTo="/" />
        </Layout>

        <Spacer gap="xl1" />
      </Layout>
    </>
  );
}

export default Error;
