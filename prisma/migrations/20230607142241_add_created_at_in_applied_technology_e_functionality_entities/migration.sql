/*
  Warnings:

  - Added the required column `created_at` to the `applied_technologies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `functionalities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "applied_technologies" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "functionalities" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;
