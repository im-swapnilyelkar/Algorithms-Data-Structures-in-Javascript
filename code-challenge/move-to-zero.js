/**
 * 
 283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 */

export function moveZeroesLast(nums){
   
    const zero = nums.sort((a,b)=>{
        if(a ===0)  
        return -1
         else
         return 1;
     })
     let lastIndexOf = zero.lastIndexOf(0);
     zero.splice(0,lastIndexOf+1);
     while(lastIndexOf >= 0){
        zero[zero.length] = 0;
        lastIndexOf--;
     }      
     return zero;
}

const moveZeroes = (nums) => {
    let l = 0;
    for(let r = 0; r < nums.length; r++) {
        if(nums[r] === 0) continue;
        const temp = nums[l];        
        nums[l] = nums[r];    
        nums[r] = temp;      
        l += 1
    }
    return nums;
};

export function executeMoveZeroesUsecase(){
    let nums = [0,1,0,3,12]
    console.log("moveZeroes-last for- [0,1,0,3,12] : ",moveZeroes(nums))
}


