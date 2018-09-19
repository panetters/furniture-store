module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      'spreetail/api': {
        target: 'http://localhost:8082',
        secure: false,
      }
    }
  }
};
