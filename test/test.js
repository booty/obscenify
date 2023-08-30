let assert = require("assert");
let Obscenify = require("../index.js");

describe("Obscenify", function () {
  it("should add obscenity to a word", function () {
    assert.equal("test".obscenify(), "friggin' test!");
  });

  it("should add obscenity to a word, respecting capitalization", function () {
    assert.equal("Test".obscenify(), "Friggin' Test!");
  });

  it("should add obscenity to a sentence and respect capitalization and punctuation", function () {
    assert.equal(
      "My car won't start.".obscenify(),
      "Heck! My car won't start!"
    );

    assert.equal(
      "gonna need more chocolate milk?".obscenify(),
      "heck! gonna need more chocolate milk!"
    );
  });
});
