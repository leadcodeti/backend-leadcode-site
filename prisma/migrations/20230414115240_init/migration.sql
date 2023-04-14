-- CreateTable
CREATE TABLE "sites" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "homeId" TEXT NOT NULL,
    "serviceSectionId" TEXT,
    "projectSectionId" TEXT,
    "formSectionId" TEXT,
    "topFooterId" TEXT,
    "bottomFooterId" TEXT,

    CONSTRAINT "sites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "homes" (
    "id" TEXT NOT NULL,
    "image" TEXT,
    "headline" TEXT NOT NULL,
    "subheadline" TEXT NOT NULL,
    "ctaButtonText" TEXT NOT NULL,
    "headerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "homes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "headers" (
    "id" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "buttonText" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "headers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "header_links" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "isSelected" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "headerId" TEXT NOT NULL,

    CONSTRAINT "header_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "techs_carousel" (
    "id" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isSelected" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "homeId" TEXT NOT NULL,

    CONSTRAINT "techs_carousel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services_sections" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "services_sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_cards" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isSelected" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "serviceSectionId" TEXT NOT NULL,

    CONSTRAINT "service_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects_sections" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "moreButtonText" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_cards" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isSelected" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "projectSectionId" TEXT NOT NULL,

    CONSTRAINT "project_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testemonials_sections" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "testemonials_sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testemonials" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "clientAvatar" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "jobPosition" TEXT,
    "isSelected" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "testemonialSectionId" TEXT NOT NULL,

    CONSTRAINT "testemonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_sections" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "form_sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_registers" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userPhone" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "formSectionId" TEXT NOT NULL,

    CONSTRAINT "form_registers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "top_footers" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "top_footers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "top_footer_columns" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isSelected" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "topFooterId" TEXT NOT NULL,

    CONSTRAINT "top_footer_columns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "top_footer_links" (
    "id" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isSelected" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "topFooterColumnId" TEXT NOT NULL,

    CONSTRAINT "top_footer_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bottom_footers" (
    "id" TEXT NOT NULL,
    "endTextOne" TEXT,
    "endTextTwo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bottom_footers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_medias" (
    "id" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "isSelected" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "bottomFooterId" TEXT NOT NULL,

    CONSTRAINT "social_medias_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_homeId_fkey" FOREIGN KEY ("homeId") REFERENCES "homes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_serviceSectionId_fkey" FOREIGN KEY ("serviceSectionId") REFERENCES "services_sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_projectSectionId_fkey" FOREIGN KEY ("projectSectionId") REFERENCES "projects_sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_formSectionId_fkey" FOREIGN KEY ("formSectionId") REFERENCES "form_sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_topFooterId_fkey" FOREIGN KEY ("topFooterId") REFERENCES "top_footers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_bottomFooterId_fkey" FOREIGN KEY ("bottomFooterId") REFERENCES "bottom_footers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "homes" ADD CONSTRAINT "homes_headerId_fkey" FOREIGN KEY ("headerId") REFERENCES "headers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "header_links" ADD CONSTRAINT "header_links_headerId_fkey" FOREIGN KEY ("headerId") REFERENCES "headers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "techs_carousel" ADD CONSTRAINT "techs_carousel_homeId_fkey" FOREIGN KEY ("homeId") REFERENCES "homes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_cards" ADD CONSTRAINT "service_cards_serviceSectionId_fkey" FOREIGN KEY ("serviceSectionId") REFERENCES "services_sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_cards" ADD CONSTRAINT "project_cards_projectSectionId_fkey" FOREIGN KEY ("projectSectionId") REFERENCES "projects_sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testemonials" ADD CONSTRAINT "testemonials_testemonialSectionId_fkey" FOREIGN KEY ("testemonialSectionId") REFERENCES "testemonials_sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_registers" ADD CONSTRAINT "form_registers_formSectionId_fkey" FOREIGN KEY ("formSectionId") REFERENCES "form_sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_footer_columns" ADD CONSTRAINT "top_footer_columns_topFooterId_fkey" FOREIGN KEY ("topFooterId") REFERENCES "top_footers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_footer_links" ADD CONSTRAINT "top_footer_links_topFooterColumnId_fkey" FOREIGN KEY ("topFooterColumnId") REFERENCES "top_footer_columns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_medias" ADD CONSTRAINT "social_medias_bottomFooterId_fkey" FOREIGN KEY ("bottomFooterId") REFERENCES "bottom_footers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
