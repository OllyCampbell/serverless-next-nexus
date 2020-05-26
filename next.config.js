module.exports = {
  publicRuntimeConfig: {
    BASE_URL: `${process.env.HAS_SSL ? 'https' : 'http'}://${
      process.env.VERCEL_URL
    }`,
  },
}
