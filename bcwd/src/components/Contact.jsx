import React from 'react';
import call from "./images/call.png";
import location from "./images/location.png";
import email from "./images/email.png";

const Contact = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}>
      <div style={{ width: '70%', margin: 'auto' }}>
        <h1 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '50px' }}>Contact Us</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
          <div style={{ width: '30%' }}>
            <img src={location} alt="Location" style={{ width: '50%' }} />
          </div>
          <div style={{ width: '60%', fontSize: '20px', lineHeight: '1.5' }}>
            <p style={{ fontWeight: 'bold' }}>Address:</p>
            <p>Butuan City Water District</p>
            <p>Gov. Jose A. Rosales Avenue, </p>
            <p>Butuan City, Philippines 8600</p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
          <div style={{ width: '30%' }}>
            <img src={call} alt="Phone" style={{ width: '50%' }} />
          </div>
          <div style={{ width: '60%', fontSize: '20px', lineHeight: '1.5' }}>
            <p style={{ fontWeight: 'bold' }}>Phone:</p>
            <p>Tel. Nos. 143 (Hotline) </p>
            <p>342-3145/46 (Bayantel)</p>
            <p>Fax No. 341-4298</p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
          <div style={{ width: '30%' }}>
            <img src={email} alt="Email" style={{ width: '50%' }} />
          </div>
          <div style={{ width: '60%', fontSize: '20px', lineHeight: '1.5' }}>
            <p style={{ fontWeight: 'bold' }}>Send your Inquiries:</p>
            <p>https://bcwd.gov.ph/survey_form/index.php</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
