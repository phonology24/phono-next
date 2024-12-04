"use client";
import React from "react";
import "../../../styles/contactus/admin/admindasboard.css";
import SupportCategoryList from "./DataFetchers/CategoryList"
import SupportDocumentEditor from "./SupportDocumentEditor";

const SupportDocumentDashboard = () => {
  return (
    <div className="support-dashboard">
      <SupportCategoryList />
      {/* <SupportDocumentEditor/> */}
    </div>
  );
};

export default SupportDocumentDashboard;
