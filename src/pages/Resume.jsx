import React from "react";
import { Document, Page } from "react-pdf";
import myPDF from "../assets/Jared-Andreassi-Resume.pdf";

function Resume() {
  return (
    <div>
      <object width="100%" height="2000" data={myPDF} type="application/pdf">
        {" "}
      </object>
    </div>
  );
}

export default Resume;
