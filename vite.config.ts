import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/geo': {
        target: 'http://geodb-free-service.wirefreethought.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/geo/, ''),
        secure: false, // For HTTP, disable SSL verification
      },
    },
  },
});
