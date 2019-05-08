const UpperCaser = function (stringArray) {
  this.stringArray = stringArray;
}

UpperCaser.prototype.toUpperCase = function () {
  const result = this.stringArray.map( word => word.toUpperCase());
  return result;
};







module.exports = UpperCaser;
