	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Gum",
		dairyFree: true,
		nutFree: true,
		price: 0.99,
		org: false
	},
	{
		name: "Cucumber",
		dairyFree: true,
		nutFree: true,
		price: 1.99,
		org: true
	},
	{
		name: "Bread",
		dairyFree: true,
		nutFree: true,
		price: 2.99,
		org: false
	},
	{
		name: "Doritos",
		dairyFree: true,
		nutFree: true,
		price: 2.99,
		org: false
	},
	{
		name: "Almond Oat Crunch",
		dairyFree: true,
		nutFree: false,
		price: 3.55,
		org: true
	},
	{
		name: "Cheerios",
		dairyFree: true,
		nutFree: true,
		price: 3.75,
		org: false
	},
	{
		name: "Brocoli",
		dairyFree: true,
		nutFree: true,
		price: 3.99,
		org: true
	},
	{
		name: "Milk",
		dairyFree: false,
		nutFree: true,
		price: 3.99,
		org: false
	},
	{
		name: "Tomatoes",
		dairyFree: true,
		nutFree: true,
		price: 4.99,
		org: true
	},
	{
		name: "Yoghurt",
		dairyFree: false,
		nutFree: true,
		price: 4.99,
		org: false
	},
	{
		name: "Cream Cheese",
		dairyFree: false,
		nutFree: true,
		price: 5.25,
		org: false
	},
	{
		name: "Granola Bars",
		dairyFree: true,
		nutFree: false,
		price: 9.99,
		org: false
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "dairyFree") && (prods[i].dairyFree == true)){
			if (organic == true){
				if (prods[i].org == true){
					product_names.push(prods[i].name + " ($" + prods[i].price + ")");	
				}
			}
			else {
				product_names.push(prods[i].name + " ($" + prods[i].price + ")");	
			}
		}
		else if ((restriction == "nutFree") && (prods[i].nutFree == true)){
			if (organic == true){
				if (prods[i].org == true){
					product_names.push(prods[i].name + " ($" + prods[i].price + ")");	
				}
			}
			else {
				product_names.push(prods[i].name + " ($" + prods[i].price + ")");	
			}		}
		else if (restriction == "all"){
			if (organic == true){
				if (prods[i].org == true){
					product_names.push(prods[i].name + " ($" + prods[i].price + ")");	
				}
			}
			else {
				product_names.push(prods[i].name + " ($" + prods[i].price + ")");	
			}		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=1) {
		var temp = chosenProducts[i];
		price = temp.substr(-5).substr(0,4);
		totalPrice += parseFloat(price);		
	}
	return totalPrice;
}

// garbage
// for (let j = 0; j < product_names.length; j += 1){
// 	if ( prods[i].price > product_names[j].price ){
// 		product_names.unshift(prods[i].name);
// 	}
// 	else (j == product_names.length - 1){
// 		product_names.push(prods[i].name);
// 	}
// }