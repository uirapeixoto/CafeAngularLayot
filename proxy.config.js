const proxy = [
    {
      context: '/api',
      target: 'http://localhost:5200',
      pathRewrite: {'^/api' : ''}
    }
  ];

  module.exports = proxy;