/*
  Warnings:

  - Added the required column `icon` to the `social_medias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "social_medias" ADD COLUMN     "icon" TEXT NOT NULL;
