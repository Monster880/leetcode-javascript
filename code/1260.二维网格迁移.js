/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

function deepClone(target){
  let result
  if(typeof target === 'object'){
    if(Array.isArray(target)){
      result = []
      for(let i in target){
        result.push(deepClone(target[i]))
      }
    }else if(target.constructor === RegExp){
      result = target
    }else if(target === null){
      result = null
    }else{
      result = {}
      for(let i in target){
        result[i] = deepClone(target[i])
      }
    }
  }else{
    result = target
  }
  return result
}


var shiftGrid = function(grid, k) {
  for(let i=0;i<k;i++){
    old = deepClone(grid)
    for(let j=0;j<grid.length;j++){
      for(let m=0;m<grid[0].length;m++){
        if((j==grid.length-1)&&(m==grid[0].length-1)){
          grid[0][0] = old[j][m]
        }else if(m==grid[0].length-1){
          grid[j+1][0] = old[j][m]
        }else{
          grid[j][m+1] = old[j][m]
        }
      }
    }
  }
  return grid
};
// @lc code=end

