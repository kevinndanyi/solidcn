import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import tailwindcss from '@tailwindcss/vite'

import { solidStart } from "@solidjs/start/config";
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    solidStart(),
    // solidPlugin(),
    tailwindcss(),
    nitro()
  ]
});
