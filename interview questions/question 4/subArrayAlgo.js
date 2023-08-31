// Given an array of integers nums and an integer k, return the total number of subarrays
// whose sum equals to k.


function subarraySum(nums, k) {
    const sumCount = {}; // Create a map to store cumulative sum frequencies
    let sum = 0; // Initialize the current cumulative sum
    let count = 0; // Initialize the count of subarrays with sum equal to k
    
    // Initialize the sum 0 with count 1 to handle subarrays starting at the beginning
    sumCount[0] = 1;
    
    for (const num of nums) {
        sum += num; // Update the cumulative sum
        // If there's a cumulative sum (sum - k) in the map, add its count to the result
        if (sumCount[sum - k]) {
            count += sumCount[sum - k];
        }
        
        // Increment the count of the current cumulative sum
        sumCount[sum] = (sumCount[sum] || 0) + 1;
    }
    
    return count;
}

