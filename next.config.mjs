/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static site generation
    images: {
      unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
    },
    basePath: "/valentine", // Replace with your GitHub repo name
    trailingSlash: true, // Helps with static routing
  };
  
  module.exports = nextConfig;
  