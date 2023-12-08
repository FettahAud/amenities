import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        room: "./room.html",
        // add more sub pages here
      },
    },
  },
});
