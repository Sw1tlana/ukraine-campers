
// import css from './App.module.css';
import { Route, Routes, Navigate  } from 'react-router-dom';
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import Loader from "./shared/components/Loader/Loader";

const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

function App() {

  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

export default App
