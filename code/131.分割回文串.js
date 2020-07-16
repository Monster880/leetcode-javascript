/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  var list = [];
  backtrack(s, list, [], 0);
  return list;
};

function backtrack(s, list, tempList, start) {
  const sliced = s.slice(start);
  if (tempList.join("").length === s.length) {
    list.push([...tempList]);
  }
  for (let i = 0; i < sliced.length; i++) {
    const sub = sliced.slice(0, i + 1);
    if (isPalindrom(sub)) {
      tempList.push(sub);
    } else {
      continue;
    }
    backtrack(s, list, tempList, start + i + 1);
    tempList.pop();
  }
}

function isPalindrom(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right && s[left] == s[right]) {
    left++;
    right--;
  }
  return left >= right;
}

// @lc code=end
