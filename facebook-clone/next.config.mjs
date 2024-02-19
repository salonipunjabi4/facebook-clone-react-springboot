/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "pngimg.com",
      "platform-lookaside.fbsbx.com",
      "images.pexels.com",
    ],
  },
};

export default nextConfig;
