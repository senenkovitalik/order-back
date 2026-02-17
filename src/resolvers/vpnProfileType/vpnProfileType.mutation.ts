import { GraphQLError } from 'graphql'
import { MutationResolvers } from '../../graphql.js'
import { prisma } from '../../lib/prismaClient.js'

export const vpnProfileTypeMutation: MutationResolvers = {
  createVpnProfileType: async (_, { vpnProfileTypePayload: { name, description } }) => {
    try {
      return await prisma.vpnProfileType.create({
        data: {
          name,
          description,
        },
      })
    } catch (e: any) {
      if (e.code === 'P2002') {
        throw new GraphQLError('VPN Profile Type with this name already exists', {
          extensions: { code: 'BAD_USER_INPUT' },
        })
      }
      throw e
    }
  },
  updateVpnProfileType: async (_, { vpnProfileTypePayload: { id, name, description } }) => {
    try {
      return await prisma.vpnProfileType.update({
        where: { id },
        data: {
          ...(name ? { name } : {}),
          ...(description ? { description } : {}),
        },
      })
    } catch (e: any) {
      if (e.code === 'P2002') {
        throw new GraphQLError('VPN Profile Type with this name already exists', {
          extensions: { code: 'BAD_USER_INPUT' },
        })
      }
      throw e
    }
  },
  deleteVpnProfileType: async (_, { id }) => {
    try {
      return await prisma.vpnProfileType.delete({ where: { id } })
    } catch (e: any) {
      if (e.code === 'P2003') {
        throw new GraphQLError(
          'Cannot delete VPN Profile Type with existing assignments. Remove or reassign VPN profiles first.',
          {
            extensions: { code: 'BAD_USER_INPUT' },
          }
        )
      }
      throw e
    }
  },
}
