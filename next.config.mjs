/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Matches any hostname
        port: '', // Matches any port (or leave it empty)
        pathname: '/**', // Matches any path
      },
    ],
  },
  reactStrictMode: true, // Enables React Strict Mode
};

export default nextConfig;

