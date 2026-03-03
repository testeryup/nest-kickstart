import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:password@localhost:5432/postgres";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    constructor(){
        super({
            adapter: new PrismaPg({
                connectionString: connectionString
            })
        })
    }
    async onModuleInit() {
        await this.$connect();
    }
}