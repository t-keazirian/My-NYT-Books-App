import { describe, expect, test } from 'vitest';
import HomePage from './HomePage';

describe('HomePage', () => {
	test('HomePage exists', () => {
		const appComponent = <HomePage />;
		expect(appComponent).toBeTruthy;
	});
});
