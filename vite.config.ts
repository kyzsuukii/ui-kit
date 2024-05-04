import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true,
    include: './src/lib',
  })],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/lib/main.ts'),
      name: 'ui-kit',
      fileName: 'ui-kit',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'storybook', 'tailwindcss'],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
    sourcemap: true,
  },
})
