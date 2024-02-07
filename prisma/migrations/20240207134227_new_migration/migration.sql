/*
  Warnings:

  - You are about to drop the `Interest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_InterestTojoinUs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SubjectTojoinUs` table. If the table is not empty, all the data it contains will be lost.

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
ALTER TABLE `joinUs` MODIFY `about` VARCHAR(10000) NULL;

-- DropTable
DROP TABLE `Interest`;

-- DropTable
DROP TABLE `Subject`;

-- DropTable
DROP TABLE `_InterestTojoinUs`;

-- DropTable
DROP TABLE `_SubjectTojoinUs`;
