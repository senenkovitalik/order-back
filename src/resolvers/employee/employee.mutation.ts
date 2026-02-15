import { GraphQLError } from 'graphql'
import { MutationResolvers } from '../../graphql.js'
import { prisma } from '../../lib/prismaClient.js'

export const employeeMutation: MutationResolvers = {
  createEmployee: async (_, { employeePayload: { fullname, contactInfo, userId, unitId } }) => {
    try {
      return await prisma.employee.create({
        data: {
          fullname,
          contactInfo,
          userId,
          unitId,
        },
        include: {
          unit: true,
        },
      })
    } catch (e: any) {
      // if (e.code === 'P2002') {
      //   throw new GraphQLError('Employee with this fullname already exists', {
      //     extensions: { code: 'BAD_USER_INPUT' },
      //   })
      // }
      throw e
    }
  },
  updateEmployee: async (_, { employeePayload: { id, fullname, contactInfo, userId, unitId } }) => {
    try {
      return await prisma.employee.update({
        where: { id },
        data: {
          ...(fullname ? { fullname } : {}),
          ...(contactInfo ? { contactInfo } : {}),
          ...(userId ? { userId } : {}),
          ...(unitId ? { unitId } : {}),
        },
        include: {
          unit: true,
        },
      })
    } catch (e: any) {
      // if (e.code === 'P2002') {
      //   throw new GraphQLError('Employee with this fullname already exists', {
      //     extensions: { code: 'BAD_USER_INPUT' },
      //   })
      // }
      throw e
    }
  },
  deleteEmployee: async (_, { id }) => {
    try {
      return await prisma.employee.delete({ where: { id }, include: { unit: true } })
    } catch (e: any) {
      if (e.code === 'P2003') {
        throw new GraphQLError(
          'Cannot delete employee with existing assignments. Remove or reassign employees first.',
          {
            extensions: { code: 'BAD_USER_INPUT' },
          }
        )
      }
      throw e
    }
  },
}
