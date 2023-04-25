// MAXIMUM CONTAINER


function area(height) {
  let area = [];
  for (let i = 0; i < height.length - 1; i++) {
   console.log(height[i], i + 1)
   
    area.push(height[i] * i + 1);
  }
  return Math.max(...area);
}
console.log(area([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// var maxArea = function (height) {
//   const areaArray = [];
//   for (let i = 0; i < height.length; i++) {
//     for (let j = 0; j < height.length; j++) {
//       const area = i * height[i];
//       areaArray.push(area);
//     }
//   }
//   console.log(areaArray);
//   return Math.max(...areaArray);
// };

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
