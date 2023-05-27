-- CreateTable
CREATE TABLE "service_card_images" (
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "service_card_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_card_images_pkey" PRIMARY KEY ("key")
);

-- AddForeignKey
ALTER TABLE "service_card_images" ADD CONSTRAINT "service_card_images_service_card_id_fkey" FOREIGN KEY ("service_card_id") REFERENCES "service_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
