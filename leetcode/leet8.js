const findDifference = (num1, num2) => {
    const m1 = new Set(num1);
    const m2 = new Set(num2);
    num1 = Array.from(m1);
    num2 = Array.from(m2);
    const num3 = [];
    const num4 = [];
    for (let i = 0; i < num2.length; i++) {
      if (m1.has(num2[i])) {
      } else {
        num3.push(num2[i]);
      }
    }
    for (let j = 0; j < num1.length; j++) {
      if (m2.has(num1[j])) {
      } else {
        num4.push(num1[j]);
      }
    }
    return [[...num4], [...num3]];
  };
  const num1 = [1, 2, 3, 3];
  const num2 = [1, 1, 2, 2, 2];
  console.log(findDifference(num1, num2));
  