
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/js'),
      '~': resolve(__dirname, './src/styles')
    },
  },
})
