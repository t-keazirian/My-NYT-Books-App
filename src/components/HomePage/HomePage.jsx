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
						'Too many requests - please wait a few moments before trying again!'
					);
				}

				const data = await response.json();
				setBestSellersList(data.results.books);
				await sleep(12000);
			} catch (error) {
				setError(error.message);
			}
		};
		fetchBestSellersList();
	}, []);

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<>
			<div className='text-center mb-4 font-bold text-xl'>
				Click a card for more info
			</div>
			<ul className='flex flex-wrap justify-center'>
				{bestSellersList.map(
					({
						primary_isbn10,
						title,
						author,
						book_image,
						rank,
						rank_last_week,
						weeks_on_list,
					}) => (
						<li
							key={primary_isbn10}
							className='m-2 flex flex-col rounded-2xl shadow-md shadow-slate-700  p-2 md:max-w-56 max-w-80 list-none'
						>
							<Link to={`/book/${primary_isbn10}`}>
								<img
									key={primary_isbn10}
									src={book_image}
									className='rounded-lg w-full h-auto object-cover mb-2'
								/>
								<div className='flex flex-col'>
									<div className='font-bold text-xl text-center'>
										{toProperCase(title)}
									</div>
									<div className='font-medium text-lg text-center'>
										{author}
									</div>
									<div>Rank: {rank}</div>
									<div>Rank Last Week: {rank_last_week}</div>
									<div>Weeks on List: {weeks_on_list}</div>
								</div>
							</Link>
						</li>
					)
				)}
			</ul>
		</>
	);
}

export default HomePage;
