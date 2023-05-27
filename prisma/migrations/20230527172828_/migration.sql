/*
  Warnings:

  - The primary key for the `heros` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `social_media_icons` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `top_footer_logos` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "heros_home_id_key_key";

-- DropIndex
DROP INDEX "social_media_icons_social_media_id_key_key";

-- DropIndex
DROP INDEX "top_footer_logos_top_footer_id_key_key";

-- AlterTable
ALTER TABLE "heros" DROP CONSTRAINT "heros_pkey",
ADD CONSTRAINT "heros_pkey" PRIMARY KEY ("key");

-- AlterTable
ALTER TABLE "social_media_icons" DROP CONSTRAINT "social_media_icons_pkey",
ADD CONSTRAINT "social_media_icons_pkey" PRIMARY KEY ("key");

-- AlterTable
ALTER TABLE "top_footer_logos" DROP CONSTRAINT "top_footer_logos_pkey",
ADD CONSTRAINT "top_footer_logos_pkey" PRIMARY KEY ("key");
