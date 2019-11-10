'use strict';

const AdverseMediaSerializer = require('../serializers/AdverseMediaSerializer');
const ListAdverseMedias = require('../../application_business_rules/use_cases/ListAdverseMedias');
const CreateAdverseMedia = require('../../application_business_rules/use_cases/CreateAdverseMedia');
const GetAdverseMedia = require('../../application_business_rules/use_cases/GetAdverseMedia');
const DeleteAdverseMedia = require('../../application_business_rules/use_cases/DeleteAdverseMedia');
const AdverseMediaRepository = require('../../application_business_rules/repositories/AdverseMediaRepository');

const AdverseMediaRepositoryInMemory = require('../storage/AdverseMediaRepositoryInMemory');
const adverseMediaRepository = new AdverseMediaRepository(new AdverseMediaRepositoryInMemory());

/*
const AdverseMediaRepositorySQLite = require('../storage/AdverseMediaRepositorySQLite');
const adverseMediaRepository = new AdverseMediaRepository(new AdverseMediaRepositorySQLite());
*/

module.exports = {

  async createAdverseMedia(request) {
    // Input
    const {title, text, keywords, date, link} = request.payload;

    // Treatment
    const adverseMedia = await CreateAdverseMedia(title, text, keywords, date, link, {adverseMediaRepository});

    // Output
    const adverseMediaSerializer = new AdverseMediaSerializer();
    return adverseMediaSerializer.serialize(adverseMedia);
  },

  async findAdverseMedias() {
    // Treatment
    const adverseMedias = await ListAdverseMedias({adverseMediaRepository});

    // Output
    const adverseMediaSerializer = new AdverseMediaSerializer();
    return adverseMedias.map(adverseMediaSerializer.serialize);
  },

  async getAdverseMedia(request) {
    // Input
    const adverseMediaId = request.params.id;

    // Treatment
    const adverseMedia = await GetAdverseMedia(adverseMediaId, {adverseMediaRepository});

    // Output
    if (!adverseMedia) {
//      return Boom.notFound();
    }
    const adverseMediaSerializer = new AdverseMediaSerializer();
    return adverseMediaSerializer.serialize(adverseMedia);
  },

  async deleteAdverseMedia(request, h) {
    // Input
    const adverseMediaId = request.params.id;

    // Treatment
    await DeleteAdverseMedia(adverseMediaId, {adverseMediaRepository});

    // Output
    return h.response().code(204);
  },

};
