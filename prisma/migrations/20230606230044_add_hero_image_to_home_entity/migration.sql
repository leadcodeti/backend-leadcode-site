/*
  Warnings:

  - Added the required column `hero_image` to the `homes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "homes" ADD COLUMN     "hero_image" TEXT NOT NULL;
