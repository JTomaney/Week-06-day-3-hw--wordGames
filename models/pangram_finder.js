const PangramFinder = function (string) {
  this.string = string;
  this.alphabet = [`q`, `w`, `e`, `r`, `t`, `y`, `u`, `i`, `o`, `p`, `a`, `s`, `d`, `f`, `g`, `h`, `j`, `k`, `l`, `z`, `x`, `c`, `v`, `b`, `n`, `m`]
}

PangramFinder.prototype.isPangram = function () {
  let result = this.alphabet.every(letter => this.string.toLowerCase().includes(letter))
  return result;
};

module.exports = PangramFinder;
