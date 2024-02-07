/*
  Warnings:

  - You are about to drop the column `interest` on the `joinUs` table. All the data in the column will be lost.
  - You are about to drop the column `subjects` on the `joinUs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `joinUs` DROP COLUMN `interest`,
    DROP COLUMN `subjects`;

-- CreateTable
CREATE TABLE `Subject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Interest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SubjectTojoinUs` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_SubjectTojoinUs_AB_unique`(`A`, `B`),
    INDEX `_SubjectTojoinUs_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_InterestTojoinUs` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_InterestTojoinUs_AB_unique`(`A`, `B`),
    INDEX `_InterestTojoinUs_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_SubjectTojoinUs` ADD CONSTRAINT `_SubjectTojoinUs_A_fkey` FOREIGN KEY (`A`) REFERENCES `Subject`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SubjectTojoinUs` ADD CONSTRAINT `_SubjectTojoinUs_B_fkey` FOREIGN KEY (`B`) REFERENCES `joinUs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_InterestTojoinUs` ADD CONSTRAINT `_InterestTojoinUs_A_fkey` FOREIGN KEY (`A`) REFERENCES `Interest`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_InterestTojoinUs` ADD CONSTRAINT `_InterestTojoinUs_B_fkey` FOREIGN KEY (`B`) REFERENCES `joinUs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
