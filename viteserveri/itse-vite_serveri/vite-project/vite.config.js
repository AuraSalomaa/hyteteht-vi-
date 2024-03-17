

// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'startauth.html'),
        profile: resolve(__dirname, 'api-harjoituspohja.html'),
        register: resolve (__dirname, 'register.html')
      },
    },
  },
  base: '/dist/',
}); 