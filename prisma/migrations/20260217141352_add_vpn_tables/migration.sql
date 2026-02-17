/*
  Warnings:

  - A unique constraint covering the columns `[vpnProfileId]` on the table `Device` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Device" ADD COLUMN     "vpnProfileId" TEXT;

-- CreateTable
CREATE TABLE "VpnProfileType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "VpnProfileType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VpnProfile" (
    "id" TEXT NOT NULL,
    "profileCode" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "profileTypeId" TEXT NOT NULL,

    CONSTRAINT "VpnProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VpnProfileType_name_key" ON "VpnProfileType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VpnProfile_profileCode_key" ON "VpnProfile"("profileCode");

-- CreateIndex
CREATE UNIQUE INDEX "Device_vpnProfileId_key" ON "Device"("vpnProfileId");

-- AddForeignKey
ALTER TABLE "VpnProfile" ADD CONSTRAINT "VpnProfile_profileTypeId_fkey" FOREIGN KEY ("profileTypeId") REFERENCES "VpnProfileType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_vpnProfileId_fkey" FOREIGN KEY ("vpnProfileId") REFERENCES "VpnProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
