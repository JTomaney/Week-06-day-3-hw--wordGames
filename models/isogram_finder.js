const IsogramFinder = function (string) {
  this.string = string
}

IsogramFinder.prototype.isIsogram = function () {
  const timesLetterUsed = {};
  const arrayOfLetters = this.string.toLowerCase().split("")
  arrayOfLetters.forEach(function (letter) {

  if (timesLetterUsed[letter]) {
    timesLetterUsed[letter] += 1
  } else {
    timesLetterUsed[letter] = 1
  }
})
  const result = arrayOfLetters.every(letter => timesLetterUsed[letter] <= 1);
  return result;
};


module.exports = IsogramFinder;
