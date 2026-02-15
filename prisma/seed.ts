import { prisma } from "../src/lib/prismaClient.js";

async function main() {
  await prisma.user.upsert({
    where: {
      username: "admin",
    },
    update: {},
    create: {
      username: "admin",
      password: "admin",
      employee: {
        create: {
          fullname: "Admin Admin",
          contactInfo: "28a Ella Gladstone Dr, Eagle Bay WA 6281, Австралія",
          unit: {
            create: {
              title: "A0000",
              location: "1 Graylands Rd, Claremont WA 6010, Австралія",
            },
          },
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
