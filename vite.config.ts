import { defineConfig } from "vite";
import path from "path";
import Vue from "@vitejs/plugin-vue";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons";
import ViteComponents from "vite-plugin-components";
import WindiCSS from "vite-plugin-windicss";
import PurgeIcons from "vite-plugin-purge-icons";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
    },
  },
  plugins: [
    Vue(),

    ViteComponents({
      globalComponentsDeclaration: true,
      deep: true,
      dirs: ["src/views", "src/components", "src/layouts"],
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: "icon",
        }),
      ],
    }),

    ViteIcons(),
    PurgeIcons(),

    WindiCSS(),

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "i18n/**")],
    }),
  ],

  server: {
    port: 8080,
    fs: {
      strict: true,
    },
  },

  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core"],
  },
});
