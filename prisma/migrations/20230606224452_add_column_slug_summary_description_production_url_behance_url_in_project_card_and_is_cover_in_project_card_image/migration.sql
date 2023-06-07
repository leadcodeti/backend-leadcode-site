/*
  Warnings:

  - Added the required column `is_cover` to the `project_card_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `project_cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary_description` to the `project_cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "project_card_images" ADD COLUMN     "is_cover" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "project_cards" ADD COLUMN     "behance_url" TEXT,
ADD COLUMN     "production_url" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "summary_description" TEXT NOT NULL;
