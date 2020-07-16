/*
 * @lc app=leetcode.cn id=609 lang=javascript
 *
 * [609] 在系统中查找重复文件
 */

// @lc code=start
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const hashmap = {};

  for (let path of paths) {
    const [folder, ...files] = path.split(" ");
    for (let file of files) {
      const lpi = file.indexOf("(");
      const rpi = file.lastIndexOf(")");
      const filename = file.slice(0, lpi);
      const content = file.slice(lpi, rpi);
      const fullname = `${folder}/${filename}`;
      if (!hashmap[content]) hashmap[content] = [];
      hashmap[content].push(fullname);
    }
  }
  return Object.values(hashmap).filter((q) => q.length >= 2);
};
// @lc code=end
