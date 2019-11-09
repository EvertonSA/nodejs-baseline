'use strict';

// Create a server with a host and port
const sequelize = require('./lib/frameworks_drivers/database/sequelize');
const createServer = require('./lib/frameworks_drivers/webserver/server');

// Start the server
const start = async () => {
  try {
    await sequelize.sync();
    console.log('Connection to DB has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }

  try {
    const server = await createServer();
    //console.log('Server running at:');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

};

start();
