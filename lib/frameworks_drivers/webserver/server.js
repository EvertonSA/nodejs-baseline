'use strict';

const express = require('express')

const createServer = async () => {

  const app = express();

  // Register custom routers
  await app.use([
    require('./health'),
//   require('./hello'),
//    require('./users'),
  ]);
  
  app.listen(3000)

  return app;
};

module.exports = createServer;
