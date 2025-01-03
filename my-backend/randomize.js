// 处理文本和挖空逻辑
const fs = require('fs');
const path = require('path');

// 读取 test.txt 文件
const filePath = path.join(__dirname, 'test.txt');
const text = fs.readFileSync(filePath, 'utf-8');

// 分割文本成句子
const sentences = text.split('.').map(sentence => sentence.trim()).filter(sentence => sentence);

// 随机选择单词并挖空
function getRandomBlankSentence(sentence) {
  const words = sentence.split(' ');

  // 随机选择挖空的单词数量
  const numBlanks = Math.floor(Math.random() * 3) + 1; // 随机选择 1-3 个单词挖空

  const blankedSentence = words.map(word => {
    if (Math.random() < 0.3 && numBlanks > 0) {
      numBlanks--;
      return '___'; // 将单词替换为空白
    }
    return word;
  }).join(' ');

  return blankedSentence;
}

// 提供一个函数返回随机句子和填空选项
function generateRandomSentence() {
  const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
  const blankedSentence = getRandomBlankSentence(randomSentence);

  return {
    sentence: blankedSentence,
    originalSentence: randomSentence,
    options: ['word1', 'word2', 'word3'] // 这里只是一个示例，后续可以根据实际情况动态生成
  };
}

module.exports = generateRandomSentence;
