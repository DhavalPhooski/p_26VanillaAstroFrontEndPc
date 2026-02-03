// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      allowedHosts: [
        'disciplines-proceeds-filtering-these.trycloudflare.com'
      ]
    }
  }
});
