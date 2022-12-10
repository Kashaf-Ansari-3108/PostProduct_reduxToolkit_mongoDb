import React from "react";
import Form from "react-bootstrap/Form";

const FileUploadCmp = ({ label, onChange }) => {
  return (
    <>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Control onChange={onChange} type="file" size="lg" />
        <Form.Label>{label ? label : "Choose file"}</Form.Label>
      </Form.Group>
    </>
  );
};

export default FileUploadCmp;
