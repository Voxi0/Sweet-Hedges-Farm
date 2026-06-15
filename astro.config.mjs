// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
    site: "https://voxi0.github.io",
    base: "/Sweet-Hedges-Farm",
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            tsconfigPaths: true,
        }
    }
});