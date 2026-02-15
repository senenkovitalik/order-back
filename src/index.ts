import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import jwt from "jsonwebtoken";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import "dotenv/config";

import { resolvers } from "./resolvers/index.js";
import { MyContext } from "./types.js";
import { prisma } from "./lib/prismaClient.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const typeDefs = readFileSync(join(__dirname, "schema.graphql"), "utf-8");

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer<MyContext>(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return {};
    }

    try {
      const payload = jwt.verify(
        token,
        process.env["SECRET_KEY"] as string
      ) as {
        userId: string;
      };

      const user = await prisma.user.findFirst({
        where: {
          id: payload.userId,
        },
      });

      if (!user) {
        return {};
      }

      return {
        user,
      };
    } catch (e) {
      return {};
    }
  },
});

console.log(`🚀  Server ready at: ${url}`);
