/*
  Warnings:

  - You are about to drop the column `icon` on the `techs_carousel` table. All the data in the column will be lost.
  - Added the required column `image` to the `techs_carousel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "techs_carousel" DROP COLUMN "icon",
ADD COLUMN     "image" TEXT NOT NULL;
