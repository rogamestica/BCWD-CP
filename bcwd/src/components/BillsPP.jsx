import React from 'react';
import gcash from './images/gcash.png';
import paymaya from './images/paymaya.png';

const BillPaymentPartners = () => {
  const partners = [
    { name: 'Gcash', image: gcash },
    { name: 'Paymaya', image: paymaya },
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Bill Payment Partners</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {partners.map((partner, index) => (
          <div key={index} style={{ margin: '1rem', textAlign: 'center' }}>
            <img src={partner.image} alt={partner.name} style={{ height: '100px', marginBottom: '0.5rem' }} />
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BillPaymentPartners;
