import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Helferdirekt – Hilfe & Werkzeug in deiner Nähe</title>
        <meta name="description" content="Finde Helfer oder verleihe Werkzeuge in deiner Nachbarschaft." />
      </Head>
      <main style={styles.main}>
        <h1 style={styles.headline}>
          Finde Hilfe in deiner Nähe <br /> oder verleihe dein Werkzeug
        </h1>
        <p style={styles.subtext}>
          Helferdirekt bringt Menschen zusammen, die Hilfe brauchen – mit denen, die helfen wollen.
        </p>
        <div style={styles.buttons}>
          <a href="/helfer" style={styles.button}>Hilfe anbieten</a>
          <a href="/werkzeuge" style={styles.button}>Werkzeug ausleihen</a>
        </div>

        <section style={styles.features}>
          <div style={styles.feature}>
            <h3>👷 Schnelle Hilfe</h3>
            <p>Finde Helfer in deiner Nachbarschaft in wenigen Minuten.</p>
          </div>
          <div style={styles.feature}>
            <h3>🔧 Werkzeuge teilen</h3>
            <p>Verleihe dein Werkzeug oder leihe dir günstig welches aus.</p>
          </div>
          <div style={styles.feature}>
            <h3>🤝 Sicher & lokal</h3>
            <p>Helferdirekt bringt dich mit Menschen in deiner Nähe zusammen.</p>
          </div>
        </section>
      </main>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    padding: "3rem 1rem",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
  },
  headline: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "1rem",
  },
  subtext: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    color: "#555",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "3rem",
    flexWrap: "wrap",
  },
  button: {
    padding: "0.75rem 1.5rem",
    borderRadius: "6px",
    backgroundColor: "#222",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
  },
  features: {
    display: "flex",
    gap: "2rem",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: "2rem",
  },
  feature: {
    flex: "1 1 30%",
    minWidth: "200px",
    padding: "1rem",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
  },
};
