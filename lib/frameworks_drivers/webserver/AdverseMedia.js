'use strict';
const { express: middleware } = require("@banzaicloud/service-tools").middleware;
const AdverseMediaController = require("../../interface_adapters/controllers/AdverseMediaController")
const express = require('express')

//declare adverseMedia probe
const adverseMediaRouter = express.Router()

//use liveness probe to indicate the application is alive
adverseMediaRouter.get('/adverseMedia', AdverseMediaController.findAdverseMedias)

module.exports = adverseMediaRouter