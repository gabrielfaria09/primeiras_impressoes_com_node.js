const http = require("http");

// Criamos o servidor
const servidor = http.createServer((req, res) => {
  // Configura a resposta como texto simples
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  // Responde de acordo com a rota acessada
  if (req.url === "/") {
    res.end("Bem-vindo à página inicial do nosso Servidor Node!");
  } else if (req.url === "/alunos") {
    res.end("Lista de Alunos: [Ana, Bruno, Carlos, Daniela]");
  } else if (req.url === "/data") {
    const dataAtual = new Date().toLocaleString("pt-BR");
    res.end(`Data e hora atual: ${dataAtual}`);
  } else {
    res.end("Página não encontrada! (Erro 404)");
  }
});

// Faz o servidor escutar a porta 3000
servidor.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});
