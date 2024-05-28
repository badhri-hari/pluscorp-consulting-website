"use client";

import { useEffect, useState } from "react";
import { HStack } from "@chakra-ui/react";

export default function Footer() {
  const [visitCount, setVisitCount] = useState(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const getVisitCount = async () => {
      try {
        const response = await fetch("/api/visit");
        const data = await response.json();
        setVisitCount(data.count + 6150);
      } catch (error) {
        console.error("Error fetching visit count:", error);
      }
    };

    getVisitCount();
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <HStack>
          <div className="footer-visits">
            <strong>Website Visits</strong>
            <div>{visitCount !== null ? visitCount : "Loading..."}</div>
          </div>
        </HStack>
      </div>
      <div className="footer-copyright">
        ©{currentYear} by Pluscorp Consulting Private Limited.
      </div>
    </footer>
  );
}
