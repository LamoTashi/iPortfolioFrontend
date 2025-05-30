import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 52017,
        https: {
            key: fs.readFileSync(path.resolve(__dirname, 'cert/localhost+2-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, 'cert/localhost+2.pem')),
        }
    }
});