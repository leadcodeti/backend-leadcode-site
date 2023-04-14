-- DropForeignKey
ALTER TABLE "header_links" DROP CONSTRAINT "header_links_headerId_fkey";

-- AddForeignKey
ALTER TABLE "header_links" ADD CONSTRAINT "header_links_headerId_fkey" FOREIGN KEY ("headerId") REFERENCES "headers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
