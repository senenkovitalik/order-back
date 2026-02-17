import { vpnProfileTypeQuery} from './vpnProfileType.query.js'
import { vpnProfileTypeMutation } from './vpnProfileType.mutation.js'

export const vpnProfileTypeResolvers = {
  Query: vpnProfileTypeQuery,
  Mutation: vpnProfileTypeMutation,
}
