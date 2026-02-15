import { DeviceResolvers } from '../../graphql.js'
import { deviceQuery } from './device.query.js'
import { deviceMutation } from "./device.mutation.js";
import { prisma } from '../../lib/prismaClient.js'

const deviceFieldResolver: DeviceResolvers = {
  employee: async (parent) => {
    return await prisma.employee.findUnique({ where: { id: parent.employeeId } })
  },
}

export const deviceResolvers = {
  Query: deviceQuery,
  Mutation: deviceMutation,
  Device: deviceFieldResolver,
}
