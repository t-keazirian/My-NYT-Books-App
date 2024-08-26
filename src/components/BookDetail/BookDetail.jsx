import { useEffect, useState } from 'react';
import { googleBooksAPIKey } from '../../constants/constants';
import { useParams } from 'react-router-dom';

function BookDetail() {
	const { isbn } = useParams();
	console.log(isbn, 'isbn');
	const [bookDetails, setBookDetails] = useState(null);

	useEffect(() => {
		if (!isbn) return;

		const fetchBookDetails = async () => {
			try {
				const response = await fetch(
					`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${googleBooksAPIKey}`
				);

				if (!response.ok) {
					throw new Error('Failed to fetch book details!');
				}

				const data = await response.json();
				console.log(data.items[0].volumeInfo, 'data');

				if (data.items && data.items.length > 0) {
					setBookDetails(data.items[0].volumeInfo);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchBookDetails();
	}, [isbn]);

	if (!bookDetails) {
		return <p>Loading book details...</p>;
	}

	const { title, description, infoLink } = bookDetails;

	return (
		<>
			<div>{title}</div>
			<img key={isbn} src={bookDetails.imageLinks.smallThumbnail} />
			<div>{bookDetails.authors[0]}</div>
			<div>{description}</div>
			<div>{infoLink}</div>
		</>
	);
}

export default BookDetail;
