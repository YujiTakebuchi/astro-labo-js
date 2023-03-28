import { defineConfig } from "astro/config";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://yujitakebuchi.github.io",
  base: "astro-labo-js",
  integrations: [image()],
});
