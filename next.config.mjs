/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: import.meta.dirname },
  output: "export",
  basePath: "/pilotoapps-web",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
