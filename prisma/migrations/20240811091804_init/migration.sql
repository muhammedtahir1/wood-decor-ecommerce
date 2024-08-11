-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "current_progress" INTEGER NOT NULL,
    "final_goal" INTEGER NOT NULL DEFAULT 400
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
