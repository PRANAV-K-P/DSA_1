const palindrome = (num) => {
    let r, num2 = 0, item = num;
    while (num != 0) {
      r = Math.trunc(num % 10);
      num2 = num2 * 10 + r;
      num = Math.trunc(num / 10);
    }
    if (num2 < 0) {
      return false;
    } else if (num2 === item) {
      return true;
    } else {
      return false;
    }
  };
  if (palindrome(101)) {
      console.log("Number is palindrome");
  } else {
      console.log("Number is not a palindrome");
  }