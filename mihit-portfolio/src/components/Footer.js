// src/components/Footer.js
import React from 'react';

export default function Footer({ note }) {
  return (
    <footer className="footer">
      <div className="container">{note}</div>
    </footer>
  );
}
