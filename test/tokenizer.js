var expect = require('chai').expect;

var Tokenizer = require('../lib/tokenizer');

describe('Tokenizer', function () {

  var tokenizer;

  beforeEach(function () {
    tokenizer = new Tokenizer();
  });

  it('should tokenize a simple bangla sentence', function () {
    var tokens = tokenizer.tokenize('আমি ভাত খাই');
    expect(tokens).to.have.length(3);
    expect(tokens).to.eql(['আমি', 'ভাত', 'খাই']);
  });

  it('should tokenize bangla sentences with punctuation', function () {
    var tokens = tokenizer.tokenize('আমি ভাত খাই। তুমি খাবেনা?');
    expect(tokens).to.have.length(5);
    expect(tokens).to.eql(['আমি', 'ভাত', 'খাই', 'তুমি', 'খাবেনা']);
  });

  it('should tokenize a paragraph', function () {
    var tokens = tokenizer.tokenize('বাংলাদেশ দক্ষিণ এশিয়ার একটি রাষ্ট্র। দেশটির উত্তর, পূর্ব ও পশ্চিম সীমানায় ভারত ও দক্ষিণ-পূর্ব সীমানায় মায়ানমার; দক্ষিণে বঙ্গোপসাগর। ');
    expect(tokens).to.have.length(19);
    expect(tokens).to.eql([
      'বাংলাদেশ', 'দক্ষিণ', 'এশিয়ার', 'একটি', 'রাষ্ট্র', 'দেশটির',
      'উত্তর', 'পূর্ব', 'ও', 'পশ্চিম', 'সীমানায়', 'ভারত',
      'ও', 'দক্ষিণ', 'পূর্ব', 'সীমানায়', 'মায়ানমার', 'দক্ষিণে',
      'বঙ্গোপসাগর',
    ]);
  });

});
