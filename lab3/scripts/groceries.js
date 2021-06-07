	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Gum",
		dairyFree: true,
		nutFree: true,
		price: 0.99,
		organic: false,
		snacks: true,
		meals: false
	},
	{
		name: "Cucumber",
		dairyFree: true,
		nutFree: true,
		price: 1.99,
		organic: true,
		snacks: false,
		meals: false
	},
	{
		name: "Mountain Dew",
		dairyFree: true,
		nutFree: true,
		price: 2.25,
		organic: false,
		snacks: true,
		meals: false
	},
	{
		name: "Fries",
		dairyFree: true,
		nutFree: true,
		price: 2.75,
		organic: false,
		snacks: false,
		meals: true
	},
	{
		name: "Bread",
		dairyFree: true,
		nutFree: true,
		price: 2.99,
		organic: false,
		snacks: false,
		meals: false
	},
	{
		name: "Takis",
		dairyFree: true,
		nutFree: true,
		price: 2.99,
		organic: false,
		snacks: true,
		meals: false
	},
	{
		name: "Cheetos",
		dairyFree: true,
		nutFree: true,
		price: 2.99,
		organic: false,
		snacks: true,
		meals: false
	},
	{
		name: "Doritos",
		dairyFree: true,
		nutFree: true,
		price: 2.99,
		organic: false,
		snacks: true,
		meals: false
	},
	{
		name: "Hot Dog",
		dairyFree: true,
		nutFree: true,
		price: 3.25,
		organic: false,
		snacks: false,
		meals: true
	},
	{
		name: "Almond Oat Crunch",
		dairyFree: true,
		nutFree: false,
		price: 3.55,
		organic: true,
		snacks: false,
		meals: false
	},
	{
		name: "Cheerios",
		dairyFree: true,
		nutFree: true,
		price: 3.75,
		organic: false,
		snacks: false,
		meals: false
	},
	{
		name: "Broccoli",
		dairyFree: true,
		nutFree: true,
		price: 3.99,
		organic: true,
		snacks: false,
		meals: false
	},
	{
		name: "Milk",
		dairyFree: false,
		nutFree: true,
		price: 3.99,
		organic: false,
		snacks: false,
		meals: false
	},
	{
		name: "Sandwich",
		dairyFree: false,
		nutFree: true,
		price: 3.99,
		organic: false,
		snacks: false,
		meals: true
	},
	{
		name: "Tomatoes",
		dairyFree: true,
		nutFree: true,
		price: 4.99,
		organic: true,
		snacks: false,
		meals: false
	},
	{
		name: "Yoghurt",
		dairyFree: false,
		nutFree: true,
		price: 4.99,
		organic: false,
		snacks: false,
		meals: false
	},
	{
		name: "Cream Cheese",
		dairyFree: false,
		nutFree: true,
		price: 5.25,
		organic: false,
		snacks: false,
		meals: false
	},
	{
		name: "Medium Pizza",
		dairyFree: false,
		nutFree: true,
		price: 5.99,
		organic: false,
		snacks: false,
		meals: true
	},
	{
		name: "Granola Bars",
		dairyFree: true,
		nutFree: false,
		price: 9.99,
		organic: false,
		snacks: true,
		meals: false
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, nuts, dairy, organic, snacks, meals) {
    let products_filtered = [...prods]

    if (nuts == true){
        products_filtered = products_filtered.filter(function(a){return a.nutFree==true});
    }
    if (dairy==true){
        products_filtered = products_filtered.filter(function(a){return a.dairyFree==true});
    }
    if (organic==true){
        products_filtered = products_filtered.filter(function(a){return a.organic==true});
    }
	if (snacks==true){
        products_filtered = products_filtered.filter(function(a){return a.snacks==true});
    }
	if (meals==true){
        products_filtered = products_filtered.filter(function(a){return a.meals==true});
    }
    // products_filtered.sort(function(a, b){return a.price - b.price});

	return products_filtered;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}