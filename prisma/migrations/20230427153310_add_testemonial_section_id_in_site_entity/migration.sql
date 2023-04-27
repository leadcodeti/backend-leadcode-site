-- AlterTable
ALTER TABLE "sites" ADD COLUMN     "testemonialSectionId" TEXT;

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_testemonialSectionId_fkey" FOREIGN KEY ("testemonialSectionId") REFERENCES "testemonials_sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;
