// You are given a list of songs where the ith song has a duration of time[i] seconds.
// Return the number of pairs of songs for which their total duration in seconds is divisible by
// 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 ==
// 0.


function numPairsDivisibleBy60(time) {
    const remainderCounts = {};
    let count = 0;

    for (const t of time) {
        const remainder = t % 60;
        const complement = (60 - remainder) % 60;

        // If the complement exists in the remainderCounts, add its count to the total count
        if (remainderCounts[complement]) {
            count += remainderCounts[complement];
        }

        // Increment the count for the current remainder
        remainderCounts[remainder] = (remainderCounts[remainder] || 0) + 1;
    }

    return count;
}
