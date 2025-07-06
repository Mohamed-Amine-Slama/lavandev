module.exports = {
  // ...existing code...
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [/node_modules\/@mediapipe\/tasks-vision/],
      },
    ],
  },
  ignoreWarnings: [
    {
      module: /vision_bundle\.mjs$/,
      message: /Failed to parse source map/,
    },
  ],
  // ...existing code...
};