// You work for a financial advisory firm, and your client has provided you with a list of their
// daily investment returns over a period of time. The investment returns are represented as an
// array of integers, where each integer represents the daily return on their investment.
// Your client is interested in understanding the best possible return they could have achieved
// by investing in a specific time frame within the given period. They want you to find the largest
// possible sum of returns for any contiguous subperiod.
// For instance, if the array represents daily returns on a particular stock, where each element
// is the return on a single day (positive or negative), your task is to determine the maximum
// return that could have been achieved by buying and selling the stock within the provided
// time frame.
// Write an algorithm to analyse the investment returns and find the largest possible sum of
// returns for any contiguous subperiod. Explain the time and space complexity of your
// solution.

function maxSubarraySum(arr) {
    let maxSum = arr[0];  // Initialize the maximum sum with the first element
    let currentSum = arr[0];  // Initialize the current sum with the first element

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}


// Time Complexity : The input array's size, n, determines the algorithm's time complexity, which is O(n). Each element of the array is once processed.

// Space Complexity : Its memory footprint is modest and fixed regardless of the size of the input array because the technique requires a fixed amount of extra space, making its space complexity O(1).