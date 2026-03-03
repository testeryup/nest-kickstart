-- CreateTable
CREATE TABLE "Episode" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);
