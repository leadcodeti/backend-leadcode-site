/*
  Warnings:

  - You are about to drop the column `description` on the `functionalities` table. All the data in the column will be lost.
  - Added the required column `name` to the `functionalities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "functionalities" DROP COLUMN "description",
ADD COLUMN     "name" TEXT NOT NULL;
