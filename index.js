import _Array from "./datastructures/Array.js"


//** Array*/
console.log("#Array Implementation : ");
const myArray =_Array("Swapnil", "Apoorva","Anshu","Ayansh");
console.log(myArray);
console.log("Original length:",myArray.length);
console.log("push newSwap now length is  :" , myArray.push("newSwap"));
console.log("push newApoo now length is :" , myArray.push("newApoo"));
console.log(myArray);
console.log("deleted item :" , myArray.pop());
console.log(myArray);
console.log("Updated length:",myArray.length);


