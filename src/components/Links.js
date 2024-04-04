import React from "react";

export default function Links({ github, linkedin }) {
  return (
    <div>
        <h3>Links</h3>
      <div>
        <a href={github}>{github}</a>
      </div>
      <div>
        <a href={linkedin}>{linkedin}</a>
      </div>
    </div>
  );
}
