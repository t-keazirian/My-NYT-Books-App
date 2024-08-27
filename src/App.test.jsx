import { describe, expect, test } from 'vitest';
import App from './App';

describe('App', () => {
	test('App exists', () => {
		const appComponent = <App />;
		expect(appComponent).toBeTruthy;
	});
});
