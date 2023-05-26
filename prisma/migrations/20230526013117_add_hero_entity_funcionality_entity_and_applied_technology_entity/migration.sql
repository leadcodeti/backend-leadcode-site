/*
  Warnings:

  - You are about to drop the column `image` on the `homes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "homes" DROP COLUMN "image";

-- CreateTable
CREATE TABLE "heros" (
    "homeId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "size" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "heros_pkey" PRIMARY KEY ("homeId")
);

-- CreateTable
CREATE TABLE "applied_technologies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "projectCardId" TEXT NOT NULL,

    CONSTRAINT "applied_technologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "functionalities" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectCardId" TEXT NOT NULL,

    CONSTRAINT "functionalities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "heros" ADD CONSTRAINT "heros_homeId_fkey" FOREIGN KEY ("homeId") REFERENCES "homes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applied_technologies" ADD CONSTRAINT "applied_technologies_projectCardId_fkey" FOREIGN KEY ("projectCardId") REFERENCES "project_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalities" ADD CONSTRAINT "functionalities_projectCardId_fkey" FOREIGN KEY ("projectCardId") REFERENCES "project_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
