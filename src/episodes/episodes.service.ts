import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/common/prisma/prisma.service";
import { Episode } from "generated/prisma/browser";

@Injectable()
export class EpisodeService{
    constructor(private readonly prisma: PrismaService){

    }

    async getAll(){
        return this.prisma.episode.findMany({
            where: {}
        });
    }

    async getOne(
        id: number
    ): Promise<Episode | null>{
        return this.prisma.episode.findFirst({
            where: {
                id
            }
        })
    }

    async create(name: string, content?: string){
        return this.prisma.episode.create({
            data: {
                name, content
            }
        })
    }

    async update(id: number, newName: string, newContent?: string){
        return this.prisma.episode.update({
            data: {
                name: newName,
                content: newContent
            },
            where: {
                id
            }
        })
    }

    async delete(id: number){
        return this.prisma.episode.delete({
            where: {
                id
            }
        })
    }
}