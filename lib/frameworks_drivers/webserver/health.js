'use strict';
const { express: middleware } = require("@banzaicloud/service-tools").middleware;
const express = require('express')

const router = express.Router()

//use liveness probe to indicate the application is alive 
router.get('/health/liveness', middleware.healthCheck([]))

//use readiness probe to indicate the application can receive traffic
router.get('/health/readiness', middleware.healthCheck([]))

module.exports = router