import { defineConfig } from 'vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: 'assets',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, './assets/fonts'),
          dest: ''
        },
        {
          src: path.resolve(__dirname, './assets/images'),
          dest: ''
        }
      ]
    })
  ],
  resolve: {
    alias: {
      jquery: 'jquery',
      slick: 'slick',
      '@images': path.resolve(__dirname, './assets/images'),
      '@ts': path.resolve(__dirname, './assets/ts'),
      '@components': path.resolve(__dirname, './assets/ts/components')
    }
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: './assets/ts/components.ts'
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: (_assetInfo) => {
          return '[name].[ext]';
        }
      }
    },
    outDir: '../dist'
  },
  server: {
    watch: {
      ignored: ['**/node_modules/**']
    }
  }
});
