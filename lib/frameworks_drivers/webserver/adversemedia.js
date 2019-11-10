'use strict';
const { express: middleware } = require("@banzaicloud/service-tools").middleware;
const AdverseMediaController = require("../../interface_adapters/controllers/AdverseMediaController")
var AsyncRouter = require("express-async-router").AsyncRout

//declare adverseMedia router
const adverseMediaRouter = AsyncRouter();

adverseMediaRouter.get('/adverseMedia', AdverseMediaController.findAdverseMedias())

module.exports = adverseMediaRouter