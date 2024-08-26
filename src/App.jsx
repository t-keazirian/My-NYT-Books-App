import HomePage from './components/HomePage/HomePage';

function App() {
	return (
		<div className='bg-gradient-to-t from-babyPower to-white'>
			<h1 className='font-extrabold text-4xl text-center bg-gradient-to-br from-sage to-white p-8'>
				Current NYT Best Sellers
			</h1>
			<HomePage />
		</div>
	);
}

export default App;
