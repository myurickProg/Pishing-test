export default function avaliarResposta(email, acaoUsuario) {
    const { tipo } = email;
  
    if (tipo === "phishing") {
      switch (acaoUsuario) {
        case "clicar":
          return {
            resultado: "erro",
            mensagem: "Você clicou em um link de phishing. Isso pode comprometer seus dados."
          };
        case "reportar":
          return {
            resultado: "acerto",
            mensagem: "Muito bem! Você reportou um e-mail de phishing."
          };
        case "ignorar":
          return {
            resultado: "parcial",
            mensagem: "Ignorar não foi o ideal. O e-mail é malicioso e deveria ser reportado."
          };
        default:
          return null;
      }
    }
  
    if (tipo === "legitimo") {
      switch (acaoUsuario) {
        case "clicar":
          return {
            resultado: "acerto",
            mensagem: "Tudo certo! Esse e-mail era legítimo."
          };
        case "reportar":
          return {
            resultado: "erro",
            mensagem: "Você reportou um e-mail legítimo. Cuidado com falsos positivos."
          };
        case "ignorar":
          return {
            resultado: "parcial",
            mensagem: "Ignorar não é errado, mas você poderia ter aproveitado o conteúdo do e-mail."
          };
        default:
          return null;
      }
    }
  
    return null;
  }
  