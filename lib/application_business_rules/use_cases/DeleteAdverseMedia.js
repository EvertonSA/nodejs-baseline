'use strict';

module.exports = (adverseMediaId, {adverseMediaRepository}) => {
  return adverseMediaRepository.remove(adverseMediaId);
};
