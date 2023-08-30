module.exports = Obscenify;

String.prototype.obscenify = function () {
  let original_string = this;
  let result = "";

  let isSentence = original_string.includes(" ");

  // if it's a sentence, add "heck!" to the front
  // if it's a single word, just add "friggin'" to the front
  result = isSentence
    ? "heck! " + original_string
    : "friggin' " + original_string;

  // if the last character of original_string is punctuation, replace it with an exclamation point. otherwise, add an exclamation point to the end
  let punctuation = [".", "?", "!"];
  if (punctuation.includes(original_string[original_string.length - 1])) {
    result = result.slice(0, -1) + "!";
  } else {
    result += "!";
  }

  if (original_string[0] === original_string[0].toUpperCase()) {
    result = result[0].toUpperCase() + result.slice(1);
  }

  return result;
};

function Obscenify(str) {
  return str.obscenify();
}
