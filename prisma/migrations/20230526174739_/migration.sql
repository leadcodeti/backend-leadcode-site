/*
  Warnings:

  - You are about to alter the column `size` on the `heros` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "heros" ALTER COLUMN "size" SET DATA TYPE INTEGER;
