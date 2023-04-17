// You manage a grocery store and need to keep track of the inventory of various items. 
// You will use arrays to store the data and various functions to manipulate and analyze the data.

// question1
// Create an array containing the names of all items in the inventory maximum of 10.
let grocery=["mangoes","apples","oranges","grapes","banana","pineapples","berries","pears","plums","melons"]
// Create a separate array with the corresponding stock quantities of each item maximum of 10.
let stock_Quantity=[{fruit:"mangoes",stocks:6}, {fruit:"apples",stocks:5}, {fruit:"oranges",stocks:4}, {fruit:"grapes",stocks:10}, {fruit:"banana",stocks:8}, {fruit:"pineapples",stocks:2}, {fruit:"berries",stocks:9}, {fruit:"pear",stocks:7}, {fruit:"plums",stocks:3}, {fruit:"melons",stocks: 1}]

// Write a function to add a new item to the inventory, updating both arrays.
function newStock(){
    grocery.push("avocado")
    stock_Quantity.push({fruit:"avocado",stocks:10})
}
newStock()
console.log(stock_Quantity);
console.log(grocery);
// Write a function to update the stock quantity of an existing item.
const updatedGrocery=stock_Quantity.map(Object=>{
    if (Object.fruit=="mangoes"){
        Object.stocks=9;
    }
    return Object;

})
console.log(updatedGrocery)

// Write a function to calculate the total number of items in the inventory.
function amount(item){
    return item.stocks
}
function sum(prev,next){
    return prev+ next;
}
console.log( stock_Quantity.map(amount).reduce(sum))
   
// // Write a function to find the item with the lowest stock quantity.  

let min=Math.min(...stock_Quantity.map(item=>item.stocks));
console.log(min)



