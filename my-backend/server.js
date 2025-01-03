const express = require('express');
const generateRandomSentence = require('./randomize');

const app = express();
const port = 5000;

// 设置 CORS 允许跨域请求
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// 提供随机填空题 API
app.get('/api/get-fill-in-the-blank', (req, res) => {
  const randomSentence = generateRandomSentence();
  res.json(randomSentence);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
