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
