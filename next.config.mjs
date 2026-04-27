/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/Home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Home/',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
