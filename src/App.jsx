import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import Loader from "./shared/components/Loader/Loader";

const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const NoutFoundPage = lazy(() => import('./pages/NoutFoundPage/NoutFoundPage'));

function App() {

  return (
    <>
     <Layout>  
      <Suspense fallback={<Loader />}>
          <Routes>     
            <Route path="/" element={<Home/>} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NoutFoundPage />} />
          </Routes>
      </Suspense>
      </Layout>
    </>
  )
}

export default App
