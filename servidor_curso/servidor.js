import { fastify } from "fastify";
import { Database } from "./database.js";

const servidor = fastify();
const database = new Database();

servidor.put("/videos/:id", () => {
  return "Hello World";
});

servidor.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    title: title,
    description: description,
    duration: duration,
  });

  return reply.status(201).send();
});

servidor.get("/videos", () => {
  const videos = database.list();

  console.log(videos);

  return videos;
});

servidor.delete("/videos/:id", () => {
  return "Hello Node.js";
});

servidor.listen({
  port: 3000,
});

console.log("Servidor rodando na porta 3000 (http://localhost:3000)");
