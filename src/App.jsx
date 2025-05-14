import React, {useState, useEffect} from "react";
import emails from "./data/emails";
import EmailCard from "./components/EmailCard";
import avaliarResposta from "./utils/AvaliarResposta";
import BotaoReiniciar from "./components/BotaoReiniciar";
import feedbackPhishing from "./data/feedbackPhishing";


function App(){
  const [listaEmails, setListaEmails] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [mostrarBotaoProximo, setMostrarBotaoProximo] = useState(false);
  
  useEffect(() => {
    const embaralhados = [...emails].sort(() => Math.random() - 0.5);
    setListaEmails(embaralhados);
  }, []);

  const reiniciarQuiz = () => {
    const embaralhados = [...emails].sort(() => Math.random() - 0.5);
    setListaEmails(embaralhados);
    setIndiceAtual(0);
    setPontuacao(0);
    setFeedback('');
  };

  const lidarComAcao = (acao) => {
    const emailAtual = listaEmails[indiceAtual];
    const resultado = avaliarResposta(emailAtual, acao);

    let conteudoFeedback;

    if(resultado.resultado === "erro" && emailAtual.tipo === "phishing"){
      const explicacao = feedbackPhishing[emailAtual.id];
      conteudoFeedback = (
        <>
          <p style={{textAlign: "center"}}><strong>{resultado.mensagem}</strong></p>
          {explicacao && <p><em>Dica:</em> {explicacao}</p>}
        </>
      );
    } else {
      conteudoFeedback = <p><strong>{resultado.mensagem}</strong></p>;
    }

    setFeedback(conteudoFeedback);

    if(resultado && resultado.resultado === "acerto"){
      setPontuacao((prev) => prev + 1);
    }

    setMostrarBotaoProximo(true);
  };

  const proximaPergunta = () => {
    setIndiceAtual((prev) => prev + 1);
    setFeedback("");
    setMostrarBotaoProximo(false);
  }

  const email = listaEmails[indiceAtual];

  if(!email){
    return (
      <div style={{  padding: "2rem", textAlign: "center"}}>
        <h2>Fim do Teste!</h2>
        <p>Sua pontuação final: <strong>{pontuacao}</strong> de {listaEmails.length}</p>
        <BotaoReiniciar reiniciarQuiz={reiniciarQuiz} />
        </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
        <h2 style={{ textAlign: "center" }}>Simulação de Phishing - Questão {indiceAtual + 1}</h2>
        <EmailCard email={email} onAcao={lidarComAcao} />
        {feedback && <><p><strong>{feedback}</strong></p>
          {mostrarBotaoProximo && (
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
            <button onClick={proximaPergunta} style={{ padding: "0.5rem 1rem", fontWeight: "bold" }}>
              Próxima Questão
            </button>
          </div>
          )}
          </>}
      </div>
  );

}

export default App;