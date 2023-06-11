/*
  Warnings:

  - You are about to drop the column `image` on the `project_cards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "project_cards" DROP COLUMN "image",
ADD COLUMN     "cover_image" TEXT;
