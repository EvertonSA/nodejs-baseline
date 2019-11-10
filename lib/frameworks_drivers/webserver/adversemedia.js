'use strict';
const { express: middleware } = require("@banzaicloud/service-tools").middleware;

const AdverseMediaController = require("../../interface_adapters/controllers/AdverseMediaController")
var AsyncRouter = require("express-async-router").AsyncRouter;

//declare adverseMedia router
const adverseMediaRouter = AsyncRouter();

adverseMediaRouter.get('/adverseMedia',  function (req, res) { return AdverseMediaController.findAdverseMedias().then(console.log('que')) });

module.exports = adverseMediaRouter