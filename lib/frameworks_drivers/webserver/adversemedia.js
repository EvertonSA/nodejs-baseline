'use strict';
// Structured JSON logger https://banzaicloud.com/blog/nodejs-in-production/
const { logger } = require("@banzaicloud/service-tools");
const { express: middleware } = require("@banzaicloud/service-tools").middleware;

const AdverseMediaController = require("../../interface_adapters/controllers/AdverseMediaController")
const AsyncRouter = require("express-async-router").AsyncRouter;

//declare adverseMedia router
const adverseMediaRouter = AsyncRouter();

adverseMediaRouter.get('/adverseMedia',  function (req, res) {
     return AdverseMediaController.findAdverseMedias().then(logger.info("GET request at /adverseMedia")))
    });

module.exports = adverseMediaRouter