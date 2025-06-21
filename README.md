# 🚀Launch Landing 

A sleek, responsive landing page template for startups, product launches, or promotional campaigns. Built with modern web technologies for optimal performance.


# After Creating app we install Tailwind CSS
step: 1
npm install tailwindcss @tailwindcss/vite

step: 2 (in vite.config.ts)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

step 3: (in index.css)
@import "tailwindcss";

If we don't do this then none of the Tailwind styling will be applied.

# Now we will install state management solution that we will be use to create the theme of our project.
Here, we will be able to switch btw dark mode and the light mode.
For manage this state management we will use Zustand here.
-> npm install zustand
