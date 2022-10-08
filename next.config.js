module.exports = {
  eslint: {
    dirs: [ "src" ]
  },
  devIndicators: {
    buildActivity: false,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "placehold.jp",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com"
    ],
  },
  api: {
    bodyParser: {
      sizeLimit: "4mb" // Set desired value here
    },
}
}
