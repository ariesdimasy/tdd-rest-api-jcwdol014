/*
  Warnings:

  - You are about to drop the column `createdAT` on the `user` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAT`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL;
