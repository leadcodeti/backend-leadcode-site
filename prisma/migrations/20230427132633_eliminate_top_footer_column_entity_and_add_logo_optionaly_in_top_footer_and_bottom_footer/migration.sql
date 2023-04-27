/*
  Warnings:

  - You are about to drop the column `endTextOne` on the `bottom_footers` table. All the data in the column will be lost.
  - You are about to drop the column `endTextTwo` on the `bottom_footers` table. All the data in the column will be lost.
  - You are about to drop the column `topFooterColumnId` on the `top_footer_links` table. All the data in the column will be lost.
  - You are about to drop the `top_footer_columns` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `topFooterId` to the `top_footer_links` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "top_footer_columns" DROP CONSTRAINT "top_footer_columns_topFooterId_fkey";

-- DropForeignKey
ALTER TABLE "top_footer_links" DROP CONSTRAINT "top_footer_links_topFooterColumnId_fkey";

-- AlterTable
ALTER TABLE "bottom_footers" DROP COLUMN "endTextOne",
DROP COLUMN "endTextTwo",
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "privacyPolicy" TEXT,
ADD COLUMN     "yarnLogoText" TEXT;

-- AlterTable
ALTER TABLE "top_footer_links" DROP COLUMN "topFooterColumnId",
ADD COLUMN     "topFooterId" TEXT NOT NULL,
ALTER COLUMN "icon" DROP NOT NULL;

-- DropTable
DROP TABLE "top_footer_columns";

-- AddForeignKey
ALTER TABLE "top_footer_links" ADD CONSTRAINT "top_footer_links_topFooterId_fkey" FOREIGN KEY ("topFooterId") REFERENCES "top_footers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
