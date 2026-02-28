import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
    @Get('featured')
    findFeatured() {
        return 'featured episodes';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log(id);
        return `id is: ${id}`;
    }

    @Post()
    create(@Body() input: any) {
        console.log(`check var input: ${input}`);
        return `input of post is: ${input}`;
    }
}
