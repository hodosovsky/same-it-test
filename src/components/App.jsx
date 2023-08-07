import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout';

const HomePage = lazy(() => import('../pages/HomePage/'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>

          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
