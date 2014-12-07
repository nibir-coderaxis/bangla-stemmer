var Tokenizer = function () {};

Tokenizer.prototype.trim = function(str) {
  return str.replace(/^[^\u0980-\u09FF]+|[^\u0980-\u09FF]+$/g, '');
};

Tokenizer.prototype.tokenize = function(str) {
  return this.trim(str).split(/[^\u0980-\u09FF]+/);
};

module.exports = Tokenizer;
