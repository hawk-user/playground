import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// 💡 Vite config reference → https://vite.dev/config/

export default defineConfig({
	plugins: [ react(), tailwindcss() ],
  	root: 'source',
	base: './',
	build: {
    	outDir: path.resolve(__dirname, 'dist'),
    	emptyOutDir: true,
    	rollupOptions: {
      		input: ['source/index.html']
    	}
  	}
})