/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    gaId: phase === PHASE_DEVELOPMENT_SERVER ? "G-C0SQXQ1NEQ" : "G-Y91VZFYFX2",
  },
};

module.exports = nextConfig;
