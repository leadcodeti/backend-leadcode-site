-- CreateTable
CREATE TABLE "client_avatar" (
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "testemonial_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "client_avatar_pkey" PRIMARY KEY ("key")
);

-- AddForeignKey
ALTER TABLE "client_avatar" ADD CONSTRAINT "client_avatar_testemonial_id_fkey" FOREIGN KEY ("testemonial_id") REFERENCES "testemonials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
