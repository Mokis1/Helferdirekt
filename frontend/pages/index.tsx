import React from 'react';

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '4rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
        Willkommen bei <strong>Helferdirekt</strong>
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Deine Plattform für Nachbarschaftshilfe & Werkzeugverleih
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button style={{ padding: '1rem 2rem', fontSize: '1rem' }}>Helfer finden</button>
        <button style={{ padding: '1rem 2rem', fontSize: '1rem' }}>Werkzeug ausleihen</button>
      </div>
    </main>
  );
}
