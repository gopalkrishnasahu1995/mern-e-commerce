const version = 1

export default {
  api: {
    version,
    path: `/v${version}`,
    port: 8000,
  },
  swagger: '/docs',
}
