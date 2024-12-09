import React from "react";
import logo from "./HGS_Logo.png"; // Updated file name

interface CompanyLogoProps {
  className?: string; // Optional class for custom positioning
}

function CompanyLogo({ className }: CompanyLogoProps) {
  return (
    <img
      src={logo}
      alt="HGS Logo"
      className={`company-logo ${className || ""}`} // Apply optional className
    />
  );
}

export default CompanyLogo;
