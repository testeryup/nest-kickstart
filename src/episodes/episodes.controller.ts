import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EpisodeService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
    constructor(
        private readonly episodeService: EpisodeService
    ) {}
    @Get('featured')
    async findFeatured() {
        return await this.episodeService.getAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.episodeService.getOne(id);
    }

    @Post()
    async create(@Body() input: any) {
        return await this.episodeService.create(input.name, input.content);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() input: any) {
        return await this.episodeService.update(id, input.name, input.content);
    }

    @Put(':id/delete')
    async delete(@Param('id') id: number) {
        return await this.episodeService.delete(id);
    }
}
