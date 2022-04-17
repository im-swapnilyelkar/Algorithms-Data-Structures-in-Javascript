/**
 * 242. Valid Anagram
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

 * 
 */

export  function validAnagram(s1,s2){
    return s1.split("").sort().join() === s2.split("").sort().join();
}

var isAnagram = function(s, t) {
    
    if(!s && !t && s.length !== t.length){
        return false;
    }
    
    const sMap = new Map();
    const tMap = new Map();
    
    for(let c of s){
        if(sMap.has(c)){
            sMap.set(c , sMap.get(c)+1)
            
        }else{
            sMap.set(c,1);
        }
    }
    
    for(let c of t){
         if(tMap.has(c)){
            tMap.set(c , tMap.get(c)+1)
        }else{
            tMap.set(c,1);
        }
    }
    
    if(sMap.size !== tMap.size){
        return false;
    }
    
   
    for(let [k ,v] of sMap.entries()){
        if(!tMap.has(k)  ||  tMap.get(k) !== v){
            return false;
        }
    }    
   return true; 
    
};


export  function executeValidAnagramUseCase(){
let s = "anagram", t = "nagaram"; //pass

 console.log("validAnagram-pass : ",validAnagram(s,t));
  s = 'car' ; t ='rat';
 console.log("validAnagram-fail : ",validAnagram(s,t));

 let s1="anagram", s2 = "nagaram";
 
 console.log("validAnagram-Map-pass : ",isAnagram(s1,s2));
}