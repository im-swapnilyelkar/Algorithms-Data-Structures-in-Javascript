/**
 * 
Given a string, print the top n characters by the count of their occurrences.
Example 1: str = "This is an Indian island" and n = 3
Output: i -> 5, n -> 4, s -> 3

Example 2: str = "This is an Indian island" and n = 1
Output: i -> 5

Example 3: str = "abc" and n = 100
Output: a -> 1, b -> 1, c -> 1
//https://www.geeksforgeeks.org/print-characters-frequencies-order-occurrence/
**/

export function searchTopNChar(inputStr,n){
    if(inputStr.length <= 0){
        console.log("String value cannot be empty");
        return;
    }
    if(!n || n<= 0){
        console.log("Please specify n > 0");
        return
    }
    
    const charMap = new Map();
    const text = inputStr.replaceAll(" ", "").toLowerCase();
    text.split("").forEach((char)=>{
        if(charMap.has(char)){
            charMap.set(char,charMap.get(char)+1);
        }else{
            charMap.set(char,1);
        }
    });
    const sortMapByValue = [...charMap].sort((a,b)=>b[1]-a[1]);
    if(sortMapByValue.length < n){
        n = sortMapByValue.length;
    }

    for(let i=0; i<n; i++){
        console.log(sortMapByValue[i][0], "->" , sortMapByValue[i][1])
    }
}

export function executeSearchTopNCharector(){
const stringText ="This is an Indian island"
const n = 3;
searchTopNChar(stringText,n);
}


