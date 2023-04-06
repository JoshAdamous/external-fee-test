import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root, Error, Home, Discover, Notifications, Menu, Profile } from '.';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/profile" element={<Profile />} />
    </Route>,
  ),
);

export default router;
