export default {
    output: "export", // Enables static site generation
    images: {
      unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
    },
    basePath: "/valentine", // Change this to your repo name
    trailingSlash: true,
  };
  