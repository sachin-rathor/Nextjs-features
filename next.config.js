module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/api/test.js',
        permanent: true,
      },
    ]
  },
}
