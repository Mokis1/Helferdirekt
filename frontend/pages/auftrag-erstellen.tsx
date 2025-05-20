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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auftrag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("✅ Auftrag erfolgreich gespeichert");
        setForm({ titel: "", beschreibung: "", ort: "", datum: "", budget: "" });
      } else {
        alert("❌ Fehler beim Speichern");
      }
    } catch (err) {
      alert("⚠️ Serverfehler");
    }
  };

  return (
    <>
      <Head>
        <title>Auftrag erstellen – Helferdirekt</title>
      </Head>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.heading}>📝 Auftrag erstellen</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input name="titel" placeholder="Titel z. B. Umzugshilfe" required onChange={handleChange} value={form.titel} style={styles.input} />
          <textarea name="beschreibung" placeholder="Was brauchst du?" required onChange={handleChange} value={form.beschreibung} style={styles.textarea} />
          <input name="ort" placeholder="Ort oder PLZ" required onChange={handleChange} value={form.ort} style={styles.input} />
          <input name="datum" type="date" required onChange={handleChange} value={form.datum} style={styles.input} />
          <input name="budget" placeholder="Budget in €" required onChange={handleChange} value={form.budget} style={styles.input} />
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
