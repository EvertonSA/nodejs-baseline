'use strict';
const { express: middleware } = require("@banzaicloud/service-tools").middleware;
const express = require('express')

//declare health probe
const healthRouter = express.Router()

//use liveness probe to indicate the application is alive 
healthRouter.get('/health/liveness', middleware.healthCheck([]))

//use readiness probe to indicate the application can receive traffic
healthRouter.get('/health/readiness', middleware.healthCheck([]))

module.exports = healthRouter