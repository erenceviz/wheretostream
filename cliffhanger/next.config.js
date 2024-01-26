module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/movie/:id',
        destination: '/movie/[id]',
        permanent: true,
      },
    ];
  },
};
