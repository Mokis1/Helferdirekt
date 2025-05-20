import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function AuftragErstellen() {
  const [form, setForm] = useState({
    titel: "",
    beschreibung: "",
    ort: "",
    datum: "",
    budget: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Gesendet:", form);
    alert("Auftrag gespeichert (noch lokal)");
  };

  return (
    <>
      <Head>
        <title>Auftrag erstellen – Helferdirekt</title>
      </Head>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.heading}>Auftrag erstellen</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input name="titel" placeholder="Titel z. B. Umzugshilfe" required onChange={handleChange} style={styles.input} />
          <textarea name="beschreibung" placeholder="Was genau brauchst du?" required onChange={handleChange} style={styles.textarea} />
          <input name="ort" placeholder="Ort oder PLZ" required onChange={handleChange} style={styles.input} />
          <input name="datum" type="date" required onChange={handleChange} style={styles.input} />
          <input name="budget" placeholder="Budget in €" required onChange={handleChange} style={styles.input} />
          <button type="submit" style={styles.button}>Auftrag speichern</button>
        </form>
      </main>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "system-ui, sans-serif",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.75rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  textarea: {
    padding: "0.75rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    minHeight: "100px",
  },
  button: {
    padding: "0.75rem",
    backgroundColor: "#222",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 600,
  },
};
