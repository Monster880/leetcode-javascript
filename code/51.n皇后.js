/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let list = [];
  dfs(list, [], n);
  return list;
};

/**
 * 递归计算 N 皇后的解
 * @param {number} n
 * @param {number[]} tempList 长度为 n 的数组，tempList[i] 代表第 i 行的皇后放置的位置
 * @param {string[]} list
 */
function dfs(list, tempList, n) {
  if (tempList.length === n) {
    list.push(
      tempList.map((i) => {
        let strArr = Array(n).fill(".");
        strArr.splice(i, 1, "Q");
        return strArr.join("");
      })
    );
    return;
  }

  for (let j = 0; j < n; j++) {
    if (isValid(tempList, j)) {
      tempList.push(j);
      dfs(list, tempList, n);
      tempList.pop();
    }
  }
}

function isValid(tempList, j) {
  let len = tempList.length;
  for (let x = 0; x < len; x++) {
    let y = tempList[x];
    if (y === j || x - y === len - j || x + y === len + j) {
      return false;
    }
  }
  return true;
}
// @lc code=end
