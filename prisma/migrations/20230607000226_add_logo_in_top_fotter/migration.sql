/*
  Warnings:

  - Added the required column `logo` to the `top_footers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "top_footers" ADD COLUMN     "logo" TEXT NOT NULL;
