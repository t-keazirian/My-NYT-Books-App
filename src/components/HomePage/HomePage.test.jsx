import { describe, expect, test } from 'vitest';
import HomePage from './HomePage';

describe('HomePage', () => {
	test('HomePage exists', () => {
		const homePageComponent = <HomePage />;
		expect(homePageComponent).toBeTruthy;
	});
});
