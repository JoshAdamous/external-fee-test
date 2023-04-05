import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root, Home, Error } from '.';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Home />} />
    </Route>,
  ),
);

export default router;
