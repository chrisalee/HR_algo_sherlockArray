//  to slow for large cases (100000 item arrays)
const balancedSums = (arr) => {
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      const leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
      const rightSum = arr.slice(i + 1, arr.length).reduce((a, b) => a + b, 0);
      
      if (leftSum === rightSum) {
        return 'YES'
      }
    }
    return 'NO';
  }
  return 'YES';
}


// passes all cases
const balancedSums = (arr) => {
    let leftSum = 0, rightSum = 0;
    for(let i = 1; i < arr.length; i++) {
        rightSum += arr[i];
    }
    for(let i = 0; i < arr.length; i++) {
        if(leftSum == rightSum) {
            return "YES";
        } else {
            leftSum +=arr[i];
            rightSum -=arr[i+1];
        }
    }
    return 'NO'
}
