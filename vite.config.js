import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    css:{
      postcss:{
        plugins: [
          postcssImport(),
          autoprefixer(),
          tailwindcss(),
        ],
      }
    },
    define: {
      'process.env.REACT_APP_API_URL': JSON.stringify(env.REACT_APP_API_URL),
    },
    plugins: [react()],
    server: {
      port: 4173,
    },
    transpileDependencies: true,
  };
});
