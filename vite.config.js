
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/enelx-products-list-react/',
  plugins: [react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } })],
  resolve: {
    alias: {
      '@data': resolve(__dirname, './src/data'),
      '@components': resolve(__dirname, './src/js/components'),
      '@store': resolve(__dirname, './src/js/store'),
      '~styles': resolve(__dirname, './src/styles')
    },
  },
})
