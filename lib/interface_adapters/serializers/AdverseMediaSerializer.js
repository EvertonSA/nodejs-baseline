'use strict';

const _serializeSingleAdverseMedia = (adverseMedia) => {
  return {
    'id': adverseMedia.id,
    'title': adverseMedia.title,
    'text': adverseMedia.text,
    'keywords': adverseMedia.keywords,
    'date': adverseMedia.date,
    'link': adverseMedia.link,
  };
};

module.exports = class {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleAdverseMedia);
    }
    return _serializeSingleAdverseMedia(data);
  }
};
