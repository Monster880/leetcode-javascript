/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  let cache=[]

  for(let i=0;i<=N;i++){
    if(i<=1){
      cache[i]=i;
    }else{
      cache[i]=cache[i-1]+cache[i-2]
    }
  }
  return cache[N];


};
// @lc code=end

