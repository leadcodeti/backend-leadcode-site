/*
  Warnings:

  - You are about to drop the column `image` on the `project_cards` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `service_cards` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `social_medias` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `top_footers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "project_cards" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "service_cards" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "social_medias" DROP COLUMN "icon";

-- AlterTable
ALTER TABLE "top_footers" DROP COLUMN "logo";

-- CreateTable
CREATE TABLE "tech_carousel_images" (
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "tech_carousel_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tech_carousel_images_pkey" PRIMARY KEY ("key")
);

-- AddForeignKey
ALTER TABLE "tech_carousel_images" ADD CONSTRAINT "tech_carousel_images_tech_carousel_id_fkey" FOREIGN KEY ("tech_carousel_id") REFERENCES "techs_carousel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
