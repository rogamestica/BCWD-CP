import React from 'react';

const ServiceAndAdvisories = () => {
  const advisoriesData = [
    {
      id: 1,
      title: "Scheduled Maintenance",
      date: "April 30, 2023",
      content: "There will be a scheduled maintenance on our system from 12:00 AM to 4:00 AM on April 30, 2023. During this time, our online services will be unavailable. We apologize for any inconvenience this may cause."
    },
    {
      id: 2,
      title: "New Payment Option",
      date: "April 20, 2023",
      content: "We are excited to announce a new payment option for our customers. Starting May 1, 2023, you can now pay your bills through our mobile app using your credit or debit card. Download our mobile app now to enjoy this new feature."
    },
    {
      id: 3,
      title: "Water Interruption",
      date: "April 15, 2023",
      content: "There will be a temporary water interruption on April 20, 2023 from 9:00 AM to 12:00 PM in Barangay ABC. This is to facilitate repairs on our water system. We advise our customers in the affected area to store enough water for their needs during the interruption. We apologize for any inconvenience this may cause."
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Service and Advisories</h2>
      {advisoriesData.map((advisory) => (
        <div key={advisory.id} style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>{advisory.title}</h3>
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>{advisory.date}</p>
          <p>{advisory.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ServiceAndAdvisories;
