const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  plugins: [["styled-components", { ssr: true }]],
};

module.exports = nextConfig;
