import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Docker内での実行時にホストからアクセス可能に
    watch: {
      usePolling: true,  // Dockerでのホットリロードのために必要
    }
  }
})