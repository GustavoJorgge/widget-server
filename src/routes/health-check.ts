import type { FastifyInstance } from "fastify";

const MAXIMUM_FILE_SIZE_IN_BYTES = 1024 * 1024 * 4; // 4mb

export async function healthCheckRoute(app: FastifyInstance) {
  app.get("/health", async (request, reply) => {
    await reply.status(200).send({ message: "TUDO OK!" });
  });
}
