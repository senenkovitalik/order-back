import { prisma } from '../src/lib/prismaClient.js'

async function main() {
  // units
  const unitA = await prisma.unit.upsert({
    where: {
      title: 'A0000',
    },
    update: {},
    create: {
      title: 'A0000',
      location: 'USA, 12 Fremont Street, San Francisco, CA 94105',
    },
  })

  const unitB = await prisma.unit.upsert({
    where: {
      title: 'A0001',
    },
    update: {},
    create: {
      title: 'A0001',
      location: 'USA, 1600 Amphitheatre Parkway, Mountain View, CA 94043',
    },
  })

  //  users
  const userA = await prisma.user.upsert({
    where: {
      username: 'james.hetfield',
    },
    update: {},
    create: {
      username: 'james.hetfield',
      password: 'hashedpassword123',
    },
  })

  const userB = await prisma.user.upsert({
    where: {
      username: 'user',
    },
    update: {},
    create: {
      username: 'user',
      password: 'somestrongpassword',
    },
  })

  // emplyees
  const employeeA = await prisma.employee.upsert({
    where: {
      id: 'efbd0d08-c180-4bd1-9a2d-a098b7d3ad12',
    },
    update: {},
    create: {
      id: 'efbd0d08-c180-4bd1-9a2d-a098b7d3ad12',
      fullname: 'James Alan Hetfield',
      contactInfo: 'james.hetfield@example.com',
      unitId: unitA.id,
      userId: userA.id,
    },
  })

  const employeeB = await prisma.employee.upsert({
    where: {
      id: 'd9b1c8e4-5c3a-4f0e-9a2d-a098b7d3ad34',
    },
    update: {},
    create: {
      id: 'd9b1c8e4-5c3a-4f0e-9a2d-a098b7d3ad34',
      fullname: 'Lars Ulrich',
      contactInfo: 'lars.ulrich@example.com',
      unitId: unitB.id,
    },
  })

  // devices
  const deviceA = await prisma.device.upsert({
    where: {
      serialNumber: 'SN123456789',
    },
    update: {},
    create: {
      manufacturer: 'Apple',
      model: 'iPhone 13 Pro',
      os: 'iOS 15',
      serialNumber: 'SN123456789',
      employeeId: employeeA.id,
    },
  })

  const deviceB = await prisma.device.upsert({
    where: {
      serialNumber: 'SN987654321',
    },
    update: {},
    create: {
      manufacturer: 'Samsung',
      model: 'Galaxy S21',
      os: 'Android 11',
      serialNumber: 'SN987654321',
      employeeId: employeeB.id,
    },
  })

  const deviceC = await prisma.device.upsert({
    where: {
      serialNumber: 'SN555555555',
    },
    update: {},
    create: {
      manufacturer: 'Dell',
      model: 'XPS 13',
      os: 'Windows 10',
      serialNumber: 'SN555555555',
      employeeId: employeeA.id,
    },
  })

  // vpn profile types
  const vpnProfileTypeA = await prisma.vpnProfileType.upsert({
    where: {
      name: 'A',
    },
    update: {},
    create: {
      name: 'A',
      description: 'Connect devices to network A',
    },
  })

  const vpnProfileTypeB = await prisma.vpnProfileType.upsert({
    where: {
      name: 'B',
    },
    update: {},
    create: {
      name: 'B',
      description: 'Connect devices to network B',
    },
  })

  const vpnProfileTypeC = await prisma.vpnProfileType.upsert({
    where: {
      name: 'C',
    },
    update: {},
    create: {
      name: 'C',
      description: 'Connect devices to network C',
    },
  })

  //  vpn profiles
  const vpmProfileA = await prisma.vpnProfile.upsert({
    where: {
      profileCode: 'A1702202601',
    },
    update: {},
    create: {
      profileCode: 'A1702202601',
      ipAddress: '192.168.1.1',
      profileTypeId: vpnProfileTypeA.id,
    },
  })

  const vpmProfileB = await prisma.vpnProfile.upsert({
    where: {
      profileCode: 'B1702202602',
    },
    update: {},
    create: {
      profileCode: 'B1702202602',
      ipAddress: '192.168.1.2',
      profileTypeId: vpnProfileTypeB.id,
    },
  })

  const vpmProfileC = await prisma.vpnProfile.upsert({
    where: {
      profileCode: 'C1702202603',
    },
    update: {},
    create: {
      profileCode: 'C1702202603',
      ipAddress: '192.168.1.3',
      profileTypeId: vpnProfileTypeC.id,
    },
  })

  const vpnProfileD = await prisma.vpnProfile.upsert({
    where: {
      profileCode: 'A1702202604',
    },
    update: {},
    create: {
      profileCode: 'A1702202604',
      ipAddress: '192.168.1.4',
      profileTypeId: vpnProfileTypeA.id,
    },
  })

  const vpnProfileE = await prisma.vpnProfile.upsert({
    where: {
      profileCode: 'B1702202605',
    },
    update: {},
    create: {
      profileCode: 'B1702202605',
      ipAddress: '192.168.1.5',
      profileTypeId: vpnProfileTypeB.id,
    },
  })

  const vpnProfileF = await prisma.vpnProfile.upsert({
    where: {
      profileCode: 'C1702202606',
    },
    update: {},
    create: {
      profileCode: 'C1702202606',
      ipAddress: '192.168.1.6',
      profileTypeId: vpnProfileTypeC.id,
    },
  })

  await prisma.device.update({
    where: {
      id: deviceA.id,
    },
    data: {
      vpnProfileId: vpmProfileA.id,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
