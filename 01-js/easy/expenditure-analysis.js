/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
const transactions = [
  {
    id: 1,
    timestamp: 165607680000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 165607680010,
    price: 12,
    category: "Clothes",
    itemName: "Pant",
  },
  {
    id: 3,
    timestamp: 1656076803000,
    price: 20,
    category: "Food",
    itemName: "zza",
  },
];
function calculateTotalSpentByCategory(transactions) {
  const categoryTotal = transactions.reduce(function (accumulator, item) {
    const { category, price } = item;
    accumulator[category] = (accumulator[category] || 0) + price;
    return accumulator;
  }, {});
  console.log(categoryTotal);
  const newArrayEntries = Object.entries(categoryTotal);
  console.log(newArrayEntries);
  const newArray = newArrayEntries.map(function ([category, price]) {
    return {
      category,
      totalSpent: price,
    };
  });

  console.log(newArray);
}
calculateTotalSpentByCategory(transactions);
// module.exports = calculateTotalSpentByCategory;
