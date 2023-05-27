/*
  Warnings:

  - The primary key for the `heros` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `top_footer_logos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[home_id,key]` on the table `heros` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[top_footer_id,key]` on the table `top_footer_logos` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "heros" DROP CONSTRAINT "heros_pkey",
ADD CONSTRAINT "heros_pkey" PRIMARY KEY ("home_id", "key");

-- AlterTable
ALTER TABLE "top_footer_logos" DROP CONSTRAINT "top_footer_logos_pkey",
ADD CONSTRAINT "top_footer_logos_pkey" PRIMARY KEY ("top_footer_id", "key");

-- CreateTable
CREATE TABLE "social_media_icons" (
    "social_media_id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "social_media_icons_pkey" PRIMARY KEY ("social_media_id","key")
);

-- CreateIndex
CREATE UNIQUE INDEX "social_media_icons_social_media_id_key_key" ON "social_media_icons"("social_media_id", "key");

-- CreateIndex
CREATE UNIQUE INDEX "heros_home_id_key_key" ON "heros"("home_id", "key");

-- CreateIndex
CREATE UNIQUE INDEX "top_footer_logos_top_footer_id_key_key" ON "top_footer_logos"("top_footer_id", "key");

-- AddForeignKey
ALTER TABLE "social_media_icons" ADD CONSTRAINT "social_media_icons_social_media_id_fkey" FOREIGN KEY ("social_media_id") REFERENCES "top_footers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
