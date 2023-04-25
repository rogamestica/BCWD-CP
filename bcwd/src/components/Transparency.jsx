import React from "react";
import bcwdlogo from "./images/bcwdlogo.png";

const Transparency = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5", paddingTop: "30px", paddingBottom: "30px" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", letterSpacing: "1px", color: "black", marginRight: "10px" }}>TRANSPARENCY</h1>
        <img src={bcwdlogo} alt="BCWD Logo" style={{ width: "100px", height: "100px" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ backgroundColor: "#fff", padding: "30px", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", borderRadius: "5px", marginRight: "20px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>BCWD CITIZEN’S CHARTER</h2>
          <p style={{ fontSize: "18px", lineHeight: "26px", textAlign: "justify" }}>The Butuan City Water District (BCWD) is committed to the timely delivery of safe and clean water to all its concessionaires, while giving importance to customer satisfaction, corporate social responsibility, and environment protection. We are also committed to providing our clients with prompt, efficient and excellent customer service and transparent transactions through the Citizen's Charter.</p>
          <a href="https://bcwd.gov.ph/docs/Citizen_Charter.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#0072c6", fontSize: "18px", fontWeight: "bold", marginTop: "20px", display: "block" }}>View BCWD Citizen's Charter</a>
        </div>
        <div style={{ backgroundColor: "#fff", padding: "30px", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", borderRadius: "5px", marginLeft: "20px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>BCWD ANNUAL REPORTS</h2>
          <p style={{ fontSize: "18px", lineHeight: "26px", textAlign: "justify" }}>The Butuan City Water District (BCWD) aims to provide its concessionaires with uninterrupted water service and promote water conservation through efficient and responsible management of the water resources in Butuan City. Get to know more about our performance and achievements by checking out our annual reports.</p>
          <a href="https://bcwd.gov.ph/docs/Annual_Report_2020.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#0072c6", fontSize: "18px", fontWeight: "bold", marginTop: "20px", display: "block" }}>View BCWD Annual Reports</a>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
