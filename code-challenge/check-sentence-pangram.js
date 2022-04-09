
/**
 * A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram,
 or false otherwise.
Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true

Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:
Input: sentence = "leetcode"
Output: false
**/
export function checkIfPangram(sentence){
    if(!sentence && sentence.length < 26 ){
        return false;
    }    
    const alphabetsSet = new Set();    
    for(let char of sentence){
        if(/^[a-z]$/.test(char))
         alphabetsSet.add(char);
    }
    if(alphabetsSet.size  === 26){
        return true;
    } 
    return false;
}


/** Search String is Pangram */
export function executeCheckIfPangramUseCase(){
    const sentence = "thequickbro#wnfoxjumpsoverthelazydog"
    const sentence1 = "leetcode"
    const isPangram = checkIfPangram(sentence);
    console.log("isPangram : ",isPangram)
}

