/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/links",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
