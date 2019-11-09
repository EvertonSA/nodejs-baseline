'use strict';

// Graceful error handling TDB https://banzaicloud.com/blog/nodejs-in-production/
const { catchErrors } = require("@banzaicloud/service-tools");
catchErrors([]);

// Graceful shutdown TDB https://banzaicloud.com/blog/nodejs-in-production/
const { gracefulShutdown } = require("@banzaicloud/service-tools");
gracefulShutdown([]);

// Structured JSON logger TDB https://banzaicloud.com/blog/nodejs-in-production/
const { logger } = require("@banzaicloud/service-tools");
logger.interceptConsole();

// Create a server with a host and port
const sequelize = require('./lib/frameworks_drivers/database/sequelize');
const createServer = require('./lib/frameworks_drivers/webserver/server');

// Start the server
const start = async () => {

  // Database connection
  try {
    await sequelize.sync();
    console.log('Connection to DB has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }

  // Webserver connection
  try {
    const server = await createServer();
    server.listen(3000);
    console.log("teatandongqwignwolçkm")
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

};

start();
