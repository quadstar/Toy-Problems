/* Build a class to represent a range of numbers that has:

a beginning index
an end index (optional). If there is no end index, the range should include only the passed-in start value.
a ‘step’ (optional)
*/
var Range = function(start, end, step) {
  this.start = start;
  this.end = end ? end : end === 0 ? 0 : start;
  this.step = step ? step : this.start > this.end ? -1 : 1;
};

Range.prototype.size = function () {
  return Math.floor(((this.end - this.start) / this.step)) + 1;
};

Range.prototype.each = function (callback) {
  var val = this.start;
  for(var i = 0; i < this.size(); i++){
    callback(val);
    val += this.step;
  }
};

Range.prototype.includes = function (val) {
  var res = this.step ? val > this.end || val < this.start : val > this.start || val < this.end
  if(res){
    return false;
  }
  if(val % this.step === this.start % this.step) return true;
  return false;
};
