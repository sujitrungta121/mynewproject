/*
  Warnings:

  - You are about to drop the `Interest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_InterestTojoinUs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SubjectTojoinUs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `interest` to the `joinUs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjects` to the `joinUs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_InterestTojoinUs` DROP FOREIGN KEY `_InterestTojoinUs_A_fkey`;

-- DropForeignKey
ALTER TABLE `_InterestTojoinUs` DROP FOREIGN KEY `_InterestTojoinUs_B_fkey`;

-- DropForeignKey
ALTER TABLE `_SubjectTojoinUs` DROP FOREIGN KEY `_SubjectTojoinUs_A_fkey`;

-- DropForeignKey
ALTER TABLE `_SubjectTojoinUs` DROP FOREIGN KEY `_SubjectTojoinUs_B_fkey`;

-- AlterTable
ALTER TABLE `joinUs` ADD COLUMN `interest` VARCHAR(255) NOT NULL,
    ADD COLUMN `subjects` VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE `Interest`;

-- DropTable
DROP TABLE `Subject`;

-- DropTable
DROP TABLE `_InterestTojoinUs`;

-- DropTable
DROP TABLE `_SubjectTojoinUs`;
