const emails = [
    {
      id: 1,
      remetente: "suporte@bancodigital.com",
      assunto: "Atualize sua conta imediatamente!",
      corpo: "Detectamos atividades suspeitas em sua conta. Clique no link abaixo para evitar o bloqueio.",
      linkTexto: "🔗 Atualizar conta",
      tipo: "phishing",
      data: "06/05/2025 08:22",
      anexo: null,
      linkReal: "http://atualizacao-banco-seguro.com"
    },
    {
      id: 2,
      remetente: "rh@empresa.com",
      assunto: "Bem-vindo ao time!",
      corpo: "Seu contrato está anexo. Estamos felizes por você estar conosco. Qualquer dúvida, nos chame.",
      linkTexto: "📎 Ver contrato",
      tipo: "legitimo",
      data: "05/05/2025 14:09",
      anexo: "https://empresa.com/contratos/contrato_funcionario.pdf",
      linkReal: "https://empresa.com/rh"
    },
    {
      id: 3,
      remetente: "noreply@google-alertas.com",
      assunto: "Alerta de login suspeito",
      corpo: "Detectamos um novo login em sua conta. Se não foi você, clique aqui para proteger seu acesso.",
      linkTexto: "🔐 Revisar atividade",
      tipo: "phishing",
      data: "06/05/2025 19:15",
      anexo: null,
      linkReal: "http://login-verificacao-google.com"
    },
    {
      id: 4,
      remetente: "eventos@universidade.edu",
      assunto: "Convite para palestra de cibersegurança",
      corpo: "Participe da nossa palestra com especialistas em segurança digital. Inscreva-se abaixo!",
      linkTexto: "📝 Inscrição gratuita",
      tipo: "legitimo",
      data: "03/05/2025 11:30",
      anexo: null,
      linkReal: "https://universidade.edu/eventos/ciberseguranca"
    },
    {
      id: 5,
      remetente: "it@empresa.com",
      assunto: "Atualização obrigatória de sistema",
      corpo: "Clique aqui para instalar a última versão do sistema de forma segura.",
      linkTexto: "⬇️ Baixar atualização",
      tipo: "phishing",
      data: "02/05/2025 16:50",
      anexo: null,
      linkReal: "http://update-sistema-empresa.com"
    },
    {
      id: 6,
      remetente: "financeiro@empresa.com",
      assunto: "Comprovante de pagamento disponível",
      corpo: "Seu comprovante referente ao mês anterior está disponível para download seguro no sistema.",
      linkTexto: "📥 Acessar comprovante",
      tipo: "legitimo",
      data: "01/05/2025 09:00",
      anexo: "https://empresa.com/pagamentos/comprovante_abril.pdf",
      linkReal: "https://empresa.com/financeiro"
    },
    {
      id: 7,
      remetente: "premios@loterianacional.com",
      assunto: "Você foi sorteado!",
      corpo: "Parabéns! Você foi sorteado em nossa campanha. Clique para resgatar seu prêmio.",
      linkTexto: "🎁 Resgatar agora",
      tipo: "phishing",
      data: "07/05/2025 06:12",
      anexo: null,
      linkReal: "http://premio-ganhador2025.com"
    },
    {
      id: 8,
      remetente: "zoom@zoom.us",
      assunto: "Confirmação de reunião",
      corpo: "Sua reunião com a equipe está confirmada para amanhã às 14h. Acesse o link abaixo no horário.",
      linkTexto: "🔗 Acessar reunião",
      tipo: "legitimo",
      data: "06/05/2025 13:44",
      anexo: null,
      linkReal: "https://zoom.us/j/123456789"
    }
  ];
  
  export default emails;
  