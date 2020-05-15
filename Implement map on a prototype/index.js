let testArr = [9, 15, 10, -1];

/* My own Array.prototype.modMap(), which should behave exactly like Array.prototype.map() */
Array.prototype.modMap = function(callback){
  let newArr = [];
  this.forEach (i => newArr.push(callback(i)));
  return newArr;
};

let result = testArr.modMap( item => item * 2);