import { GraphQLError } from "graphql";
import { MutationResolvers } from "../../graphql.js";
import { prisma } from "../../lib/prismaClient.js";

export const unitMutation: MutationResolvers = {
  createUnit: async (_, { unitPayload: { title, location } }) => {
    try {
      return await prisma.unit.create({
        data: {
          title,
          location,
        },
      });
    } catch (e: any) {
      if (e.code === "P2002") {
        throw new GraphQLError("Unit with this title already exists", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      throw e;
    }
  },
  updateUnit: async (_, { unitPayload: { id, title, location } }) => {
    try {
      return await prisma.unit.update({
        where: { id },
        data: {
          ...(title ? { title } : {}),
          location,
        },
      });
    } catch (e: any) {
      if (e.code === "P2002") {
        throw new GraphQLError("Unit with this title already exists", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      throw e;
    }
  },
  deleteUnit: async (_, { id }) => {
    try {
      return await prisma.unit.delete({ where: { id } });
    } catch (e: any) {
      if (e.code === "P2003") {
        throw new GraphQLError(
          "Cannot delete unit with existing employees. Remove or reassign employees first.",
          {
            extensions: { code: "BAD_USER_INPUT" },
          }
        );
      }
      throw e;
    }
  },
};
