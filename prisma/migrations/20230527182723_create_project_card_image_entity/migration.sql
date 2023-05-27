-- CreateTable
CREATE TABLE "project_card_images" (
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "project_card_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_card_images_pkey" PRIMARY KEY ("key")
);

-- AddForeignKey
ALTER TABLE "project_card_images" ADD CONSTRAINT "project_card_images_project_card_id_fkey" FOREIGN KEY ("project_card_id") REFERENCES "project_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
