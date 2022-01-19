module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path:false };

    return config;
  },
  reactStrictMode: true,  
  images: {
    domains: ["randomuser.me", "images.unsplash.com", "static.wikia.nocookie.net"],
  },
}
