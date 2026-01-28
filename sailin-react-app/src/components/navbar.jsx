import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          color: "white",
          margin: 0,
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Sail-IN
      </h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: "500",
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: "500",
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
