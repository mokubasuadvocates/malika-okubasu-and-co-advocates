/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Content-Security-Policy-Report-Only",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com; font-src 'self' data:; connect-src 'self' https://region1.google-analytics.com https://challenges.cloudflare.com; frame-src 'self' https://challenges.cloudflare.com;",
          },
        ],
      },
    ];
  },
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
