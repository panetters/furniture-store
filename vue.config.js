module.exports = {
  devServer: {
    proxy: {
      'spreetail/api': {
        target: 'http://localhost:8082',
        secure: false,
      }
    }
  }
};
