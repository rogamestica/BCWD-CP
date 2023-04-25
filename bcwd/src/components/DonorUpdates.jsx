import React from 'react';

const DonorResult = () => {
  const resultData = [
    { name: 'John Doe', amount: 5000 },
    { name: 'Jane Smith', amount: 2500 },
    { name: 'David Johnson', amount: 1000 },
    { name: 'Sarah Lee', amount: 500 },
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Donor Result</h2>
      <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ padding: '1rem 2rem' }}>Donor Name</th>
            <th style={{ padding: '1rem 2rem' }}>Donation Amount</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((donor, index) => (
            <tr key={index}>
              <td style={{ padding: '1rem 2rem', borderTop: '2px solid #ddd' }}>{donor.name}</td>
              <td style={{ padding: '1rem 2rem', borderTop: '2px solid #ddd' }}>{donor.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DonorResult;
