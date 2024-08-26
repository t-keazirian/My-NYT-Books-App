import { useEffect, useState } from 'react';
import { googleBooksAPIKey } from '../../constants/constants';

function BookDetail() {
	// needed due to limitations within NYT API calls
	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

	useEffect(() => {
		const fetchBestSellersList = async () => {
			try {
				const response = await fetch(
					`https://www.googleapis.com/books/v1/volumes?q=isbn:1250178630&key=${googleBooksAPIKey}`
				);

				if (!response.ok) {
					throw new Error(
						'Network response was not ok - please try again in a few moments'
					);
				}

				const data = await response.json();
				console.log(data.results.books, 'data');
				// setBestSellersList(data.results.books);
				await sleep(12000);
			} catch (error) {
				// setError(error.message);
				console.log(error);
			}
		};
		fetchBestSellersList();
	}, []);

	// if (error) {
	// 	return <p>Error: {error}</p>;
	// }

	return <>HELLO</>;
}

export default BookDetail;
