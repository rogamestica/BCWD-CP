import React, { useState } from 'react';

const Calculator = () => {
  const [kilowatts, setKilowatts] = useState('');
  const [amountPerKilowatt, setAmountPerKilowatt] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const total = kilowatts * amountPerKilowatt;
    setResult(total);
  };

  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      borderRadius: "10px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 style={{ margin: "0 0 20px" }}>Water Bill Calculator</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <div style={{ marginBottom: "20px", width: "100%" }}>
          <label style={{ marginRight: "10px" }}>Kilowatts Used:</label>
          <input
            type="number"
            value={kilowatts}
            onChange={(e) => setKilowatts(e.target.value)}
            style={{ 
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
              maxWidth: "300px"
            }}
          />
        </div>
        <div style={{ marginBottom: "20px", width: "100%" }}>
          <label style={{ marginRight: "10px" }}>Amount Per Kilowatt:</label>
          <input
            type="number"
            value={amountPerKilowatt}
            onChange={(e) => setAmountPerKilowatt(e.target.value)}
            style={{ 
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
              maxWidth: "300px"
            }}
          />
        </div>
        <button onClick={handleCalculate} style={{ 
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
          maxWidth: "300px"
        }}>Calculate</button>
      </div>
      {result && (
        <p style={{ margin: "20px 0 0", fontSize: "24px", fontWeight: "bold" }}>Total: ₱{result.toFixed(2)}</p>
      )}
    </div>
  );
};

export default Calculator;
