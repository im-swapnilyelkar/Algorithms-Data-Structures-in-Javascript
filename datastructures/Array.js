

export default function _Array(){    
    const arr = Object.create(_Array.prototype);
    Object.defineProperty(arr,"length",{
        "value":0,
        "writable":true,
        "enumerable":false,
    })
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

