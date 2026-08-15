import { fastify } from "fastify";
import { Database } from "./database.js";

const servidor = fastify();
const database = new Database();

servidor.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  database.update(videoId, {
    title,
    description,
    duration
  });

  return reply.status(204).send();
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

servidor.get("/videos", (request) => {
  const search = request.query.search;

  const videos = database.list(search);

  console.log(videos);

  return videos;
});

servidor.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id;

  database.delete(videoId);

  return reply.status(204).send();
});

servidor.listen({
  port: 3000,
});

console.log("Servidor rodando na porta 3000 (http://localhost:3000)");
