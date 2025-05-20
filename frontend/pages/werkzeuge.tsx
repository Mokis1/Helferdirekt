import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const werkzeuge = [
  {
    name: "Bohrmaschine",
    beschreibung: "Leistungsstarke Bosch-Bohrmaschine mit 2 Gängen.",
    preis: 5,
    stadt: "Berlin",
  },
  {
    name: "Akkuschrauber",
    beschreibung: "Makita Akkuschrauber, ideal für Möbelmontage.",
    preis: 4,
    stadt: "Hamburg",
  },
  {
    name: "Leiter (3m)",
    beschreibung: "Alu-Leiter, klappbar. Perfekt für Malerarbeiten.",
    preis: 3,
    stadt: "München",
  },
];

export default function WerkzeugSeite() {
  return (
    <>
      <Head>
        <title>Werkzeugverleih – Helferdirekt</title>
      </Head>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.title}>Werkzeuge zum Ausleihen</h1>
        <div style={styles.grid}>
          {werkzeuge.map((tool, i) => (
            <div key={i} style={styles.card}>
              <h3>{tool.name}</h3>
              <p><strong>Ort:</strong> {tool.stadt}</p>
              <p>{tool.beschreibung}</p>
              <p><strong>Preis:</strong> {tool.preis} € / Tag</p>
              <button style={styles.button}>Jetzt anfragen</button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    padding: "2rem",
    maxWidth: "1000px",
    margin: "0 auto",
    fontFamily: "system-ui, sans-serif",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: "2rem",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
  },
  card: {
    flex: "1 1 250px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    backgroundColor: "#f5f5f5",
    textAlign: "left",
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#222",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
