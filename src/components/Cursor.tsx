"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handlePointerMove = (event) => {
    setPosition({
      left: event.clientX - 12.5,
      top: event.clientY - 12.5,
    });
  };

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
      }}
    ></div>
  );
}
