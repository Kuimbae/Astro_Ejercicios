// @ts-check
import { defineConfig, envField } from 'astro/config';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  },
  env: {
    schema: {
      CONTENT_ISLAND_SECRET_TOKEN: envField.string({
        context: 'server', // Solo se usa en el servidor
        access: 'secret', // No se expone al cliente
        optional: false, // Es obligatorio
        default: "INFORM_VALID_TOKEN", // Valor por defecto si no se define
      }),
    },
  }
});