'use strict';

module.exports = class {
  constructor(id = null, title, text, keywords, date, link) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.keywords = keywords;
    this.date = date;
    this.link = link;
  }
};
