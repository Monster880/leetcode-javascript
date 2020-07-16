/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stack = [];
  for (let i = 0; i < num.length; i++) {
    let temp = num[i];
    while (k > 0 && stack.length > 0 && temp < stack[stack.length - 1]) {
      stack.pop();
      k--;
    }
    stack.push(temp);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  while (stack.length > 0 && stack[0] === "0") {
    stack.shift();
  }
  return stack.length ? stack.join("") : "0";
};
// @lc code=end
