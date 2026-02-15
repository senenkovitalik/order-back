import { MutationResolvers } from "../../graphql.js";
import { prisma } from "../../lib/prismaClient.js";

export const unitQuery: MutationResolvers = {
  units: async () => {
    return await prisma.unit.findMany();
  },
};
