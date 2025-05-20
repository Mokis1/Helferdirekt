import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Helferdirekt</div>
      <div style={styles.links}>
        <Link href="/" style={styles.link}>Start</Link>
        <Link href="/helfer" style={styles.link}>Helfer finden</Link>
        <Link href="/werkzeuge" style={styles.link}>Werkzeuge</Link>
        <Link href="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    alignItems: "center",
    background: "#f9f9f9",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
  },
};
