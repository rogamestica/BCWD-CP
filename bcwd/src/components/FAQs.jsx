import React from 'react';

const FaQs = () => {
  return (
    <div style={{ 
      backgroundColor: '#fff',
      padding: '50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{ 
        fontSize: '40px',
        fontWeight: 'bold',
        marginBottom: '30px',
      }}>Frequently Asked Questions</h1>
      <div style={{ 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
        <div style={{ 
          marginBottom: '30px',
        }}>
          <h2 style={{ 
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '10px',
          }}>How do I pay my bill online?</h2>
          <p style={{ 
            fontSize: '20px',
            marginBottom: '0',
          }}>You can pay your bill online by visiting our Bill Payment Partners page and selecting your preferred payment method.</p>
        </div>
        <div style={{ 
          marginBottom: '30px',
        }}>
          <h2 style={{ 
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '10px',
          }}>What should I do if I experience low water pressure?</h2>
          <p style={{ 
            fontSize: '20px',
            marginBottom: '0',
          }}>If you experience low water pressure, please contact our customer service hotline at 123-4567 to report the issue.</p>
        </div>
        <div style={{ 
          marginBottom: '30px',
        }}>
          <h2 style={{ 
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '10px',
          }}>How often should I have my water meter checked?</h2>
          <p style={{ 
            fontSize: '20px',
            marginBottom: '0',
          }}>We recommend having your water meter checked once a year to ensure accurate readings and avoid any issues.</p>
        </div>
      </div>
    </div>
  );
}

export default FaQs;
