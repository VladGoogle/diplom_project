-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'ADMIN', 'NETWORK_ADMIN');

-- CreateEnum
CREATE TYPE "ChargeStatus" AS ENUM ('SUCCEEDED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "ChargeCurrency" AS ENUM ('USD', 'RUB');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('RECEIVED', 'PROCESSING', 'READY');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "password" TEXT,
    "phone" TEXT,
    "roles" "Role"[] DEFAULT ARRAY['CUSTOMER']::"Role"[],
    "isBanned" BOOLEAN DEFAULT false,
    "token" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Password" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "token" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Password_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
