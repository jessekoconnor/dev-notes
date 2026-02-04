function getMiddleIndex(bounds) {
    const diff = bounds[1] - bounds[0];
    const mid = Math.floor(diff / 2);
    return bounds[0] + mid;
}

// O(log*n)
function binarySearch(array, target, bounds) {
    // Write your code here.

    // initialize bounds
    if (!bounds) {
        bounds = [0, array.length-1] 
    }
    const [leftBound, rightBound] = bounds;

    // Did not find target, return -1
    if (leftBound > rightBound) {
        return -1;
    }

    const midIndex = getMiddleIndex(bounds);
    const midVal = array[midIndex];

    // found target
    if (target === midVal) {
        return midIndex;
    }

    // go left or right non-inclusive
    if (target > midVal) {
        return binarySearch(array, target, [midIndex+1, rightBound])
    } else {
        return binarySearch(array, target, [leftBound, midIndex-1])
    }
}