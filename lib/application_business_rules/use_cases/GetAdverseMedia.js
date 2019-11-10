'use strict';

module.exports = (adverseMediaId, {adverseMediaRepository}) => {
  return adverseMediaRepository.get(adverseMediaId);
};
