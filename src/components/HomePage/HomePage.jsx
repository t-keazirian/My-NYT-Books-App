import { useEffect, useState } from 'react';
import { newYorkTimesAPIKey } from '../../constants/constants';
import { toProperCase } from '../../helpers/helpers';
import { Link } from 'react-router-dom';

function HomePage() {
	const [bestSellersList, setBestSellersList] = useState([]);
	const [error, setError] = useState(null);

	// needed due to limitations within NYT API calls
	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

	useEffect(() => {
		const fetchBestSellersList = async () => {
			try {
				const response = await fetch(
					`https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=${newYorkTimesAPIKey}`
				);

				if (!response.ok) {
					throw new Error(
						'Network response was not ok - please try again in a few moments'
					);
				}

				const data = await response.json();
				console.log(data.results.books, 'data');
				setBestSellersList(data.results.books);
				await sleep(12000);
			} catch (error) {
				setError(error.message);
				console.log(error);
			}
		};
		fetchBestSellersList();
	}, []);

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<>
			<div>Click the title for more info</div>
			<ul className='flex'>
				{bestSellersList.map(
					({ primary_isbn10, title, author, book_image }) => (
						<li key={primary_isbn10} className='list-none'>
							<Link to={`/book/${primary_isbn10}`}>
								Name: {toProperCase(title)}
							</Link>
							Author: {author}
							<img key={primary_isbn10} src={book_image} />
						</li>
					)
				)}
			</ul>
		</>
	);
}

export default HomePage;
