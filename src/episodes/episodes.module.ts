import { Module } from '@nestjs/common';
import { ConfigsModule } from 'src/configs/configs.module';
import { EpisodesController } from './episodes.controller';
import { PrismaModule } from 'src/common/prisma/prisma.module';

@Module({
    imports: [ConfigsModule, PrismaModule],
    controllers: [EpisodesController]
})
export class EpisodesModule {}
