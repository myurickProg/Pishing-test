import React from 'react';

function BotaoReiniciar({ reiniciarQuiz }) {
  return (
    <button style={btn} onClick={reiniciarQuiz} >      Reiniciar Quiz    </button>
  );
}

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

export default BotaoReiniciar;