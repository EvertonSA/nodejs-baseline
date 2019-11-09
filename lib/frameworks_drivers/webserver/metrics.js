'use strict';
const { express: middleware } = require("@banzaicloud/service-tools").middleware;
const express = require('express')

//declare health probe
const metricsRouter = express.Router()

//use liveness probe to indicate the application is alive
metricsRouter.get("/metrics", middleware.prometheusMetrics());

module.exports = metricsRouter