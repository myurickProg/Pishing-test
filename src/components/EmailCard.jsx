import React from "react";

function EmailCard({ email, onAcao }) {
  const {
    remetente,
    assunto,
    corpo,
    linkTexto,
    tipo,
    data,
    anexo,
    linkReal
  } = email;

  const getDominioDisfarcado = (url) => {
    try {
      const u = new URL(url);
      return u.hostname;
    } catch {
      return "";
    }
  };

  return (
    <div style={card}>
      <div style={cabecalho}>
        <h2 style={{ marginBottom: "0.3rem" }}>{assunto}</h2>
        <p><strong>De:</strong> <span style={gray}>{remetente}</span></p>
        <p><strong>Data:</strong> <span style={gray}>{data}</span></p>
      </div>

      <hr style={divider} />

      <div style={{ margin: "1.5rem 0" }}>
        <p>{corpo}</p>

        {anexo && (
          <p>
            📎 Anexo:{" "}
            <a
              href={anexo}
              target="_blank"
              rel="noopener noreferrer"
              style={link}
            >
              {anexo.split("/").pop()}
            </a>
          </p>
        )}

        <p>
          <a
            href={linkReal}
            onClick={(e) => e.preventDefault()}
            style={link}
            title={getDominioDisfarcado(linkReal)}
          >
            {linkTexto}
          </a>{" "}
          <span style={dominioDisfarcado}>
            ({getDominioDisfarcado(linkReal)})
          </span>
        </p>
      </div>

      <hr style={divider} />

      <div>
        <p><strong>O que você deseja fazer com este e-mail?</strong></p>
        <div style={btnContainer}>
          <button style={btn} onClick={() => onAcao("clicar")}>Clicar no Link</button>
          <button style={btn} onClick={() => onAcao("reportar")}>Reportar</button>
          <button style={btn} onClick={() => onAcao("ignorar")}>Ignorar</button>
        </div>
      </div>
    </div>
  );
}

// Estilos
const card = {
  border: "1px solid #ccc",
  padding: "2rem",
  borderRadius: "10px",
  background: "#fff",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  maxWidth: "650px",
  margin: "2rem auto",
  fontFamily: "Segoe UI, sans-serif",
  color: "#333",
};

const cabecalho = {
  marginBottom: "1.2rem"
};

const gray = {
  color: "#555"
};

const divider = {
  border: "none",
  borderTop: "1px solid #eee"
};

const link = {
  color: "#0066cc",
  textDecoration: "underline",
  fontWeight: "500"
};

const dominioDisfarcado = {
  fontSize: "0.9rem",
  color: "#999",
  marginLeft: "0.3rem"
};

const btnContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  marginTop: "0.5rem"
};

const btn = {
  padding: "0.5rem 1.2rem",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "500",
  fontSize: "0.95rem",
  transition: "background 0.2s ease"
};

export default EmailCard;
