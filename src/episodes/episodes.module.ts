import { Module } from '@nestjs/common';
import { ConfigsModule } from 'src/configs/configs.module';
import { EpisodesController } from './episodes.controller';

@Module({
    imports: [ConfigsModule],
    controllers: [EpisodesController]
})
export class EpisodesModule {}
