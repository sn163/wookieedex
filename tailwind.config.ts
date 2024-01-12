import type { Config } from "tailwindcss";

export default {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  }
} satisfies Config;
