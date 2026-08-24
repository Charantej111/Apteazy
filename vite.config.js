import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = command === 'build' || mode === 'production'

  return {
    plugins: [
      react(),
      // Production-only asset compression plugins (strictly disabled in local dev for instant HMR)
      ...(isProduction
        ? [
          // Gzip compression for JS, CSS, HTML, SVG, and static assets
          compression({
            algorithm: 'gzip',
            exclude: [/\.(br)$/, /\.(gz)$/],
            threshold: 1024,
          }),
          // Brotli compression for superior production transfer compression
          compression({
            algorithm: 'brotliCompress',
            exclude: [/\.(br)$/, /\.(gz)$/],
            threshold: 1024,
          }),
          // High-efficiency Image compression for public/dist assets (PNG, JPG, WebP, SVG)
          ViteImageOptimizer({
            png: {
              quality: 80,
              compressionLevel: 8,
            },
            jpeg: {
              quality: 80,
            },
            jpg: {
              quality: 80,
            },
            webp: {
              quality: 80,
            },
            svg: {
              multipass: true,
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      cleanupNumericValues: false,
                    },
                  },
                },
              ],
            },
          }),
        ]
        : []),
    ],
    server: {

      open: true,
      watch: {
        ignored: ['**/*.mp4']
      }
    },
    build: {
      minify: 'esbuild',
      cssMinify: true,
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            animations: ['framer-motion'],
            icons: ['lucide-react'],
          },
        },
      },
    },
  }
})
