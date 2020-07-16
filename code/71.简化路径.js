/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [];
  let pathStack = path.split("/");
  for (let ch of pathStack) {
    if (ch === "..") {
      stack.pop();
    } else if (ch === "." || ch === "") {
      continue;
    } else {
      stack.push(ch);
    }
  }
  return "/" + stack.join("/");
};
// @lc code=end
