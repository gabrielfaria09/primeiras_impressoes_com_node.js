import { fastify } from "fastify";
//import { Database } from "./database.js";
import { DatabasePostgres } from "./database-postgres.js";

const servidor = fastify();
const database = new DatabasePostgres();
const PORT = process.env.PORT ?? 3333;

servidor.put("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  await database.update(videoId, {
    title,
    description,
    duration
  });

  return reply.status(204).send();
});

servidor.post("/videos", async (request, reply) => {
  const { title, description, duration } = request.body;

  await database.create({
    title: title,
    description: description,
    duration: duration,
  });

  return reply.status(201).send();
});

servidor.get("/videos", async (request) => {
  const search = request.query.search;

  const videos = await database.list(search);

  console.log(videos);

  return videos;
});

servidor.delete("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;

  await database.delete(videoId);

  return reply.status(204).send();
});

servidor.listen({
  host: '0.0.0.0',
  port: PORT,
}).then(() => {
  console.log(`HTTP Server Running on port ${PORT}`);
});
