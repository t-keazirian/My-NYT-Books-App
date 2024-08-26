import { expect, test } from 'vitest';
import App from './App';

test('App exists', () => {
	const appComponent = <App />;
	expect(appComponent).toBeTruthy;
});
