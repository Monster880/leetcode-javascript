/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

function TrieNode(val) {
  this.val = val;
  this.children = [];
  this.isWord = false;
}

function computeIndex(c) {
  return c.charCodeAt(0) - "a".charCodeAt(0);
}

var Trie = function () {
  this.root = new TrieNode(null);
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let ws = this.root;
  for (let i = 0; i < word.length; i++) {
    let c = word[i];
    let current = computeIndex(c);
    if (!ws.children[current]) {
      ws.children[current] = new TrieNode(c);
    }
    ws = ws.children[current];
  }
  ws.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let ws = this.root;
  for (let i = 0; i < word.length; i++) {
    let c = word[i];
    let current = computeIndex(c);
    if (!ws.children[current]) return false;
    ws = ws.children[current];
  }
  return ws.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let ws = this.root;
  for (let i = 0; i < prefix.length; i++) {
    let c = prefix[i];
    let current = computeIndex(c);
    if (!ws.children[current]) return false;
    ws = ws.children[current];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
