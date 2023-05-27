/*
  Warnings:

  - You are about to drop the column `projectCardId` on the `applied_technologies` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `bottom_footers` table. All the data in the column will be lost.
  - You are about to drop the column `privacyPolicy` on the `bottom_footers` table. All the data in the column will be lost.
  - You are about to drop the column `yarnLogoText` on the `bottom_footers` table. All the data in the column will be lost.
  - You are about to drop the column `areTermsAccepted` on the `form_registers` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `form_registers` table. All the data in the column will be lost.
  - You are about to drop the column `formSectionId` on the `form_registers` table. All the data in the column will be lost.
  - You are about to drop the column `projectDescription` on the `form_registers` table. All the data in the column will be lost.
  - You are about to drop the column `userEmail` on the `form_registers` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `form_registers` table. All the data in the column will be lost.
  - You are about to drop the column `userPhone` on the `form_registers` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `form_sections` table. All the data in the column will be lost.
  - You are about to drop the column `projectCardId` on the `functionalities` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `header_links` table. All the data in the column will be lost.
  - You are about to drop the column `headerId` on the `header_links` table. All the data in the column will be lost.
  - You are about to drop the column `isSelected` on the `header_links` table. All the data in the column will be lost.
  - You are about to drop the column `buttonText` on the `headers` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `headers` table. All the data in the column will be lost.
  - The primary key for the `heros` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `heros` table. All the data in the column will be lost.
  - You are about to drop the column `homeId` on the `heros` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `homes` table. All the data in the column will be lost.
  - You are about to drop the column `ctaButtonText` on the `homes` table. All the data in the column will be lost.
  - You are about to drop the column `headerId` on the `homes` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `project_cards` table. All the data in the column will be lost.
  - You are about to drop the column `isSelected` on the `project_cards` table. All the data in the column will be lost.
  - You are about to drop the column `projectSectionId` on the `project_cards` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `projects_sections` table. All the data in the column will be lost.
  - You are about to drop the column `moreButtonText` on the `projects_sections` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `service_cards` table. All the data in the column will be lost.
  - You are about to drop the column `isSelected` on the `service_cards` table. All the data in the column will be lost.
  - You are about to drop the column `serviceSectionId` on the `service_cards` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `services_sections` table. All the data in the column will be lost.
  - You are about to drop the column `bottomFooterId` on the `sites` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `sites` table. All the data in the column will be lost.
  - You are about to drop the column `formSectionId` on the `sites` table. All the data in the column will be lost.
  - You are about to drop the column `homeId` on the `sites` table. All the data in the column will be lost.
  - You are about to drop the column `projectSectionId` on the `sites` table. All the data in the column will be lost.
  - You are about to drop the column `serviceSectionId` on the `sites` table. All the data in the column will be lost.
  - You are about to drop the column `testemonialSectionId` on the `sites` table. All the data in the column will be lost.
  - You are about to drop the column `topFooterId` on the `sites` table. All the data in the column will be lost.
  - You are about to drop the column `bottomFooterId` on the `social_medias` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `social_medias` table. All the data in the column will be lost.
  - You are about to drop the column `isSelected` on the `social_medias` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `techs_carousel` table. All the data in the column will be lost.
  - You are about to drop the column `homeId` on the `techs_carousel` table. All the data in the column will be lost.
  - You are about to drop the column `isSelected` on the `techs_carousel` table. All the data in the column will be lost.
  - You are about to drop the column `clientAvatar` on the `testemonials` table. All the data in the column will be lost.
  - You are about to drop the column `clientName` on the `testemonials` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `testemonials` table. All the data in the column will be lost.
  - You are about to drop the column `isSelected` on the `testemonials` table. All the data in the column will be lost.
  - You are about to drop the column `jobPosition` on the `testemonials` table. All the data in the column will be lost.
  - You are about to drop the column `testemonialSectionId` on the `testemonials` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `testemonials_sections` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `top_footer_links` table. All the data in the column will be lost.
  - You are about to drop the column `isSelected` on the `top_footer_links` table. All the data in the column will be lost.
  - You are about to drop the column `topFooterId` on the `top_footer_links` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `top_footers` table. All the data in the column will be lost.
  - Added the required column `project_card_id` to the `applied_technologies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `bottom_footers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `are_terms_accepted` to the `form_registers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `form_registers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `form_section_id` to the `form_registers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_description` to the `form_registers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `form_registers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `form_registers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_phone` to the `form_registers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `form_sections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_card_id` to the `functionalities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `header_links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `header_id` to the `header_links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_selected` to the `header_links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `headers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `heros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `home_id` to the `heros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `homes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cta_button_text` to the `homes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `header_id` to the `homes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `project_cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_selected` to the `project_cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_section_id` to the `project_cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `projects_sections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `more_button_text` to the `projects_sections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `service_cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_selected` to the `service_cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_section_id` to the `service_cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `services_sections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `home_id` to the `sites` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bottom_footer_id` to the `social_medias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `social_medias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_selected` to the `social_medias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `techs_carousel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `home_id` to the `techs_carousel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_selected` to the `techs_carousel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_avatar` to the `testemonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_name` to the `testemonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `testemonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_selected` to the `testemonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testemonial_section_id` to the `testemonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `testemonials_sections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `top_footer_links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_selected` to the `top_footer_links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top_footer_id` to the `top_footer_links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `top_footers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "applied_technologies" DROP CONSTRAINT "applied_technologies_projectCardId_fkey";

-- DropForeignKey
ALTER TABLE "form_registers" DROP CONSTRAINT "form_registers_formSectionId_fkey";

-- DropForeignKey
ALTER TABLE "functionalities" DROP CONSTRAINT "functionalities_projectCardId_fkey";

-- DropForeignKey
ALTER TABLE "header_links" DROP CONSTRAINT "header_links_headerId_fkey";

-- DropForeignKey
ALTER TABLE "heros" DROP CONSTRAINT "heros_homeId_fkey";

-- DropForeignKey
ALTER TABLE "homes" DROP CONSTRAINT "homes_headerId_fkey";

-- DropForeignKey
ALTER TABLE "project_cards" DROP CONSTRAINT "project_cards_projectSectionId_fkey";

-- DropForeignKey
ALTER TABLE "service_cards" DROP CONSTRAINT "service_cards_serviceSectionId_fkey";

-- DropForeignKey
ALTER TABLE "sites" DROP CONSTRAINT "sites_bottomFooterId_fkey";

-- DropForeignKey
ALTER TABLE "sites" DROP CONSTRAINT "sites_formSectionId_fkey";

-- DropForeignKey
ALTER TABLE "sites" DROP CONSTRAINT "sites_homeId_fkey";

-- DropForeignKey
ALTER TABLE "sites" DROP CONSTRAINT "sites_projectSectionId_fkey";

-- DropForeignKey
ALTER TABLE "sites" DROP CONSTRAINT "sites_serviceSectionId_fkey";

-- DropForeignKey
ALTER TABLE "sites" DROP CONSTRAINT "sites_testemonialSectionId_fkey";

-- DropForeignKey
ALTER TABLE "sites" DROP CONSTRAINT "sites_topFooterId_fkey";

-- DropForeignKey
ALTER TABLE "social_medias" DROP CONSTRAINT "social_medias_bottomFooterId_fkey";

-- DropForeignKey
ALTER TABLE "techs_carousel" DROP CONSTRAINT "techs_carousel_homeId_fkey";

-- DropForeignKey
ALTER TABLE "testemonials" DROP CONSTRAINT "testemonials_testemonialSectionId_fkey";

-- DropForeignKey
ALTER TABLE "top_footer_links" DROP CONSTRAINT "top_footer_links_topFooterId_fkey";

-- AlterTable
ALTER TABLE "applied_technologies" DROP COLUMN "projectCardId",
ADD COLUMN     "project_card_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "bottom_footers" DROP COLUMN "createdAt",
DROP COLUMN "privacyPolicy",
DROP COLUMN "yarnLogoText",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "privacy_policy" TEXT,
ADD COLUMN     "yarn_logo_text" TEXT;

-- AlterTable
ALTER TABLE "form_registers" DROP COLUMN "areTermsAccepted",
DROP COLUMN "createdAt",
DROP COLUMN "formSectionId",
DROP COLUMN "projectDescription",
DROP COLUMN "userEmail",
DROP COLUMN "userName",
DROP COLUMN "userPhone",
ADD COLUMN     "are_terms_accepted" BOOLEAN NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "form_section_id" TEXT NOT NULL,
ADD COLUMN     "project_description" TEXT NOT NULL,
ADD COLUMN     "user_email" TEXT NOT NULL,
ADD COLUMN     "user_name" TEXT NOT NULL,
ADD COLUMN     "user_phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "form_sections" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "functionalities" DROP COLUMN "projectCardId",
ADD COLUMN     "project_card_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "header_links" DROP COLUMN "createdAt",
DROP COLUMN "headerId",
DROP COLUMN "isSelected",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "header_id" TEXT NOT NULL,
ADD COLUMN     "is_selected" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "headers" DROP COLUMN "buttonText",
DROP COLUMN "createdAt",
ADD COLUMN     "button_text" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "heros" DROP CONSTRAINT "heros_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "homeId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "home_id" TEXT NOT NULL,
ADD CONSTRAINT "heros_pkey" PRIMARY KEY ("home_id");

-- AlterTable
ALTER TABLE "homes" DROP COLUMN "createdAt",
DROP COLUMN "ctaButtonText",
DROP COLUMN "headerId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "cta_button_text" TEXT NOT NULL,
ADD COLUMN     "header_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "project_cards" DROP COLUMN "createdAt",
DROP COLUMN "isSelected",
DROP COLUMN "projectSectionId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "is_selected" BOOLEAN NOT NULL,
ADD COLUMN     "project_section_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "projects_sections" DROP COLUMN "createdAt",
DROP COLUMN "moreButtonText",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "more_button_text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "service_cards" DROP COLUMN "createdAt",
DROP COLUMN "isSelected",
DROP COLUMN "serviceSectionId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "is_selected" BOOLEAN NOT NULL,
ADD COLUMN     "service_section_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "services_sections" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "sites" DROP COLUMN "bottomFooterId",
DROP COLUMN "createdAt",
DROP COLUMN "formSectionId",
DROP COLUMN "homeId",
DROP COLUMN "projectSectionId",
DROP COLUMN "serviceSectionId",
DROP COLUMN "testemonialSectionId",
DROP COLUMN "topFooterId",
ADD COLUMN     "bottom_footer_id" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "form_section_id" TEXT,
ADD COLUMN     "home_id" TEXT NOT NULL,
ADD COLUMN     "project_section_id" TEXT,
ADD COLUMN     "service_section_id" TEXT,
ADD COLUMN     "testemonial_section_id" TEXT,
ADD COLUMN     "top_footer_id" TEXT;

-- AlterTable
ALTER TABLE "social_medias" DROP COLUMN "bottomFooterId",
DROP COLUMN "createdAt",
DROP COLUMN "isSelected",
ADD COLUMN     "bottom_footer_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "is_selected" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "techs_carousel" DROP COLUMN "createdAt",
DROP COLUMN "homeId",
DROP COLUMN "isSelected",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "home_id" TEXT NOT NULL,
ADD COLUMN     "is_selected" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "testemonials" DROP COLUMN "clientAvatar",
DROP COLUMN "clientName",
DROP COLUMN "createdAt",
DROP COLUMN "isSelected",
DROP COLUMN "jobPosition",
DROP COLUMN "testemonialSectionId",
ADD COLUMN     "client_avatar" TEXT NOT NULL,
ADD COLUMN     "client_name" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "is_selected" BOOLEAN NOT NULL,
ADD COLUMN     "job_position" TEXT,
ADD COLUMN     "testemonial_section_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "testemonials_sections" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "top_footer_links" DROP COLUMN "createdAt",
DROP COLUMN "isSelected",
DROP COLUMN "topFooterId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "is_selected" BOOLEAN NOT NULL,
ADD COLUMN     "top_footer_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "top_footers" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "top_footer_logos" (
    "top_footer_id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "top_footer_logos_pkey" PRIMARY KEY ("top_footer_id")
);

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_home_id_fkey" FOREIGN KEY ("home_id") REFERENCES "homes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_service_section_id_fkey" FOREIGN KEY ("service_section_id") REFERENCES "services_sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_project_section_id_fkey" FOREIGN KEY ("project_section_id") REFERENCES "projects_sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_testemonial_section_id_fkey" FOREIGN KEY ("testemonial_section_id") REFERENCES "testemonials_sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_form_section_id_fkey" FOREIGN KEY ("form_section_id") REFERENCES "form_sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_top_footer_id_fkey" FOREIGN KEY ("top_footer_id") REFERENCES "top_footers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sites" ADD CONSTRAINT "sites_bottom_footer_id_fkey" FOREIGN KEY ("bottom_footer_id") REFERENCES "bottom_footers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "homes" ADD CONSTRAINT "homes_header_id_fkey" FOREIGN KEY ("header_id") REFERENCES "headers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "heros" ADD CONSTRAINT "heros_home_id_fkey" FOREIGN KEY ("home_id") REFERENCES "homes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "header_links" ADD CONSTRAINT "header_links_header_id_fkey" FOREIGN KEY ("header_id") REFERENCES "headers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "techs_carousel" ADD CONSTRAINT "techs_carousel_home_id_fkey" FOREIGN KEY ("home_id") REFERENCES "homes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_cards" ADD CONSTRAINT "service_cards_service_section_id_fkey" FOREIGN KEY ("service_section_id") REFERENCES "services_sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_cards" ADD CONSTRAINT "project_cards_project_section_id_fkey" FOREIGN KEY ("project_section_id") REFERENCES "projects_sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applied_technologies" ADD CONSTRAINT "applied_technologies_project_card_id_fkey" FOREIGN KEY ("project_card_id") REFERENCES "project_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalities" ADD CONSTRAINT "functionalities_project_card_id_fkey" FOREIGN KEY ("project_card_id") REFERENCES "project_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testemonials" ADD CONSTRAINT "testemonials_testemonial_section_id_fkey" FOREIGN KEY ("testemonial_section_id") REFERENCES "testemonials_sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_registers" ADD CONSTRAINT "form_registers_form_section_id_fkey" FOREIGN KEY ("form_section_id") REFERENCES "form_sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_footer_logos" ADD CONSTRAINT "top_footer_logos_top_footer_id_fkey" FOREIGN KEY ("top_footer_id") REFERENCES "homes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "top_footer_links" ADD CONSTRAINT "top_footer_links_top_footer_id_fkey" FOREIGN KEY ("top_footer_id") REFERENCES "top_footers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_medias" ADD CONSTRAINT "social_medias_bottom_footer_id_fkey" FOREIGN KEY ("bottom_footer_id") REFERENCES "bottom_footers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
