import { useEffect, useState } from 'react';
import { googleBooksAPIKey } from '../../config';
import { Link, useParams } from 'react-router-dom';

function BookDetail() {
	const { isbn } = useParams();
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
		return (
			<p className='text-lg text-center bg-white p-6'>
				Loading book details...
			</p>
		);
	}

	const { title, description, infoLink } = bookDetails;

	return (
		<>
			<div className='bg-gradient-to-t from-babyPower to-white'>
				<h1 className='text-richBlack font-extrabold text-lg text-center bg-gradient-to-br from-sage to-white p-8 font-serif'>
					📚 More info about {title} 📚
				</h1>
			</div>
			<div className='flex p-6 w-fit justify-center'>
				<div className='flex flex-col flex-wrap items-center shadow-md shadow-slate-500 rounded-2xl md:w-[50%] bg-powderBlue bg-opacity-20 '>
					<img
						key={isbn}
						src={bookDetails.imageLinks.smallThumbnail}
						className='rounded-xl w-max h-auto object-cover m-2 p-2'
					/>
					<a
						href={infoLink}
						target='_blank'
						rel='noopener noreferrer'
						className='text-indigo font-extrabold text-3xl'
					>
						{title}
					</a>
					<div className='font-semibold text-richBlack mt-3'>
						{bookDetails.authors[0]}
					</div>
					<div className='flex flex-col items-center text-center'>
						<div className='p-8 text-richBlack'>{description}</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center mt-4 mb-10'>
				<Link
					to='/'
					className='px-4 py-2 bg-powderBlue text-richBlack font-semibold rounded-md hover:bg-indigo hover:text-babyPower transition-colors duration-200 '
				>
					Back Home
				</Link>
			</div>
		</>
	);
}

export default BookDetail;
