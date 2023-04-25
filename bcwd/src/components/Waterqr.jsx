import React from 'react';

const WaterQualityResult = () => {
  const resultData = {
    ph: 7.5,
    temperature: 28.3,
    turbidity: 2.5,
    chlorine: 0.5,
    hardness: 150,
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Water Quality Result</h2>
      <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ padding: '1rem 2rem' }}>Parameter</th>
            <th style={{ padding: '1rem 2rem' }}>Result</th>
            <th style={{ padding: '1rem 2rem' }}>Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '1rem 2rem', borderTop: '2px solid #ddd' }}>pH</td>
            <td style={{ padding: '1rem 2rem', borderTop: '2px solid #ddd' }}>{resultData.ph}</td>
            <td style={{ padding: '1rem 2rem', borderTop: '2px solid #ddd' }}>pH units</td>
          </tr>
          <tr>
            <td style={{ padding: '1rem 2rem' }}>Temperature</td>
            <td style={{ padding: '1rem 2rem' }}>{resultData.temperature}</td>
            <td style={{ padding: '1rem 2rem' }}>°C</td>
          </tr>
          <tr>
            <td style={{ padding: '1rem 2rem' }}>Turbidity</td>
            <td style={{ padding: '1rem 2rem' }}>{resultData.turbidity}</td>
            <td style={{ padding: '1rem 2rem' }}>NTU</td>
          </tr>
          <tr>
            <td style={{ padding: '1rem 2rem' }}>Chlorine</td>
            <td style={{ padding: '1rem 2rem' }}>{resultData.chlorine}</td>
            <td style={{ padding: '1rem 2rem' }}>mg/L</td>
          </tr>
          <tr>
            <td style={{ padding: '1rem 2rem', borderBottom: '2px solid #ddd' }}>Hardness</td>
            <td style={{ padding: '1rem 2rem', borderBottom: '2px solid #ddd' }}>{resultData.hardness}</td>
            <td style={{ padding: '1rem 2rem', borderBottom: '2px solid #ddd' }}>ppm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WaterQualityResult;
