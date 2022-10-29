import Home from '../pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../layout/Layout';
import Movies from '../pages/Movies';
import { MULTI_PATH } from '../constant';
const SearchPage = lazy(() => import('../pages/SearchPage'));
const GenrePage = lazy(() => import('../pages/GenrePage'));
const MoviePage = lazy(() => import('../pages/Movie'));
const MovieTvPage = lazy(() => import('../pages/MovieTv'));
function App() {
	return (
		<BrowserRouter>
			<Suspense>
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<Home />} />
						<Route path='/search/:query' element={<SearchPage />} />
						<Route path='/genre/:id' element={<GenrePage />} />
						<Route path='/movie/:id' element={<MoviePage />} />
						<Route path='/tv/:id' element={<MovieTvPage />} />
						{MULTI_PATH.map(path => (
							<Route path={path} element={<Movies />} />
						))}
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
