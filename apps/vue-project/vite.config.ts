import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import qiankun from "vite-plugin-qiankun";

import { slugToPort } from "@qiankun-micro/utils";

import { name } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), qiankun(name, { useDevMode: true })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  // base: "Replace your server path with your own when building",

  server: {
    origin: `http://localhost:${slugToPort(name)}`, // https://github.com/tengmaoqing/vite-plugin-qiankun/issues/9#issuecomment-957313848
    port: slugToPort(name),
  },
});
