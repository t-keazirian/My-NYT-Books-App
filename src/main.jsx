import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import BookDetail from './components/BookDetail/BookDetail';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'book/:isbn',
		element: <BookDetail />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
