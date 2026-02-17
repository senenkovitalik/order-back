import _ from 'lodash'
import { Resolvers } from '../graphql.js'
import { authResolvers } from './auth/auth.resolver.js'
import { unitResolvers } from './unit/unit.resolver.js'
import { employeeResolvers } from './employee/employee.resolver.js'
import { deviceResolvers } from './device/device.resolver.js'
import { vpnProfileTypeResolvers } from './vpnProfileType/vpnProfileType.resolver.js'
import { vpnProfileResolvers } from './vpnProfile/vpnProfile.resolver.js'

export const resolvers: Resolvers = _.merge(
  authResolvers,
  unitResolvers,
  employeeResolvers,
  deviceResolvers,
  vpnProfileTypeResolvers,
  vpnProfileResolvers
)
