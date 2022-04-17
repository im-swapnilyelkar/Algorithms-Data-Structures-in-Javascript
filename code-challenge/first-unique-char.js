/**
387. First Unique Character in a String
Easy

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1

*/

/**
 * @param {string} s
 * @return {number}
 */
export const firstUniqChar = function(s) {
    if (!s.length) {
        return -1;
      }
      const charCountMap = new Map();
      const sArr = s.split("");
      for (let [index, char] of sArr.entries()) {
        charCountMap.has(char)
          ? charCountMap.set(char, {
              count: charCountMap.get(char).count + 1,
              index,
            })
          : charCountMap.set(char, { count: 1, index });
      }
    
      for (let value of charCountMap.values()) {
        if (value.count === 1) {
          return value.index;
        }
      }
    
      return -1;
};

var firstUniqChar_ = function(s) {
    for(let i=0;i<s.length;i++){
        if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
           return i;
       } 
    }
    return -1;
 };

export function executeFirstUniqCharUseCases(){
    let s = "loveleetcode";
    console.log('firstUniqChar of "loveleetcode"' , firstUniqChar(s));
    console.log('firstUniqChar_ of "'+s+'"' , firstUniqChar_(s));

    let s2 = "aabb";
    console.log('firstUniqChar of "'+s2+'"' , firstUniqChar(s2));
    console.log('firstUniqChar_ of "'+s2+'"' , firstUniqChar_(s2));


}