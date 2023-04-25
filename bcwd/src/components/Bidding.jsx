import React from "react";
import docs1 from "./documents/docs1.pdf";
import docs2 from "./documents/docs2.pdf";
import docs3 from "./documents/docs3.pdf";
import docs4 from "./documents/docs4.pdf";
import docs5 from "./documents/docs5.pdf";

const Bidding = () => {
  const cardStyle = {
    backgroundColor: "#f5f5f5",
    borderRadius: "5px",
    padding: "20px",
    marginBottom: "30px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "500px"
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px"
  };

  const linkStyle = {
    textDecoration: "none",
    backgroundColor: "#0072c6",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    display: "inline-block",
    marginTop: "10px"
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ marginBottom: "50px" }}>Bidding</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Request for Quotation: Procurement of LABORATORY SUPPLIES & REAGENTS</h2>
          <a href={docs1} target="_blank" rel="noreferrer" style={linkStyle}>
            Download Bid Documents
          </a>
        </div>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Request for Quotation: Procurement of Office Supplies</h2>
          <a href={docs2} target="_blank" rel="noreferrer" style={linkStyle}>
            Download Bid Documents
          </a>
        </div>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Request for Quotation: Procurement of Various plastic coupling and GI plug</h2>
          <a href={docs3} target="_blank" rel="noreferrer" style={linkStyle}>
            Download Bid Documents
          </a>
        </div>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Request for Quotation: Procurement of VARIOUS SERVICES</h2>
          <a href={docs4} target="_blank" rel="noreferrer" style={linkStyle}>
            Download Bid Documents
          </a>
        </div>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Notification of Non-winning Bidders: PACKAGE 06-2022 Procurement of Supply and Delivery of 4 units Data Collector - Vocom Enterprises</h2>
          <a href={docs5} target="_blank" rel="noreferrer" style={linkStyle}>
            Download Bid Documents
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bidding;
