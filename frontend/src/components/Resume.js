import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import resume from "../assests/resume/resume.pdf";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className="container">
      <h1 className="center">Resume</h1>
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page height="1000" pageNumber={pageNumber} className="pdfclass" />
      </Document>
    </div>
  );
};

export default Resume;
