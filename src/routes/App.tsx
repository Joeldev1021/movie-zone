import Home from '../pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../layout/Layout';
import Movies from '../pages/Movies';
import { MULTI_PATH } from '../constant';
import Loading from '../components/Loading';
const SearchPage = lazy(() => import('../pages/SearchPage'));
const GenrePage = lazy(() => import('../pages/GenrePage'));
const MoviePage = lazy(() => import('../pages/Movie'));
const PersonPage = lazy(() => import('../pages/Person'));
function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<Home />} />
						<Route path='/search/:query' element={<SearchPage />} />
						<Route path='/genre/:id' element={<GenrePage />} />
						<Route path='/movie/:id' element={<MoviePage />} />
						<Route path='/tv/:id' element={<MoviePage />} />
						{MULTI_PATH.map(path => (
							<Route key={path} path={path} element={<Movies />} />
						))}
						<Route path='/person/:id' element={<PersonPage />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
