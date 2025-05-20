import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const helferListe = [
  {
    name: "Sophie",
    job: "Gartenarbeit",
    stadt: "Berlin",
    stundenlohn: 18,
  },
  {
    name: "Jonas",
    job: "Möbel aufbauen",
    stadt: "Hamburg",
    stundenlohn: 20,
  },
  {
    name: "Lea",
    job: "Einkäufe erledigen",
    stadt: "München",
    stundenlohn: 15,
  },
];

export default function HelferSeite() {
  return (
    <>
      <Head>
        <title>Helfer finden – Helferdirekt</title>
      </Head>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.title}>Verfügbare Helfer</h1>
        <div style={styles.grid}>
          {helferListe.map((helfer, i) => (
            <div key={i} style={styles.card}>
              <h3>{helfer.name}</h3>
              <p><strong>Job:</strong> {helfer.job}</p>
              <p><strong>Ort:</strong> {helfer.stadt}</p>
              <p><strong>Stundenlohn:</strong> {helfer.stundenlohn} €</p>
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
    backgroundColor: "#fafafa",
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
