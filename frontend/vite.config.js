import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 5173
    },
    base: '/app/' // Note: this is done so that backend can serve the frontend
}) 