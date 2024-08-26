import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8889,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      ...(process.env.NODE_ENV === 'production' ? {
        crypto: 'crypto-browserify',
      } : {}),
    },
  },
  build: {
		rollupOptions: {
			plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
		},
	},
  plugins: [
    react(),
  ],
})
