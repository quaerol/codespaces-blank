import React, { useState, useEffect } from 'react';

const FillInTheBlank = () => {
  const [sentence, setSentence] = useState('');
  const [options, setOptions] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    // 获取填空题
    fetch('http://localhost:5000/api/get-fill-in-the-blank')
      .then((response) => response.json())
      .then((data) => {
        setSentence(data.sentence);
        setOptions(data.options);
      });
  }, []);

  const handleChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (userAnswer === 'word1') {  // 假设 'word1' 是正确答案
      setFeedback('Correct!');
    } else {
      setFeedback('Try again!');
    }
  };

  return (
    <div>
      <h1>Fill in the Blank</h1>
      <p>{sentence}</p>
      <select onChange={handleChange}>
        <option value="">Select a word</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Submit</button>
      <p>{feedback}</p>
    </div>
  );
};

export default FillInTheBlank;
