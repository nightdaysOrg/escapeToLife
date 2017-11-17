var Status = require('./status.js');
function FoodType(name, code,effect){
  this.name = name;
  this.code = code;
  this.effect = effect;
}

var foodTypeList = [];

function newFoodType(name,code,hp,hunger){
  var status = new Status(hp,hunger);
  var foodTypeFunction = function () {
    return new FoodType(name, code, status);
  };
  foodTypeList[code] = foodTypeFunction;
  foodTypeList.push(foodTypeFunction);
}

newFoodType('苹果','apple',10,10);
newFoodType('梨子','pear',10, 10);

module.exports = foodTypeList;