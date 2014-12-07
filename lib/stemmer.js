function stripCommonSuffix (text) {
  return text.replace(/(?!গম)[তট]া$/, '');
}

function stemmer (text) {
  return stripCommonSuffix(text);
}

module.exports = stemmer
