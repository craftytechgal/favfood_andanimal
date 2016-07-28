var favoriteFoods = ['Pizza', 'Chicken', 'Pasta', 'Tacos', 'Salad'];
console.log(favoriteFoods);

//adds ice cream to list at the end
favoriteFoods.push('Ice Cream');

//must run console log again after adding ice cream so that 
//it appears in the console log
console.log(favoriteFoods);

//this spits out in the console log the item in the position that is 
//called in the brackets
console.log(favoriteFoods[0]);
console.log(favoriteFoods[2]);
//

for (var i=0;i< favoriteFoods.length; i++) {
//
	console.log(favoriteFoods[i]);
//
}


///spits out a list of food and animals
var favoriteAnimals = ['Elephant', 'Zebra', 'Llama', 'Puppy', 'Giraffe'];


for (var index=0; index<favoriteFoods.length; index++) {
//
	console.log(favoriteFoods[index] + ' and '+ favoriteAnimals[index]);
//
}
