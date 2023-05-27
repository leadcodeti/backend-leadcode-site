-- DropForeignKey
ALTER TABLE "social_media_icons" DROP CONSTRAINT "social_media_icons_social_media_id_fkey";

-- AddForeignKey
ALTER TABLE "social_media_icons" ADD CONSTRAINT "social_media_icons_social_media_id_fkey" FOREIGN KEY ("social_media_id") REFERENCES "social_medias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
