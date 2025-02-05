module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint checks during the build process
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**", 
      },
    ],
  },
};
