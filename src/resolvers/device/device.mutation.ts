import { GraphQLError } from 'graphql'
import { MutationResolvers } from '../../graphql.js'
import { prisma } from '../../lib/prismaClient.js'

export const deviceMutation: MutationResolvers = {
  createDevice: async (_, { devicePayload: { manufacturer, model, os, serialNumber, employeeId } }) => {
    try {
      return await prisma.device.create({
        data: {
          manufacturer,
          model,
          os,
          serialNumber,
          employeeId,
        },
      })
    } catch (e: any) {
      if (e.code === 'P2002') {
        throw new GraphQLError('Device with this serial number already exists', {
          extensions: { code: 'BAD_USER_INPUT' },
        })
      }
      throw e
    }
  },
  updateDevice: async (_, { devicePayload: { id, employeeId, manufacturer, model, os, serialNumber } }) => {
    try {
      return await prisma.device.update({
        where: { id },
        data: {
          ...(employeeId ? { employeeId } : {}),
          ...(manufacturer ? { manufacturer } : {}),
          ...(model ? { model } : {}),
          ...(os ? { os } : {}),
          ...(serialNumber ? { serialNumber } : {}),
        },
      })
    } catch (e: any) {
      if (e.code === 'P2002') {
        throw new GraphQLError('Device with this serial number already exists', {
          extensions: { code: 'BAD_USER_INPUT' },
        })
      }
      throw e
    }
  },
  deleteDevice: async (_, { id }) => {
    try {
      return await prisma.device.delete({ where: { id } })
    } catch (e: any) {
      if (e.code === 'P2003') {
        throw new GraphQLError(
          'Cannot delete device with existing assignments. Remove or reassign devices first.',
          {
            extensions: { code: 'BAD_USER_INPUT' },
          }
        )
      }
      throw e
    }
  },
}
