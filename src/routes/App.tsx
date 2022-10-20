import Home from "../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../layout/Layout";
const SearchPage = lazy(() => import("../pages/SearchPage"));
const GenrePage = lazy(() => import("../pages/GenrePage"));
const MoviePage = lazy(() => import("../pages/Movie"));

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/genre/:id" element={<GenrePage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
