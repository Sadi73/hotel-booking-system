/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.ibb.co.com'], // Add allowed external image domains here
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co.com',
          port: '',
          pathname: '/images/**'
        }
      ],
    },
    reactStrictMode: true, // Enables React Strict Mode
  };
  
  export default nextConfig;
  
