'use strict';

const AdverseMedia = require('../../enterprise_business_rules/entities/AdverseMedia');

module.exports = (title, text, keywords, date, link, {adverseMediaRepository}) => {
  const adverseMedia = new AdverseMedia(null, title, text, keywords, date, link);
  return adverseMediaRepository.persist(adverseMedia);
};
