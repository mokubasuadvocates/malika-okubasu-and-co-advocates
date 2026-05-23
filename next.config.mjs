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
        source: "/publications/1",
        destination: "/publications",
        permanent: true,
      },
      {
        source: "/publications/2",
        destination: "/publications",
        permanent: true,
      },
      {
        source: "/publications/3",
        destination: "/publications",
        permanent: true,
      },
      {
        source: "/publications/4",
        destination: "/publications",
        permanent: true,
      },
      {
        source: "/publications/5",
        destination: "/publications",
        permanent: true,
      },
      {
        source: "/practice-areas/corporate-commercial",
        destination: "/practice-areas/corporate-and-commercial-law",
        permanent: true,
      },
      {
        source: "/practice-areas/corporate-commercial-law",
        destination: "/practice-areas/corporate-and-commercial-law",
        permanent: true,
      },
      {
        source: "/practice-areas/real-estate-finance",
        destination: "/practice-areas/real-estate-banking-and-finance",
        permanent: true,
      },
      {
        source: "/practice-areas/conveyancing-real-estate",
        destination: "/practice-areas/real-estate-banking-and-finance",
        permanent: true,
      },
      {
        source: "/practice-areas/employment-labour",
        destination: "/practice-areas/employment-and-labour-relations",
        permanent: true,
      },
      {
        source: "/practice-areas/employment-law",
        destination: "/practice-areas/employment-and-labour-relations",
        permanent: true,
      },
      {
        source: "/practice-areas/media-tech-ip",
        destination:
          "/practice-areas/media-technology-and-intellectual-property",
        permanent: true,
      },
      {
        source: "/practice-areas/energy-climate",
        destination:
          "/practice-areas/energy-natural-resources-and-climate-change",
        permanent: true,
      },
      {
        source: "/practice-areas/family-law",
        destination: "/practice-areas/family-law-and-succession-planning",
        permanent: true,
      },
      {
        source: "/practice-areas/legal-consultancy",
        destination: "/practice-areas",
        permanent: true,
      },
      {
        source: "/practice-areas/regional-integration",
        destination:
          "/practice-areas/regional-integration-and-cross-border-advisory",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
