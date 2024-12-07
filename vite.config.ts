import eslint from '@rollup/plugin-eslint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: ['src/**/*.+(js|jsx|ts|tsx)'], // Specify the files to lint
    }),
  ],
});
