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

  return (
    <div style={card}>
      <div style={cabecalho}>
        <h3>{assunto}</h3>
        <p><strong>De:</strong> {remetente}</p>
        <p><strong>Data:</strong> {data}</p>
      </div>

      <hr />

      <div style={{ margin: "1rem 0" }}>
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
          >
            {linkTexto}
          </a>
        </p>
      </div>

      <hr />

      <div>
        <p><strong>O que você deseja fazer com este e-mail?</strong></p>
        <button style={btn} onClick={() => onAcao("clicar")}>Clicar no Link</button>
        <button style={btn} onClick={() => onAcao("reportar")}>Reportar</button>
        <button style={btn} onClick={() => onAcao("ignorar")}>Ignorar</button>
      </div>
    </div>
  );
}

// Estilos
const card = {
    border: "1px solid #ccc",
    padding: "1.5rem",
    borderRadius: "8px",
    background: "#fff",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "1rem auto",
    color: "black",
  };
  
const cabecalho = {
    marginBottom: "1rem"
};
  
const btn = {
    margin: "0.5rem 0.5rem 0 0",
    padding: "0.5rem 1rem",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
};
  
const link = {
    color: "#007bff",
    textDecoration: "underline"
};

export default EmailCard;