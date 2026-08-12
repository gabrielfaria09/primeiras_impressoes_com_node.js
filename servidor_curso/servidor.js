import { fastify } from "fastify";

const servidor = fastify();

servidor.get("/", () => {
  return "Hello World";
});

servidor.get("/hello", () => {
  return "Hello Skibidi";
});

servidor.get("/node", () => {
  return "Hello Node.js";
});

servidor.listen({
  port: 3000,
});

console.log("Servidor rodando na porta 3000 (http://localhost:3000)");
