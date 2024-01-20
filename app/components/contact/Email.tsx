"use client";
import React from "react";
import { FaRegCopy } from "react-icons/fa";

const Email = () => {
  const email = "safvanmanikulath@gmail.com";

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <div className="py-4">
      <div className="py-2">
        <h3 className="pt-3">safvanmanikulath@gmail.com</h3>
        <p className="text-sm text-gray-400 py-2">E-mail</p>
        <FaRegCopy
          onClick={handleCopyToClipboard}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Email;
