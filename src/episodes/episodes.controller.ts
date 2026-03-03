import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EpisodeService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
    constructor(
        private readonly episodeService: EpisodeService
    ) {}
    @Get('featured')
    findFeatured() {
        return 'featured episodes';
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.episodeService.getOne(id);
    }

    @Post()
    create(@Body() input: any) {
        console.log(`check var input: ${input}`);
        return `input of post is: ${input}`;
    }
}
