import { useEffect, useState } from 'react';
import { newYorkTimesAPIKey } from '../../config';
import { toTitleCase } from '../../helpers/helpers';
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
		return (
			<div className='text-lg text-center bg-white p-6 text-red-600'>
				Error: {error}
			</div>
		);
	}

	return (
		<>
			<div className='text-center font-bold text-xl m-4 p-3 text-richBlack'>
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
							className='m-4 flex flex-col rounded-2xl shadow-md shadow-slate-500 p-2 md:max-w-64 max-w-80 list-none bg-powderBlue bg-opacity-20 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-indigo'
						>
							<Link
								to={`/book/${primary_isbn10}`}
								title={`See details for: ${
									title ? toTitleCase(title) : 'your chosen book'
								}`}
							>
								{book_image && (
									<img
										key={primary_isbn10}
										src={book_image}
										className='rounded-xl w-full h-auto object-cover mb-2 p-2'
										alt={`Cover of ${title ? toTitleCase(title) : 'the book'}`}
									/>
								)}
								<div>
									<div className='font-extrabold text-xl text-center text-richBlack'>
										{title ? toTitleCase(title) : 'No title available'}
									</div>
									<div className='font-semibold text-lg text-center px-2 py-1 text-richBlack'>
										{author ? author : 'No author available'}
									</div>
									<div className='p-2'>
										<p className='text-gray-600'>
											Current Rank: {rank ?? 'N/A'}
										</p>
										<p className='text-gray-600'>
											Rank Last Week: {rank_last_week ?? 'N/A'}
										</p>
										<p className='text-gray-600'>
											Weeks on List: {weeks_on_list ?? 'N/A'}
										</p>
									</div>
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
