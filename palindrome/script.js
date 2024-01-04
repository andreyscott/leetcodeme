// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Convert to string
    let str = x.toString();
    
    // Initialize a pointer to the left and right
    let left = 0;
    let right = str.length - 1;
    
    // While the left pointer is less than the right pointer
    while (left < right) {
        // If the characters don't match, return false
        if (str[left] !== str[right]) {
            return false;
        }
        
        // Move the pointers
        left++;
        right--;
    }
    
    // If we made it this far, it's a palindrome
    return true;
    
};