'use strict';
const { express: middleware } = require("@banzaicloud/service-tools").middleware;

module.exports = {
  name: 'health',
  version: '1.0.0',
  register: async (router) => {
    router.get('/health/liveness', middleware.healthCheck([checkDB]))
    router.get('/health/readiness', middleware.healthCheck([initFinished, checkDB, canAcceptMoreRequests]))
  }
};
