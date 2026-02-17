import { GraphQLError } from 'graphql'
import { MutationResolvers } from '../../graphql.js'
import { prisma } from '../../lib/prismaClient.js'

export const vpnProfileMutation: MutationResolvers = {
  createVpnProfile: async (_, { vpnProfilePayload: { profileCode, ipAddress, profileTypeId } }) => {
    try {
      return await prisma.vpnProfile.create({
        data: {
          profileCode,
          ipAddress,
          profileTypeId,
        },
      })
    } catch (e: any) {
      if (e.code === 'P2002') {
        throw new GraphQLError('VPN Profile with this profileCode already exists', {
          extensions: { code: 'BAD_USER_INPUT' },
        })
      }
      throw e
    }
  },
  updateVpnProfile: async (_, { vpnProfilePayload: { id, profileCode, ipAddress } }) => {
    try {
      return await prisma.vpnProfileType.update({
        where: { id },
        data: {
          ...(profileCode ? { profileCode } : {}),
          ...(ipAddress ? { ipAddress } : {}),
        },
      })
    } catch (e: any) {
      if (e.code === 'P2002') {
        throw new GraphQLError('VPN Profile with this profileCode already exists', {
          extensions: { code: 'BAD_USER_INPUT' },
        })
      }
      throw e
    }
  },
  deleteVpnProfile: async (_, { id }) => {
    try {
      return await prisma.vpnProfile.delete({ where: { id } })
    } catch (e: any) {
      if (e.code === 'P2003') {
        throw new GraphQLError(
          'Cannot delete VPN Profile with existing assignments. Remove or reassign VPN profiles first.',
          {
            extensions: { code: 'BAD_USER_INPUT' },
          }
        )
      }
      throw e
    }
  },
  changeVpnProfileType: async (_, { vpnProfileId, newTypeId }) => {
    try {
      return await prisma.vpnProfile.update({
        where: { id: vpnProfileId },
        data: { profileTypeId: newTypeId },
      })
    } catch (e: any) {
      if (e.code === 'P2003') {
        throw new GraphQLError('Invalid VPN Profile or VPN Profile Type ID', {
          extensions: { code: 'BAD_USER_INPUT' },
        })
      }
      throw e
    }
  },
}
