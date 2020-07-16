/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] 常数时间插入、删除和获取随机元素
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.map = {};
  this.res = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (typeof this.map[val] !== "undefined") {
    return false;
  }
  this.map[val] = this.res.length;
  this.res.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (typeof this.map[val] === "undefined") {
    return false;
  }
  let lastIndex = this.res.length - 1;
  let lastNum = this.res[lastIndex];
  let deleteIndex = this.map[val];
  this.res[deleteIndex] = lastNum;
  this.map[lastNum] = deleteIndex;
  this.res.pop();
  delete this.map[val];
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let len = this.res.length;
  return this.res[Math.floor(Math.random() * len)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
