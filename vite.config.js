import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
	plugins: [react()],
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
	test: {
		environment: 'jsdom', // Ensure jsdom is used
	},
	define: {
		global: globalThis,
	},
});
