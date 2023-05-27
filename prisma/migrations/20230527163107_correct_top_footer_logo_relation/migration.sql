-- DropForeignKey
ALTER TABLE "top_footer_logos" DROP CONSTRAINT "top_footer_logos_top_footer_id_fkey";

-- AddForeignKey
ALTER TABLE "top_footer_logos" ADD CONSTRAINT "top_footer_logos_top_footer_id_fkey" FOREIGN KEY ("top_footer_id") REFERENCES "top_footers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
