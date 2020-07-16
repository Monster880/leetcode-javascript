/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

function TrieNode() {
  this.children = {};
  this.isWord = false;
}

var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  if (word.length === 0) return;
  let ws = this.root;
  for (let i = 0; i < word.length; i++) {
    let c = word[i];
    if (!ws.children[c]) {
      ws.children[c] = new TrieNode();
    }
    ws = ws.children[c];
  }
  ws.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  if (word.length === 0) return true;
  return this.dfs(this.root, word);
};

WordDictionary.prototype.dfs = function (root, word) {
  let ws = root;
  for (let i = 0; i < word.length; i++) {
    let c = word[i];
    if (c === ".") {
      for (let key of Object.keys(ws.children)) {
        const found = this.dfs(ws.children[key], word.slice(i + 1));
        if (found) return true;
      }
      return false;
    }
    if (!ws.children[c]) return false;
    ws = ws.children[c];
  }
  return ws.isWord;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
