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
		globals: true,
		environment: 'jsdom',
	},
	define: {
		global: globalThis,
	},
});
