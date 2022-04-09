

export function _Array(){
    const arr = Object.create(_Array.prototype);
    Object.defineProperty(arr,"length",{
        "value":0,
        "writable":true,
        "enumerable":false,
    });
   
    for(const key in arguments){
        arr[key] = arguments[key];
        arr.length += 1; 
    }
    return arr;
}

_Array.prototype.push = function(value){
    this[this.length] = value;
    this.length++;
    return this.length;
}

_Array.prototype.pop = function(){
    this.length--;
    const deletedElement = this[this.length];
    delete this[this.length];
    return deletedElement;

};

_Array.prototype.filter = function(cb){
    let result =_Array();
  
    for(let index in this){
        //console.log( "index" , this.hasOwnProperty(index),index );
        /**
         * index true 0
            index true 1
            index true 2
            index true 3
            index true 4
            index false push
            index false pop
            index false filter
         */
        //hence to avoid iterable other prototype property;
        if(this.hasOwnProperty(index)){
            const element  = this[index];
            if(cb(element,index)){          
                result.push(element);
            }
        }
    };
    return result;

}


/** Algo Use Cases */
export function executeArrayUseCases() {
    console.log("#Array Implementation : ");
    const myArray = _Array("Swapnil", "Apoorva", "Anshu", "Ayansh");
    console.log(myArray);
    console.log("Original length:", myArray.length);
    console.log("push newSwap now length is  :", myArray.push("newSwap"));
    console.log("push newApoo now length is :", myArray.push("newApoo"));
    console.log(myArray);
    console.log("deleted item :", myArray.pop());
    console.log(myArray);
    console.log("Updated length:", myArray.length);
  
    var filterData = myArray.filter((name, index) => {
      console.log(index);
      return name.charAt(0) !== "A"; // True or False
    });
    console.log("Filter Array", filterData);
  }
  

