const fs = require('fs');

// Criando e escrevendo em um arquivo de texto
fs.writeFileSync('notas_aula.txt', 'Aula de Node.js: Aprendendo a manipular arquivos no servidor!');

console.log("Arquivo criado com sucesso!");

// Lendo o arquivo que acabou de ser criado
const conteudo = fs.readFileSync('notas_aula.txt', 'utf-8');

console.log("Conteúdo do arquivo:");
console.log(conteudo);