import { describe, expect, test } from 'vitest';
import BookDetail from './BookDetail';

describe('BookDetail', () => {
	test('BookDetail Page exists', () => {
		const bookDetailComponent = <BookDetail />;
		expect(bookDetailComponent).toBeTruthy;
	});
});
