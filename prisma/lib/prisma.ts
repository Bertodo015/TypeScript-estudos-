//adaptador --> conexão com o banco de dados
//prisma --> conexão com o cliente

import "dotenv/config"
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";
//DATABASE_URL="file:./dev.db"     arquivo do .env
const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export { prisma };