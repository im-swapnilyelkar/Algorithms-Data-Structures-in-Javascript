/**
 796. Rotate String
Easy


Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
 

Constraints:

1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 export var rotateString = function(s, goal) {     
    if(s.length !== goal.length){
        return false;
    }    
    if(s.length === 0){
        return true;
    }    
    if((s+s).includes(goal)){
        return true
    }      
   
  return false;
};

export var rotateString_ = function(s, goal) { 
    for(let char of s){
        s = s.slice(1) + s.slice(0,1);
        if(s === goal) return true;
    }
  return  false;
}

export function executeRotateStringUsecase(){
    let s = "abcde", goal = "cdeab";
    console.log("pass - rotateString of "+s+" & "+goal, " : ",rotateString(s,goal))
    console.log("pass - rotateString2 of "+s+" & "+goal, " : ",rotateString_(s,goal))
     s = "abcde";
     goal = "abced";
     console.log("fail - rotateString of "+s+" & "+goal, " : ",rotateString(s,goal))
     console.log("fail - rotateString2 of "+s+" & "+goal, " : ",rotateString_(s,goal))
}
