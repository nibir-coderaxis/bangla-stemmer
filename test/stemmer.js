var expect = require('chai').expect;

var stemmer = require('../lib/stemmer');

describe('Stemmer', function () {

  describe('TTA & TA', function () {

    // http://en.wiktionary.org/wiki/Category:Bengali_words_suffixed_with_-%E0%A6%9F%E0%A6%BE
    it('should remove TTA Suffix', function () {
      expect(stemmer('ছেলেটা')).to.equal('ছেলে');
      expect(stemmer('এইটা')).to.equal('এই');
      expect(stemmer('এটা')).to.equal('এ');
      expect(stemmer('ওইটা')).to.equal('ওই');
      expect(stemmer('ওটা')).to.equal('ও');
      expect(stemmer('সেইটা')).to.equal('সেই');
      expect(stemmer('সেটা')).to.equal('সে');
    });

    it('should remove TTA Classifier', function () {
      expect(stemmer('শূন্যটা')).to.equal('শূন্য');
      expect(stemmer('একটা')).to.equal('এক');
      expect(stemmer('দুইটা')).to.equal('দুই');
      expect(stemmer('তিনটা')).to.equal('তিন');
      expect(stemmer('চারটা')).to.equal('চার');
      expect(stemmer('পাঁচটা')).to.equal('পাঁচ');
      expect(stemmer('ছয়টা')).to.equal('ছয়');
      expect(stemmer('সাতটা')).to.equal('সাত');
      expect(stemmer('আটটা')).to.equal('আট');
      expect(stemmer('নয়টা')).to.equal('নয়');
      expect(stemmer('দশটা')).to.equal('দশ');
      expect(stemmer('এগারোটা')).to.equal('এগারো');
      expect(stemmer('বারোটা')).to.equal('বারো');
      expect(stemmer('তেরোটা')).to.equal('তেরো');
      expect(stemmer('চোদ্দটা')).to.equal('চোদ্দ');
      expect(stemmer('পনেরোটা')).to.equal('পনেরো');
      expect(stemmer('ষোলটা')).to.equal('ষোল');
      expect(stemmer('সতেরোটা')).to.equal('সতেরো');
      expect(stemmer('আঠারোটা')).to.equal('আঠারো');
      expect(stemmer('উনিশটা')).to.equal('উনিশ');
      expect(stemmer('বিশটা')).to.equal('বিশ');
      // expect(stemmer('xটা')).to.equal('x');
    });

    // http://en.wiktionary.org/wiki/Category:Bengali_words_suffixed_with_-%E0%A6%A4%E0%A6%BE
    it('should remove TA Suffix', function () {
      expect(stemmer('আঞ্চলিকতা')).to.equal('আঞ্চলিক');
      expect(stemmer('উভকামিতা')).to.equal('উভকামি');
      expect(stemmer('নগ্নতা')).to.equal('নগ্ন');
      expect(stemmer('নীরবতা')).to.equal('নীরব');
      expect(stemmer('প্রবণতা')).to.equal('প্রবণ');
      expect(stemmer('বিভিন্নতা')).to.equal('বিভিন্ন');
      expect(stemmer('বিষমকামিতা')).to.equal('বিষমকামি');
      expect(stemmer('মূর্খতা')).to.equal('মূর্খ');
      expect(stemmer('সমকামিতা')).to.equal('সমকামি');
      expect(stemmer('স্বাধীনতা')).to.equal('স্বাধীন');
      // expect(stemmer('xতা')).to.equal('x');
    });

  });

});
