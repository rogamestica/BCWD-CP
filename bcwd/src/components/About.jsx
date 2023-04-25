import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et mi ut enim tincidunt bibendum.
        Aliquam erat volutpat. Sed in massa ut nibh dictum malesuada. Maecenas vitae arcu nec tortor 
        tincidunt vehicula. Quisque ut enim velit.
      </p>
      <p style={styles.paragraph}>
        Praesent vestibulum a massa eget consectetur. Donec imperdiet euismod convallis. 
        Duis hendrerit sapien eget mauris bibendum malesuada. Aliquam malesuada, mi id faucibus mattis, 
        enim ante facilisis ipsum, sed malesuada elit elit a ex. 
      </p>
    </div>
  );
}

const styles = {
  container: {
    width: '80%',
    margin: 'auto',
    paddingTop: '50px',
    paddingBottom: '50px',
    textAlign: 'center'
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.5',
    marginBottom: '20px'
  }
}

export default About;
