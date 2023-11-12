/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ohyjeaxuwfnnnyzwoeks.supabase.co",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
