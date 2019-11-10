'use strict';
const { express: middleware } = require("@banzaicloud/service-tools").middleware;
const AdverseMediaController = require("../../interface_adapters/controllers/AdverseMediaController")
const express = require('express')

//declare adverseMedia router
const adverseMediaRouter = express.Router()

adverseMediaRouter.get('/adverseMedia', AdverseMediaController.findAdverseMedias())

module.exports = adverseMediaRouter