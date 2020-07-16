/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  var res=0
  var obstaclesSet = new Set()
  for(let i =0;i<obstacles.length;i++){
    obstaclesSet.add(obstacles[i][0]+'_'+obstacles[i][1])
  }
  var dir=0,x=0,y=0
  var dx=[0,1,0,-1],dy=[1,0,-1,0]
  for(let i=0;i<commands.length;i++){
    if(commands[i] == -2){
      dir = (dir+3)%4
    }else if(commands[i] == -1){
      dir = (dir+1)%4
    }else{
      for(let j=1;j<=commands[i];j++){
        let nx = x + dx[dir]
        let ny = y + dy[dir]
        if(!obstaclesSet.has(nx+'_'+ny)){
          x = nx
          y = ny
          res = Math.max(res,x*x+y*y)
        }else{
          break
        }
      }
    }
  }
  return res
};
// @lc code=end

