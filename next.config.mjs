/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/our-team",
        permanent: true,
      },
      {
        source: "/team/:path*",
        destination: "/our-team/:path*",
        permanent: true,
      },
      {
        source: "/practice-areas/corporate-commercial",
        destination: "/practice-areas/corporate-commercial-law",
        permanent: true,
      },
      {
        source: "/practice-areas/real-estate-finance",
        destination: "/practice-areas/conveyancing-real-estate",
        permanent: true,
      },
      {
        source: "/practice-areas/employment-labour",
        destination: "/practice-areas/employment-law",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
