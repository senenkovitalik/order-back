import jwt from "jsonwebtoken";
import "dotenv/config";
import { QueryResolvers } from "../../graphql.js";
import { prisma } from "../../lib/prismaClient.js";

export const authQuery: QueryResolvers = {
  login: async (_, { username, password }) => {
    const user = await prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });

    if (!user) {
      throw new Error("Wrong username or password");
    }

    console.log(process.env["SECRET_KEY"]);

    const token = jwt.sign(
      { userId: user.id },
      process.env["SECRET_KEY"] as string,
      {
        expiresIn: "1h",
      }
    );

    return {
      token,
    };
  },
};
