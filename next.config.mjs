/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me"],
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
