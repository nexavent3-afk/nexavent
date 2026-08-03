"use client";

import { useState } from "react";

export default function Accessibility() {
  const [largeText, setLargeText] = useState(false);

  const toggleText = () => {
    document.body.classList.toggle("text-xl");
    setLargeText(!largeText);
  };

  return (
    <button
      onClick={toggleText}
      style={{
        position: "fixed",
        bottom: "90px",
        right: "20px",
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        background: "#0057ff",
        color: "white",
        border: "none",
        fontSize: "24px",
        cursor: "pointer",
        zIndex: 9999,
      }}
      title="נגישות"
    >
      ♿
    </button>
  );
}