var path = require('path')

module.exports = {
  mode: "none",
  context: path.resolve(__dirname, "src"),
  entry: 
  {
    app: "./index.js"
  },
  output:
  {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist/assets/media"),
    stats: 'errors-only',
    compress: true,
    open: true,
    port: "8083"
  }
};

module = {

}