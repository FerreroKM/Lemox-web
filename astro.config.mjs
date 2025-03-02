import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


export default defineConfig({
  integrations: [tailwind()],
  outDir: '/var/www/lemox-web',
  build: {
    format: 'directory',
    inlineStylesheets: 'always'
  },
  vite: {
    ssr: {
      noExternal: [
        /.*/, // [!code focus] // Fuerza a incluir TODOS los paquetes
      ]
    }
  }
});
