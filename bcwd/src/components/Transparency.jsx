import React from "react";
import bcwdlogo from "./images/bcwdlogo.png";

const Transparency = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5", paddingTop: "30px", paddingBottom: "30px" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", letterSpacing: "1px", color: "black", marginRight: "10px" }}>TRANSPARENCY</h1>
        <img src={bcwdlogo} alt="BCWD Logo" style={{ width: "100px", height: "100px" }} />
      </div>

      <div style={{ backgroundColor: "#fff", padding: "30px", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", borderRadius: "5px", marginLeft: "20px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>SYMBOLISM</h2>
          <p style={{ fontSize: "18px", lineHeight: "26px", textAlign: "justify" }}>A pearl buried inside a tightly-shut shell is practically worthless. Government information is a pearl, meant to be shared with the public in order to maximize its inherent value.</p>
          <p style={{ fontSize: "18px", lineHeight: "26px", textAlign: "justify" }}>The Transparency Seal, depicted by a pearl shining out of an open shell, is a symbol of a policy shift towards openness in access to government information. On the one hand, it hopes to inspire Filipinos in the civil service to be more open to citizen engagement; on the other, to invite the Filipino citizenry to exercise their right to participate in governance.</p>
          <p style={{ fontSize: "18px", lineHeight: "26px", textAlign: "justify" }}>This initiative is envisioned as a step in the right direction towards solidifying the position of the Philippines as the Pearl of the Orient - a shining example for democratic virtue in the region.</p>
          <a href="https://bcwd.gov.ph/docs/Annual_Report_2020.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#0072c6", fontSize: "18px", fontWeight: "bold", marginTop: "20px", display: "block" }}>View BCWD Annual Reports</a>
        </div>

      
      {/* <div style={{ backgroundColor: "#fff", padding: "30px", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", borderRadius: "5px", marginRight: "20px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>BCWD Compliance with Transparency Seal</h2>
        <p style={{ fontSize: "18px", lineHeight: "26px", textAlign: "justify" }}>.</p>
        <ul style={{ textAlign: "left", color: "#000000", fontSize:"18px"}}>
          <li><a href="." target="_blank" rel="noreferrer" >DBM APPROVED BUDGET AND TARGETS</a></li>
          <ul style={{paddingLeft: "20px"}}>
        <li><a href=".">Budget Report 2022</a></li>
        <li><a href=".">Budget Report 2021</a></li>
      </ul>
          <li><a href="." target="_blank" rel="noreferrer">ANNUAL PROCUREMENT PLAN</a></li>
          <li><a href="." target="_blank" rel="noreferrer" >MAJOR PROGRAMS, PROJECTS AND ACTIVITIES, BENEFICIARIES, AND STATUS OF IMPLEMENTATION</a></li>
          <li><a href="." target="_blank" rel="noreferrer">ANNUAL FINANCIAL REPORTS</a></li> 
          <li><a href="." target="_blank" rel="noreferrer">QMS CERTIFICATION</a></li>
          <li><a href="." target="_blank" rel="noreferrer">SYSTEM OF RANKING DELIVERY UNITS</a></li>
          <li><a href="." target="_blank" rel="noreferrer">AGENCY REVIEW AND COMPLIANCE PROCEDURE OF STATEMENTS AND FINANCIAL DISCLOSURES</a></li>
          <li><a href="." target="_blank" rel="noreferrer">FREEDOM OF INFORMATION</a></li>
        </ul>
      </div> */}

<div style={{ position: "relative", display: "inline-block" }}>
  <button style={{ backgroundColor: "#4CAF50", color: "#fff", padding: "12px", fontSize: "16px", border: "none", cursor: "pointer" }}>ANNUAL PROCUREMENT PLAN</button>
  <div style={{ position: "absolute", zIndex: "1", backgroundColor: "#f9f9f9", minWidth: "160px", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", borderRadius: "5px", padding: "12px", top: "40px" }}>
    <a href=".">Link 1</a>
    <a href=".">Link 2</a>
    <a href=".">Link 3</a>
  </div>
</div>

      

      <div style={{ backgroundColor: "#fff", padding: "30px", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", borderRadius: "5px", marginLeft: "20px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>BCWD ANNUAL REPORTS</h2>
          <p style={{ fontSize: "18px", lineHeight: "26px", textAlign: "justify" }}>The Butuan City Water District (BCWD) aims to provide its concessionaires with uninterrupted water service and promote water conservation through efficient and responsible management of the water resources in Butuan City. Get to know more about our performance and achievements by checking out our annual reports.</p>
          <a href="https://bcwd.gov.ph/docs/Annual_Report_2020.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#0072c6", fontSize: "18px", fontWeight: "bold", marginTop: "20px", display: "block" }}>View BCWD Annual Reports</a>
      </div>

      <div>
     
      </div>
    </div>
  );
};

export default Transparency;
