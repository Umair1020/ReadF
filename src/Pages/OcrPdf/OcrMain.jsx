import React, { useState, useRef, useEffect } from "react";

import OcrFile from "./OcrFile";

import Pdf from "../../components/Pdf/Pdf";
import { useFile } from "../../FIleContext";
const Main = ({ click, pdfDoc, userId }) => {
  const [pdfFile, setPdfFile] = useState(null);
  const { file } = useFile();
  console.log(file);
  useEffect(() => {
    const fileData = localStorage.getItem("fileData");
    const fileName = localStorage.getItem("fileName");
    const fileType = localStorage.getItem("fileType");

    if (fileData) {
      const byteString = atob(fileData.split(",")[1]);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: fileType });
      const blobUrl = URL.createObjectURL(blob);
      setPdfFile(blobUrl);
    }
  }, []);
  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      <div style={{ flexBasis: "50%", flexGrow: 0, flexShrink: 0 }}>
        <Pdf file={pdfFile ? pdfFile : click} />
      </div>
      <div style={{ flexBasis: "50%", flexGrow: 0, flexShrink: 0 }}>
        <OcrFile pdfDoc={file ? file : pdfDoc} userId={userId} />
      </div>
    </div>
  );
};

export default Main;
