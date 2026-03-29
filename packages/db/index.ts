import "dotenv/config";
import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
  log: ["query", "error", "warn"]
});