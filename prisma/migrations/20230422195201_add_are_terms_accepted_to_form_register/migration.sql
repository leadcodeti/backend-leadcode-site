/*
  Warnings:

  - Added the required column `areTermsAccepted` to the `form_registers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "form_registers" ADD COLUMN     "areTermsAccepted" BOOLEAN NOT NULL;
