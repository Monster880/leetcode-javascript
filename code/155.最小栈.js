/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.minStack = Number.MAX_VALUE
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const minV = this.minStack
  if(x<minV){
    this.minStack = x
  }
  return this.stack.push(x-minV)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let item = this.stack.pop()
  const minV = this.minStack
  if(item<0){
    this.minStack = minV - item
    return minV
  }
  return item + minV
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  let item = this.stack[this.stack.length-1]
  if(item<0){
    return this.minStack
  }
  return item + this.minStack
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

