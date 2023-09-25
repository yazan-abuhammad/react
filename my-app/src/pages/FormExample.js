import React, { useState } from 'react';

function FormExample() {
  
  const [inputValue, setInputValue] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  // Event handler for the form input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    setSubmittedData(inputValue);
  };

  return (
    <div>
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter some data:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <p>Submitted Data:</p>
          <p>{submittedData}</p>
        </div>
      )}
    </div>
  );
}

export default FormExample;