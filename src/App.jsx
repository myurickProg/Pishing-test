import React, {useState, useEffect} from "react";
import emails from "./data/emails";
import EmailCard from "./components/EmailCard";
import avaliarResposta from "./utils/AvaliarResposta";
import BotaoReiniciar from "./components/BotaoReiniciar";


function App(){
  const [listaEmails, setListaEmails] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [feedback, setFeedback] = useState("");
  
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

    setFeedback(resultado.mensagem);

    if(resultado && resultado.resultado === "acerto"){
      setPontuacao((prev) => prev + 1);
    }

    setTimeout(() => {
      setFeedback("");
      setIndiceAtual((prev) => prev + 1);

    }, 2000);
  };

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
        <h2>Simulação de Phishing - Questão {indiceAtual + 1}</h2>
        <EmailCard email={email} onAcao={lidarComAcao} />
        {feedback && <p><strong>{feedback}</strong></p>}
      </div>
  );

}

export default App;